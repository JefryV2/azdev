import React, { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

interface AsciiPortraitProps {
  src: string;
  cols?: number;
  className?: string;
}

/**
 * Tone settings derived from the portrait itself. The photo is a head-and-
 * shoulders shot on a bright, colourless office background, so the pipeline is:
 *
 *   1. crop to the head (fractions of the source image)
 *   2. sample luminance on a canvas at the glyph grid
 *   3. key out blown-out neutral pixels — the background is bright but has
 *      almost no chroma, while skin sits well above it
 *   4. radial vignette to clear whatever background is left at the edges
 *   5. levels + gamma so skin spans the whole glyph ramp
 *   6. deadzone so near-black cells become spaces instead of stray dots
 */
const CROP = { x: 0.1953, y: 0, w: 0.6055, h: 0.4036 };
const RAMP = ' .:-=+*#%@';
const BLACK = 0.26;
const WHITE = 0.83;
const GAMMA = 1.05;
const DEADZONE = 0.06;
const KEY = { lumMin: 0.45, chromaMax: 0.09, dim: 0.16 };
const VIGNETTE = { cx: 0.5, cy: 0.48, radius: 0.3, span: 0.32, xScale: 1 };

const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);

/**
 * Renders a photograph as text. No frame, no caption — the glyphs sit straight
 * on the page background so the portrait reads as part of the page, not a card.
 */
const AsciiPortrait = ({ src, cols = 96, className }: AsciiPortraitProps) => {
  const [lines, setLines] = useState<string[] | null>(null);
  const rows = useMemo(() => Math.round(cols * 0.5), [cols]);

  useEffect(() => {
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
      const output: string[] = [];

      for (let y = 0; y < rows; y++) {
        let line = '';

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
            lum *= 1 - Math.pow(falloff, 1.1);

            // Levels + gamma so the skin tones use the full ramp
            lum = clamp01((lum - BLACK) / (WHITE - BLACK));
            lum = Math.pow(lum, GAMMA);
            if (lum < DEADZONE) lum = 0;
          } else {
            lum = lum < 0.08 ? 0 : lum;
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
      className={cn('select-none', className)}
      role="img"
      aria-label="Aziz Dhouib, rendered as ASCII art"
    >
      {lines ? (
        <pre className="font-mono whitespace-pre text-github-accent/90 text-[4.3px] leading-[1.2] sm:text-[5.2px] md:text-[6px] lg:text-[6.9px]">
          {lines.join('\n')}
        </pre>
      ) : (
        <div className="h-64" aria-hidden />
      )}
    </div>
  );
};

export default AsciiPortrait;
