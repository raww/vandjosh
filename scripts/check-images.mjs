// Verifies every image referenced in src/data/projects.js exists in public/.
// Run via `npm run check` (also runs in CI before the build).
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { PROJECTS, PRESS } from '../src/data/projects.js';

const publicDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');

const missing = [];

for (const project of PROJECTS) {
  for (const path of [project.hero, project.video, ...(project.images || [])].filter(Boolean)) {
    if (!existsSync(join(publicDir, path))) missing.push(`${project.id}: ${path}`);
  }
  for (const key of project.press || []) {
    if (!PRESS[key]) {
      missing.push(`${project.id}: press key "${key}" not in PRESS map`);
    } else if (!existsSync(join(publicDir, 'assets', 'press', PRESS[key]))) {
      missing.push(`${project.id}: assets/press/${PRESS[key]}`);
    }
  }
}

if (missing.length) {
  console.error('Missing images referenced by src/data/projects.js:');
  for (const m of missing) console.error(`  - ${m}`);
  process.exit(1);
}
console.log(`All images referenced by ${PROJECTS.length} projects exist.`);
