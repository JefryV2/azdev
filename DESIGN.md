# Aziz Dhouib — portfolio design

## Direction

**Engineer, not artist.** The site is a working dossier, not a gallery. It should read
like technical documentation written by someone who ships: plain labels, real numbers,
typographic structure instead of decoration.

- **Character:** exact, plain-spoken, quietly confident
- **World:** the desk of a research engineer — dark ink surfaces, mono metadata, grey
  hairlines, one green that means "pass"
- **Signature:** the ASCII portrait (a photograph sampled to a glyph ramp) and the
  validation ledger that keeps its failures
- **What carries the identity:** the structure (3 featured stories + full index), the
  real content (provenance labels, honest verdicts), the ASCII portrait

## Rules

1. Structure over ornament. No gradients, glows, blobs, particles or glass. Depth is
   surface steps plus hairlines.
2. Type does the work: Inter for interface, JetBrains Mono for every piece of metadata
   (labels, stack lines, numbers, table headers).
3. One accent: GitHub green `#3fb950`. It marks pass states, the status dot, and hover.
   Semantic colors are toned and only appear in the ledger.
4. Weights 400–600 only. Sentence case. No italic, no uppercase tracking above 0.14em.
5. Motion: one entrance fade+rise (60ms stagger), colour transitions on hover only.
6. Every claim links to something real. Numbers come from the repository, never invented.
7. A company name is only ever shown with what it actually was. BCG and Accenture are
   job simulations; KPM Group is an internship. Say so. The names carry weight without
   borrowing weight they haven't earned.

## Layout

- Container: 1400px max, 24px page padding.
- Hero: name (56–72px) → thesis (24–30px) → **the about paragraph** → actions → 3 mono
  facts; ASCII portrait on the right, capped at 448px, **no frame or caption** — the
  glyphs sit directly on the page background.
- Background: 180px label column (sticky on lg) + **programs & internships** strip
  (BCG / Accenture / KPM Group, each labelled `simulation` or `internship`).
- Featured work: 3 entries, grid `56px | 1fr | 400px` (number | story | figure).
  The first entry carries the validation ledger under its figure. Images are
  unframed: no border, no card, no plate — a mono caption sits under each.
- Full index: one table, 12 rows. Columns collapse on small screens (domain at md,
  stack at lg, state at sm).
- Toolkit: last section before contact. 180px label column + 4 groups (Frontend,
  Backend & data, AI & modelling, Analysis & delivery).
- Résumé (`/resume`): same dossier, `210px | 1fr` rows, numbered section headings
  (`01`–`07`), mono metadata. Prints white-on-black → black-on-white via `@media print`.

## Tokens

| Token | Value |
|---|---|
| background | `#0b0d14` |
| card | `#11141c` |
| raised / secondary | `#1a1e28` |
| hairline | `#171a21` |
| text | `#eef0f5` |
| text secondary | `#c2c8d4` |
| muted | `#7a8296` |
| accent | `#3fb950` |
| radius | 12px cards · 8px buttons/inputs · 6px tags |

## ASCII portrait

`src/components/AsciiPortrait.tsx` turns `/public/assets/portrait.jpg` into text. The
photo is a 640×960 head-and-shoulders shot on a bright, colourless office background,
which is the opposite of the retired dark-background headshot the pipeline was built
for — brightness alone no longer separates subject from backdrop, so a chroma key does:

| Step | Setting |
|---|---|
| crop | `x 0.07 · y 0 · w 0.8594 · h 0.5729` — 550×550 px of the 640×960 source, framing head, collar, tie knot and shoulders |
| grid | Sized to the container, not fixed: the finest even column count that still leaves glyphs at ≥ 4.6px, capped at 160 × 80 and floored at 64. JetBrains Mono has a 0.6em advance and the line pitch is 1.2em, so `cols × cols/2` renders a **square** block — which is why the crop must be square too, and why the block fills its column instead of overflowing it at `lg` |
| ramp | ` .:-=+*#%@` (10 steps) |
| key | `lum > 0.45 && chroma < 0.11` → `lum × 0.02` — the blown background sits at chroma 0.02–0.10, skin at 0.13–0.27. The guard on `lum` is load-bearing: the hair is dark *and* nearly colourless (0.48 / 0.05) and would otherwise key out |
| vignette | centred at `0.5, 0.52`, squeezed 1.35× horizontally, starts at r 0.36, full by r 0.58, falloff raised to the 0.9 power — clears whatever the key left at the edges |
| local contrast | each cell is pushed `0.6 ×` away from the mean of its 3×3 neighbourhood. The canvas downsample blurs exactly the edges that carry the likeness — this is what makes the spectacle rims and the smile read at 160 columns |
| levels | black `0.12` · white `0.82` · gamma `1.05` |
| deadzone | below `0.12` → space, so the background stays empty instead of speckled |

The navy jacket measures 0.16–0.44 luminance, so at these levels most of it falls under
the deadzone: the suit reads as a silhouette with a lit collar, tie knot and lapel edges
rather than as modelled cloth. That is deliberate — pushing `BLACK` lower to fill it in
brings the floor of the photo back as noise.

One background object survives: furniture at the right edge of the frame sits at 0.43
luminance / 0.06 chroma with warm patches up to 0.86 / 0.16 — statistically the shirt,
so no colour rule separates them and only the vignette can. At 160 columns it leaves 53
glyphs in cols 128–140, rows 51–57. Tightening the vignette enough to erase them cuts
about a fifth of the torso as well, so they stay; a second vignette lobe centred on the
torso would do it more cheaply but gives the figure an asymmetric waist.

`chroma` is `(max − min) / 255` and `lum` is the Rec. 709 weighted sum, both read off
the same canvas sample as the luminance.

Resolution, not tone, was the limiting factor. At the same 448px footprint the grid went
from 96 to 160 columns and lit glyphs from 1320 to 3566 — that is what put the spectacle
rims and the smile in the picture; no levels or ramp change at 96 columns recovered it.
Sampling the photo at 4× the grid and box-averaging instead of trusting `drawImage` made
no measurable difference, so the component does not do it.

Missing file → generated "AD" monogram through the same ramp, so the layout never
breaks. The component renders bare text — no card, header row or caption.

The favicon is the same render at 32 columns × 16 rows. That grid is the smallest one
whose glyph shapes still survive being flattened to 16px, and it needs a wider tone
spread than the hero because the browser averages each glyph down to about half a
pixel: black `0.16` · white `0.75` · gamma `1.05` · deadzone `0.10`. In `favicon.svg`
each row is laid down on a pitch of 12 units so the content box stays square — 32 ×
6 advance wide by 16 × 12 tall, the same 1:1 the hero text block has — while the font
size stays 10, because the advance is 0.6 × font size and has to come out at 6. An
earlier version used pitch 10 and drew the subject 20% too wide. `favicon.ico`
carries 16/32/48 PNG entries; each is rasterised and then re-mapped onto the two-colour
palette, because Chrome renders SVG text with LCD subpixel antialiasing and the colour
fringes otherwise bake red and orange pixels into the icon.

The check is correlation, not brightness: the hero render pooled down to the icon's
32 × 16 grid is the target, and the shipped tone scores 0.936 against it — the best of a
54-point sweep over black, white and deadzone. The icon deliberately does **not** get the
hero's local-contrast stage; sharpening at 32 × 16 lowers that score.

If the photo is replaced, re-tune `CROP` first (the crop is a fraction of the source,
so any resolution works), then the key thresholds, then the levels — `BLACK` controls
how much background survives, `WHITE` how fast highlights saturate.

## Open

- The `/resume` page has not been restyled to this direction.
