# Focal points

Project tiles crop with `object-fit: cover`, and the same photo is cropped to
very different shapes depending on the viewport. Without a focal point the
default `50% 50%` centre crop decapitates people in the wider tiles.

Each photo with a face carries a `pos` in `src/data/projects.js`, which becomes
its `object-position`.

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
most slack in both directions.

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
largest is often a blurred foreground repeat rather than the person the shot is
about.

## Values in use

| Image | Natural | Tile aspects | Faces held | `pos` |
| --- | --- | --- | --- | --- |
| `digitalself-orange-w.jpg` | 1048×604 | 0.45–1.60 | 1 of 1 | `36% 50%` |
| `digitalself-pair-w.jpg` | 1600×1067 | 0.48–1.60 | 1 of 1 | `77% 50%` |
| `digitalself-rig-w.jpg` | 1518×1013 | 0.48–1.60 | 1 of 1 | `38% 50%` |
| `eva-desk-w.jpg` | 1600×1067 | 0.67–1.90 | 1 of 1 | `44% 50%` |
| `eva-red-w.jpg` | 1200×1600 | 0.45–1.60 | 1 of 1 | `50% 29%` |
| `eva-seated-w.jpg` | 1600×1067 | 0.97–2.73 | 1 of 1 | `50% 41%` |
| `nescafe-still-w.jpg` | 1600×895 | 0.59–1.60 | 1 of 1 | `77% 50%` |
| `onlynans-hero-w.jpg` | 1600×905 | 0.95–2.64 | 2 of 2 | `55% 16%` |
| `queenofsmall-still-w.jpg` | 1600×717 | 0.61–1.69 | 1 of 4 | `34% 50%` |
| `sprite-djs-w.jpg` | 1000×1500 | 0.31–1.60 | 1 of 2 | `75% 36%` |
| `sprite-menu-w.jpg` | 1600×1067 | 0.31–1.60 | 1 of 1 | `63% 50%` |

Photos with no detected face — the Sprite stage and crowd frames, the Crusoe
landscapes, the UCB book shots — stay bare strings and centre-crop as before.
Press clippings and the MySurgery panels use `fit: 'contain'`, so they are shown
whole and need no anchor.

Since the imagery now comes from the deck itself, every anchor currently has a
feasible range: the two cases that could not be solved before (`eva-d-w.jpg`,
`nescafe-hero.jpg`) were artefacts of crops the deck does not use. The deck's
own 16:9 Nescafé still replaced a 2.67:1 letterboxed crop whose face was larger
than the crop band at any anchor.
