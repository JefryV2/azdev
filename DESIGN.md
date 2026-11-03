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
photo is a 150×150 headshot on a dark background, so the pipeline is tuned for it:

| Step | Setting |
|---|---|
| crop | `x 0.133 · y 0.093 · w 0.64 · h 0.64` (tight to the face) |
| grid | 96 columns × 48 rows (cell aspect 2:1, so `line-height` = 2 × char width) |
| ramp | ` .:-=+*#%@` (10 steps) |
| vignette | centred at `0.55, 0.42`, starts at r 0.32, full by r 0.86 — clears the trees |
| levels | black `0.26` · white `0.80` · gamma `0.95` |
| deadzone | below `0.06` → space, so the background stays empty instead of speckled |

Missing file → generated "AD" monogram through the same ramp, so the layout never
breaks. The component renders bare text — no card, header row or caption.

If the photo is replaced, re-tune `CROP` first (the crop is a fraction of the source,
so any resolution works), then the levels — `BLACK` controls how much background
survives, `WHITE` how fast highlights saturate.

## Open

- The `/resume` page has not been restyled to this direction.
