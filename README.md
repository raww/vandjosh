# Vicky & Josh — portfolio

Portfolio site for **Vicky & Josh**, a senior creative team (art direction + copy).
Built with [Astro](https://astro.build), deployed automatically to GitHub Pages at
**https://raww.github.io/vandjosh/**.

Dark editorial design, ported from the studio's Claude Design project: a persistent
left rail (wordmark · About · FILTER · PROJECTS) beside a full-viewport case-study
frame. The five neon discipline symbols (○ △ □ ✳ ✕) are the brand's only colour.

## Commands

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm install`     | Install dependencies                           |
| `npm run dev`     | Dev server at `localhost:4321/vandjosh/`       |
| `npm run build`   | Production build to `dist/`                    |
| `npm run preview` | Serve the production build locally             |
| `npm run check`   | Verify every referenced image exists (runs in CI) |

## Adding a new project

Everything derives from **`src/data/projects.js`** — the page, rail entry, sitemap
entry, meta tags and JSON-LD are all generated from it. To add a project:

1. Drop imagery into `public/assets/imagery/`. Conventions: one hero + up to two
   supporting images, web-optimised (≲300 KB JPEGs, portrait or landscape both fine).
2. Append an object to the `PROJECTS` array:

   ```js
   {
     id: 'client-campaign',        // becomes the URL: /work/client-campaign/
     index: '11',
     client: 'Client',
     title: 'Campaign Title',
     disciplines: ['Film'],        // any of: Film, Experiential, Digital, B2B, Social good
     description: 'One short paragraph. Also becomes the page’s meta description.',
     stats: [{ figure: '53k', label: 'Website Visits' }],   // optional
     notes: ['Extra one-liners under the stats'],           // optional
     hero: 'assets/imagery/client-hero.jpg',                // null → typographic cover
     images: ['assets/imagery/client-a.jpg'],               // up to 2 more
     press: ['guardian', 'metro'],                          // keys from the PRESS map
   }
   ```

3. `npm run check` to confirm the image paths, then commit and push — the site
   rebuilds and deploys on push to `main`.

The collage layout adapts automatically to how much media/info the entry has
(see `src/components/ProjectFrame.astro`). Projects with `hero: null` get the
typographic cover, like Nescafé and Queen of Small.

New press outlet? Add the white-on-transparent logo to `public/assets/press/`
and one line to the `PRESS` map.

## SEO

- Per-page titles, descriptions, canonical URLs, Open Graph/Twitter tags and
  JSON-LD are assembled in `src/components/Seo.astro` from `src/data/site.js` +
  `projects.js`. There is nothing to keep in sync by hand.
- Share links show a single global card (`public/og/card.png`): the VICKY & JOSH
  wordmark with the five symbols.
- Sitemap (`sitemap-index.xml`) and `robots.txt` are generated/served automatically.

### Regenerating the share card

The card's source is the (unlisted, noindex) route `/og-card`. If the wordmark or
symbols change: `npm run dev`, screenshot `localhost:4321/vandjosh/og-card/` at
exactly **1200×630**, save as `public/og/card.png`.

## Deploying

Pushes to `main` run `.github/workflows/deploy.yml`: image check → Astro build
(`withastro/action`) → GitHub Pages deploy. No secrets needed beyond the
repository's Pages permissions.

**Custom domain later:** set `site` (and `base: '/'`) in `astro.config.mjs`, add a
`public/CNAME` file with the domain, update the `Sitemap:` line in
`public/robots.txt`, and point DNS at GitHub Pages.
