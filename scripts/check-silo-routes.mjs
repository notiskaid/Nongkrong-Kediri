const base = process.env.CRAWL_BASE_URL || 'https://nongkrongkediri.web.id';
const paths = [
  '/',
  '/tempat-ngopi-kediri/',
  '/cafe-kediri/',
  '/wfc-kediri/',
  '/cafe-buat-nugas-kediri/',
  '/cafe-dekat-kampus-kediri/',
  '/cafe-aesthetic-kediri/',
  '/cafe-instagramable-kediri/',
  '/cafe-view-alam-kediri/',
  '/cafe-kids-friendly-kediri/',
  '/cafe-keluarga-kediri/',
  '/cafe-bukber-kediri/',
  '/cafe-24-jam-kediri/',
  '/cafe-dekat-stasiun-kediri/',
  '/cafe-murah-kediri/',
  '/cafe-rating-tinggi-kediri/',
  '/area/',
  '/area/kota-kediri/',
  '/area/mojoroto/',
  '/area/pesantren/',
  '/area/kabupaten-kediri/'
];

const results = [];
for (const path of paths) {
  const response = await fetch(new URL(path, base), { redirect: 'manual' });
  const html = response.headers.get('content-type')?.includes('text/html') ? await response.text() : '';
  const robots = /<meta name="robots" content="([^"]+)"/.exec(html)?.[1] || '';
  results.push({ path, status: response.status, robots });
}

console.log(JSON.stringify(results, null, 2));
