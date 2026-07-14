// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed to GitHub Pages as a project page.
// When moving to a custom domain: set site to the domain, base to '/',
// and add a public/CNAME file — nothing else needs to change.
export default defineConfig({
  site: 'https://raww.github.io',
  base: '/vandjosh',
  integrations: [
    // /og-card is the share-image source, not a page for humans or crawlers
    sitemap({ filter: (page) => !page.includes('/og-card') }),
  ],
});
