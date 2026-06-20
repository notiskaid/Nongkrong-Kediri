import { readFileSync, writeFileSync } from 'node:fs';

const input = 'docs/google-maps-data-1781714377780.csv';
const output = 'supabase/import_google_maps_places.sql';

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (quoted && char === '"' && next === '"') {
      cell += '"';
      i += 1;
      continue;
    }
    if (char === '"') {
      quoted = !quoted;
      continue;
    }
    if (!quoted && char === ',') {
      row.push(cell);
      cell = '';
      continue;
    }
    if (!quoted && (char === '\n' || char === '\r')) {
      if (char === '\r' && next === '\n') i += 1;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
      continue;
    }
    cell += char;
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  const [rawHeaders, ...records] = rows.filter((item) => item.some(Boolean));
  const headers = rawHeaders.map((header) => header.replace(/^\uFEFF/, '').trim());
  return records.map((record) => Object.fromEntries(headers.map((header, index) => [header, record[index] || ''])));
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'tempat';
}

function sql(value) {
  if (value == null || value === '') return 'null';
  if (typeof value === 'object') return `'${JSON.stringify(value).replace(/'/g, "''")}'`;
  return `'${String(value).replace(/'/g, "''")}'`;
}

function num(value) {
  const parsed = Number(String(value || '').replace(/[^0-9.]/g, ''));
  return Number.isFinite(parsed) && parsed > 0 ? String(parsed) : 'null';
}

function priceLabel(raw) {
  const value = String(raw || '').toLowerCase().replace(/[^0-9a-z]+/g, '-');
  if (!value) return null;
  if (/1-?25/.test(value)) return 'murah';
  if (/25-?50/.test(value)) return 'sedang';
  if (/50|100/.test(value)) return 'premium';
  return null;
}

function cleanPrice(raw) {
  return String(raw || '')
    .replace(/�/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function categorySlug(row) {
  const haystack = `${row.name || ''} ${row.category || ''}`.toLowerCase();
  if (haystack.includes('warkop')) return 'warkop';
  if (haystack.includes('coffee') || haystack.includes('kopi')) return 'coffee-shop';
  return 'cafe';
}

function excerpt(row) {
  const parts = [`${row.name} masuk antrean kurasi Nongkrong Kediri sebagai kandidat cafe atau tempat nongkrong.`];
  if (row.rating) parts.push(`Rating publik tercatat sekitar ${row.rating}${row.reviews ? ` dari ${row.reviews} ulasan` : ''}.`);
  if (row.price_range) parts.push(`Kisaran harga awal: ${cleanPrice(row.price_range)}.`);
  return parts.join(' ');
}

function description(row) {
  const intro = row.description?.trim() || `${row.name} adalah draft tempat dari data publik yang perlu dicek ulang sebelum dipublish.`;
  return `${intro}\n\nData ini masih berstatus draft. Editor perlu memverifikasi alamat, jam buka, fasilitas, foto, area, dan kecocokan suasana sebelum tempat ditampilkan ke publik.`;
}

const rows = parseCsv(readFileSync(input, 'utf8')).filter((row) => row.name?.trim());
const seen = new Map();
const normalized = rows.map((row, index) => {
  const base = slugify(row.name);
  const count = seen.get(base) || 0;
  seen.set(base, count + 1);
  const slug = count ? `${base}-${count + 1}` : base;
  return { row, slug, sortOrder: (index + 1) * 10, category: categorySlug(row) };
});

const lines = [
  '-- Draft import generated from docs/google-maps-data-1781714377780.csv',
  '-- Review in admin before publishing. Existing slugs are left untouched.',
  'begin;',
  '',
  'with source_places as (',
  '  select * from (values'
];

lines.push(normalized.map(({ row, slug, sortOrder }) => `    (${sql(slug)}, ${sql(row.name)}, ${sql(excerpt(row))}, ${sql(description(row))}, ${sql(row.google_maps_url)}, ${sql(row.phone)}, ${sql(row.website)}, ${sql(row.instagram)}, ${sql(priceLabel(row.price_range))}, ${num(row.rating)}, ${num(row.reviews)}, ${sql(row.hours ? { label: row.hours, is_24h: row.hours.toLowerCase().includes('24') } : null)}, ${sortOrder}, 'draft', ${sql(new Date().toISOString())})`).join(',\n'));

lines.push(
  '  ) as v(slug, name, excerpt, description, google_maps_url, phone, website, instagram, price_label, rating, rating_count, opening_hours, sort_order, status, last_reviewed_at)',
  '), inserted_places as (',
  '  insert into public.places (slug, name, excerpt, description, google_maps_url, phone, website, instagram, price_label, rating, rating_count, opening_hours, sort_order, status, last_reviewed_at, robots)',
  "  select slug, name, excerpt, description, google_maps_url, phone, website, instagram, price_label, rating, rating_count, opening_hours::jsonb, sort_order, status, last_reviewed_at::timestamptz, 'index,follow'",
  '  from source_places',
  '  on conflict (slug) do nothing',
  '  returning id, slug',
  '), category_map as (',
  '  select * from (values'
);

lines.push(normalized.map(({ slug, category }) => `    (${sql(slug)}, ${sql(category)})`).join(',\n'));

lines.push(
  '  ) as v(slug, category_slug)',
  ')',
  'insert into public.place_categories (place_id, category_id)',
  'select p.id, c.id',
  'from inserted_places p',
  'join category_map cm on cm.slug = p.slug',
  'join public.categories c on c.slug = cm.category_slug',
  'on conflict do nothing;',
  '',
  'commit;',
  ''
);

writeFileSync(output, lines.join('\n'), 'utf8');
console.log(`Generated ${output} with ${normalized.length} draft places.`);
