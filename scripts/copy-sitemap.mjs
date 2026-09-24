import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = join(process.cwd(), 'dist');
const index = join(dist, 'sitemap-index.xml');
const alias = join(dist, 'sitemap.xml');
if (existsSync(index)) {
  copyFileSync(index, alias);
  console.log('Copied sitemap-index.xml → sitemap.xml (200 for crawlers)');
} else {
  console.warn('No dist/sitemap-index.xml — skip sitemap.xml copy');
}
