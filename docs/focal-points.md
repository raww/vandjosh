# Focal points

Project tiles crop with `object-fit: cover`, and the same photo is cropped to
very different shapes depending on the viewport — today's layout puts tiles
anywhere between roughly 0.2:1 and 3.7:1. Without a focal point the default
`50% 50%` centre crop decapitates people in the wide tiles.

Each photo with a face therefore carries a `pos` in `src/data/projects.js`,
which becomes its `object-position`.

## Why the anchor is not the face's centre

With `cover`, `object-position: p%` maps the image's `p%` point onto the
container's `p%` point. So the anchor that keeps a face visible depends on how
much of the image the tile actually shows.

For one axis, with a container of length `C`, natural length `N`, scale
`s = max(Cw/Nw, Ch/Nh)` and overflow `O = N·s − C`, the visible source band
starts at `(O·p/100)/s` and is `C/s` long. Keeping a region `[lo, hi]` inside it
bounds the anchor:

```
p/100 ≥ (hi·s − C) / O        and        p/100 ≤ (lo·s) / O
```

Intersecting those bounds over every container the layout produces gives a
feasible range per axis; the value in use is its **midpoint**, which leaves the
most slack in both directions. Where the range is empty the face is physically
larger than the crop band and no anchor can save it — the midpoint still
minimises what is lost.

## How these were derived

1. Faces detected with OpenCV's YuNet (`face_detection_yunet_2023mar.onnx`),
   keeping detections scoring ≥ 0.8, each verified by eye against an annotated
   contact sheet.
2. Real tile geometry collected from the built site across 21 viewports, from
   360×740 to 1920×1080.
3. The feasible range computed per axis as above, then its midpoint.
4. Re-checked across 15 viewports: every targeted face is fully inside its tile.

Where a photo holds more than one face, the anchor covers all of them when they
fit. When they cannot (faces at opposite edges), it falls back to the subject —
**the most central of the top-scoring faces**, not the largest, because the
largest is often a blurred foreground repeat (Queen of Small) rather than the
person the shot is about.

## Values in use

| Image | Natural | Tile aspects | Faces held | `pos` |
| --- | --- | --- | --- | --- |
| `crusoe-e-w.jpg` | 960×1440 | 0.36–1.60 | 1 of 2 | `18% 59%` |
| `digitalself-a-w.jpg` | 1440×960 | 0.31–1.60 | 1 of 2 | `25% 50%` |
| `digitalself-hero-w.jpg` | 1440×811 | 0.21–1.60 | 1 of 1 | `44% 50%` |
| `eva-2-w.jpg` | 960×1440 | 0.36–1.60 | 1 of 1 | `44% 16%` |
| `eva-d-w.jpg` | 960×1440 | 1.32–3.68 | 1 of 1 | `50% 17%` |
| `eva-hero-w.jpg` | 1080×1440 | 0.54–1.60 | 1 of 1 | `50% 29%` |
| `nescafe-hero.jpg` | 1280×480 | 0.52–1.60 | 1 of 1 | `72% 50%` |
| `onlynans-2-w.jpg` | 1600×905 | 0.75–2.18 | 2 of 2 | `54% 27%` |
| `queenofsmall-hero-w.jpg` | 1280×720 | 0.54–1.60 | 1 of 2 | `51% 50%` |
| `sprite-b-w.jpg` | 1440×960 | 1.32–3.68 | 1 of 1 | `50% 20%` |
| `sprite-e-w.jpg` | 960×1440 | 0.36–1.60 | 1 of 2 | `71% 36%` |

Photos with no detected face — `sprite-a-w.jpg` (a dark crowd), `crusoe-2-w.jpg`
(landscape), `crusoe-a-w.jpg` (a seal) and the UCB book shots — stay bare
strings and centre-crop as before. Press clippings and the MySurgery panels use
`fit: 'contain'`, so they are shown whole and need no anchor.

### Known limits

`eva-d-w.jpg` and `nescafe-hero.jpg` have faces larger than the crop band at the
most extreme tile aspect, so at the very widest viewports the face fills the
tile edge to edge. Both are anchored to lose as little as possible. Fixing them
properly means a differently-framed source photo, not a different anchor.
