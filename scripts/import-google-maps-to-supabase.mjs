import { readFileSync } from 'node:fs';
import { createClient } from '@supabase/supabase-js';

const csvPath = 'docs/google-maps-data-1781714377780.csv';

function loadEnv(path = '.env') {
  const env = {};
  for (const line of readFileSync(path, 'utf8').split(/\r?\n/)) {
    const match = /^\s*([^#=]+)=(.*)$/.exec(line);
    if (!match) continue;
    env[match[1].trim()] = match[2].trim().replace(/^['"]|['"]$/g, '');
  }
  return env;
}

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

function priceLabel(raw) {
  const value = String(raw || '').toLowerCase().replace(/[^0-9a-z]+/g, '-');
  if (!value) return null;
  if (/1-?25/.test(value)) return 'murah';
  if (/25-?50/.test(value)) return 'sedang';
  if (/50|100/.test(value)) return 'premium';
  return null;
}

function cleanPrice(raw) {
  return String(raw || '').replace(/�/g, ' ').replace(/\s+/g, ' ').trim();
}

function numberOrNull(value) {
  const parsed = Number(String(value || '').replace(/[^0-9.]/g, ''));
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
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

const env = loadEnv();
const url = env.PUBLIC_SUPABASE_URL;
const serviceRole = env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceRole) throw new Error('PUBLIC_SUPABASE_URL atau SUPABASE_SERVICE_ROLE_KEY tidak tersedia di .env');

const supabase = createClient(url, serviceRole, { auth: { persistSession: false } });
const rows = parseCsv(readFileSync(csvPath, 'utf8')).filter((row) => row.name?.trim());
const seen = new Map();
const importedAt = new Date().toISOString();
const normalized = rows.map((row, index) => {
  const base = slugify(row.name);
  const count = seen.get(base) || 0;
  seen.set(base, count + 1);
  return {
    row,
    category: categorySlug(row),
    place: {
      slug: count ? `${base}-${count + 1}` : base,
      name: row.name,
      excerpt: excerpt(row),
      description: description(row),
      google_maps_url: row.google_maps_url || null,
      phone: row.phone || null,
      website: row.website || null,
      instagram: row.instagram || null,
      price_label: priceLabel(row.price_range),
      rating: numberOrNull(row.rating),
      rating_count: numberOrNull(row.reviews),
      opening_hours: row.hours ? { label: row.hours, is_24h: row.hours.toLowerCase().includes('24') } : null,
      sort_order: (index + 1) * 10,
      status: 'draft',
      last_reviewed_at: importedAt,
      robots: 'index,follow'
    }
  };
});

const { data: categories, error: categoryError } = await supabase.from('categories').select('id,slug');
if (categoryError) throw categoryError;
const categoryBySlug = new Map(categories.map((category) => [category.slug, category.id]));

const { data: inserted, error: insertError } = await supabase
  .from('places')
  .upsert(normalized.map((item) => item.place), { onConflict: 'slug', ignoreDuplicates: true })
  .select('id,slug');

if (insertError) throw insertError;

const insertedBySlug = new Map((inserted || []).map((place) => [place.slug, place.id]));
const pivots = normalized
  .map((item) => ({ place_id: insertedBySlug.get(item.place.slug), category_id: categoryBySlug.get(item.category) }))
  .filter((item) => item.place_id && item.category_id);

if (pivots.length) {
  const { error: pivotError } = await supabase.from('place_categories').upsert(pivots, { onConflict: 'place_id,category_id', ignoreDuplicates: true });
  if (pivotError) throw pivotError;
}

console.log(`CSV rows: ${rows.length}`);
console.log(`Inserted draft places: ${inserted?.length || 0}`);
console.log(`Skipped existing slugs: ${rows.length - (inserted?.length || 0)}`);
console.log(`Inserted category relations: ${pivots.length}`);
