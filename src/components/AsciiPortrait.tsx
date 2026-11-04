import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AsciiPortraitProps {
  src: string;
  className?: string;
}

/**
 * Tone settings derived from the portrait itself. The photo is a head-and-
 * shoulders shot on a bright, colourless office background, so the pipeline is:
 *
 *   1. crop a square around head, collar and tie knot (fractions of the source).
 *      The glyph grid is 2:1, so a square crop is what keeps the face honest.
 *   2. sample luminance on a canvas at the glyph grid
 *   3. key out blown-out neutral pixels — the background sits near zero chroma,
 *      while skin, the blue shirt and the navy suit all carry colour
 *   4. radial vignette, squeezed horizontally, to fade the blurred background
 *      that shares the suit's luminance and so cannot be keyed by colour
 *   5. local contrast — push each cell away from the mean of its 3×3
 *      neighbourhood, which is what makes the spectacle rims and the smile read
 *   6. levels + gamma so skin spans the whole glyph ramp and the suit's lit
 *      edges survive; the suit itself is too dark to render, so it reads as
 *      silhouette and rim light
 *   7. deadzone so near-black cells become spaces instead of stray dots
 */
const CROP = { x: 0.07, y: 0, w: 0.8594, h: 0.5729 };
const RAMP = ' .:-=+*#%@';
const BLACK = 0.12;
const WHITE = 0.82;
const GAMMA = 1.05;
const DEADZONE = 0.12;
const SHARP = 0.6;
const KEY = { lumMin: 0.45, chromaMax: 0.11, dim: 0.02 };
const VIGNETTE = { cx: 0.5, cy: 0.52, radius: 0.36, span: 0.22, xScale: 1.35, power: 0.9 };

/**
 * JetBrains Mono advances 0.6em and the line pitch is 1.2em, so a grid of
 * cols × cols/2 cells is a square — the same shape as the crop. Detail is what
 * makes the portrait read, so the grid grows with the container until the glyphs
 * get too small for the rasteriser to draw cleanly, and then it holds still.
 */
const GLYPH_MIN_PX = 4.6;
const GRID_MAX = 160;
const GRID_MIN = 64;

const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);

const gridFor = (width: number) => {
  const cols = Math.floor(width / GLYPH_MIN_PX / 0.6 / 2) * 2;
  return Math.max(GRID_MIN, Math.min(GRID_MAX, cols));
};

/**
 * Renders a photograph as text. No frame, no caption — the glyphs sit straight
 * on the page background so the portrait reads as part of the page, not a card.
 */
const AsciiPortrait = ({ src, className }: AsciiPortraitProps) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [grid, setGrid] = useState<{ cols: number; px: number } | null>(null);
  const [lines, setLines] = useState<string[] | null>(null);

  useLayoutEffect(() => {
    const el = boxRef.current;
    if (!el) return;

    const measure = () => {
      const width = el.clientWidth;
      if (!width) return;
      const cols = gridFor(width);
      setGrid((prev) => {
        const px = width / (cols * 0.6);
        return prev && prev.cols === cols && Math.abs(prev.px - px) < 0.05
          ? prev
          : { cols, px };
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cols = grid?.cols ?? 0;
  const rows = Math.round(cols * 0.5);

  useEffect(() => {
    if (!cols) return;

    let cancelled = false;

    const render = (img: HTMLImageElement | null) => {
      if (cancelled) return;

      const canvas = document.createElement('canvas');
      canvas.width = cols;
      canvas.height = rows;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, cols, rows);

      if (img) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        const sx = img.naturalWidth * CROP.x;
        const sy = img.naturalHeight * CROP.y;
        const sw = img.naturalWidth * CROP.w;
        const sh = img.naturalHeight * CROP.h;
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cols, rows);
      } else {
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `500 ${Math.min(rows * 0.62, cols * 0.42)}px "JetBrains Mono", monospace`;
        ctx.fillText('AD', cols / 2, rows / 2);
      }

      const { data } = ctx.getImageData(0, 0, cols, rows);
      const cells = cols * rows;
      const tone = new Float32Array(cells);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          let lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

          if (img) {
            // Key — the office background is bright but colourless, skin is not
            const chroma = (Math.max(r, g, b) - Math.min(r, g, b)) / 255;
            if (lum > KEY.lumMin && chroma < KEY.chromaMax) lum *= KEY.dim;

            // Vignette — fade whatever background the key left at the edges
            const dx = (x / cols - VIGNETTE.cx) * VIGNETTE.xScale;
            const dy = y / rows - VIGNETTE.cy;
            const radius = Math.sqrt(dx * dx + dy * dy);
            const falloff = clamp01((radius - VIGNETTE.radius) / VIGNETTE.span);
            lum *= 1 - Math.pow(falloff, VIGNETTE.power);
          } else {
            lum = lum < 0.08 ? 0 : lum;
          }

          tone[y * cols + x] = lum;
        }
      }

      // Local contrast — the canvas downsample softens exactly the edges that
      // carry the likeness, so lift every cell off its neighbourhood mean
      if (img) {
        const sharpened = new Float32Array(cells);
        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const i = y * cols + x;
            let sum = 0;
            let count = 0;
            for (let dy = -1; dy <= 1; dy++) {
              const yy = y + dy;
              if (yy < 0 || yy >= rows) continue;
              for (let dx = -1; dx <= 1; dx++) {
                const xx = x + dx;
                if (xx < 0 || xx >= cols) continue;
                sum += tone[yy * cols + xx];
                count++;
              }
            }
            const mean = sum / count;
            const cell = tone[i];
            sharpened[i] = clamp01(cell + SHARP * (cell - mean));
          }
        }
        tone.set(sharpened);
      }

      const output: string[] = [];

      for (let y = 0; y < rows; y++) {
        let line = '';

        for (let x = 0; x < cols; x++) {
          let lum = tone[y * cols + x];

          if (img) {
            // Levels + gamma so the skin tones use the full ramp
            lum = clamp01((lum - BLACK) / (WHITE - BLACK));
            lum = Math.pow(lum, GAMMA);
            if (lum < DEADZONE) lum = 0;
          }

          const index = Math.min(RAMP.length - 1, Math.floor(lum * RAMP.length));
          line += RAMP[index];
        }

        output.push(line);
      }

      if (!cancelled) setLines(output);
    };

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => render(img);
    img.onerror = () => render(null);
    img.src = src;

    return () => {
      cancelled = true;
    };
  }, [src, cols, rows]);

  return (
    <div
      ref={boxRef}
      className={cn('select-none', className)}
      role="img"
      aria-label="Aziz Dhouib, rendered as ASCII art"
    >
      {lines && grid ? (
        <pre
          className="font-mono whitespace-pre text-github-accent/90 leading-[1.2]"
          style={{ fontSize: `${grid.px}px` }}
        >
          {lines.join('\n')}
        </pre>
      ) : (
        <div className="h-64" aria-hidden />
      )}
    </div>
  );
};

export default AsciiPortrait;
