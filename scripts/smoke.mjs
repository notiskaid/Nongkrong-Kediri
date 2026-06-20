import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/pages/index.astro',
  'src/pages/area/index.astro',
  'src/pages/kontak.astro',
  'src/pages/disclaimer.astro',
  'src/pages/tempat/[slug].astro',
  'src/pages/[slug].astro',
  'src/components/layout/SiteHeader.astro',
  'src/components/layout/SiteFooter.astro',
  'src/components/home/QuickLinks.astro'
];

const requiredLinks = [
  '/cafe-kediri/',
  '/tempat-ngopi-kediri/',
  '/wfc-kediri/',
  '/area/',
  '/kontak/',
  '/disclaimer/'
];

function fail(message) {
  console.error(`Smoke failed: ${message}`);
  process.exitCode = 1;
}

for (const file of requiredFiles) {
  if (!existsSync(file)) fail(`missing ${file}`);
}

const header = readFileSync('src/components/layout/SiteHeader.astro', 'utf8');
const footer = readFileSync('src/components/layout/SiteFooter.astro', 'utf8');
const quickLinks = readFileSync('src/components/home/QuickLinks.astro', 'utf8');
const constants = readFileSync('src/lib/constants.ts', 'utf8');
const submitRedirect = readFileSync('src/pages/submit-tempat.astro', 'utf8');
const submitApi = readFileSync('src/pages/api/submit-place.ts', 'utf8');

for (const link of requiredLinks) {
  if (!`${header}\n${footer}`.includes(link)) fail(`header/footer missing ${link}`);
}

if (!constants.includes("href: '/cafe-kediri/'")) fail('quicklinks missing cafe pillar');
if (quickLinks.includes('/rss.xml') || quickLinks.includes('/kontak/')) fail('quicklinks should stay discovery-only');
if (!submitRedirect.includes("Astro.redirect('/kontak/'")) fail('submit-tempat should redirect to kontak');
if (!submitApi.includes('status: 410')) fail('submit API should be disabled with 410');

if (!process.exitCode) console.log('Smoke OK');
