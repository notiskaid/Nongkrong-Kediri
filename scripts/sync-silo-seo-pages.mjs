import { readFileSync } from 'node:fs';
import { createClient } from '@supabase/supabase-js';

function loadDotEnv() {
  try {
    for (const line of readFileSync('.env', 'utf8').split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const index = trimmed.indexOf('=');
      if (index === -1) continue;
      const key = trimmed.slice(0, index).trim();
      const value = trimmed.slice(index + 1).trim().replace(/^['"]|['"]$/g, '');
      if (key && process.env[key] == null) process.env[key] = value;
    }
  } catch {}
}

loadDotEnv();

const url = process.env.PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY;
if (!url || !key) throw new Error('Missing Supabase env.');

const supabase = createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
const now = new Date().toISOString();

const pages = [
  { slug: 'cafe-kediri', title: 'Cafe Kediri', query_config: { categories: ['cafe', 'coffee-shop'], sort: 'featured_first', isIndexable: true } },
  { slug: 'wfc-kediri', title: 'WFC Kediri', query_config: { use_cases: ['wfc'], facilities: ['wifi', 'colokan'], sort: 'featured_first', isIndexable: true } },
  { slug: 'cafe-buat-nugas-kediri', title: 'Cafe Buat Nugas Kediri', query_config: { use_cases: ['nugas'], facilities: ['wifi'], sort: 'featured_first', isIndexable: true } },
  { slug: 'cafe-dekat-kampus-kediri', title: 'Cafe Dekat Kampus Kediri', query_config: { areas: ['mojoroto'], use_cases: ['nugas', 'wfc'], sort: 'featured_first', isIndexable: true } },
  { slug: 'cafe-aesthetic-kediri', title: 'Cafe Aesthetic Kediri', query_config: { categories: ['cafe', 'coffee-shop'], use_cases: ['aesthetic'], sort: 'featured_first', isIndexable: true } },
  { slug: 'cafe-instagramable-kediri', title: 'Cafe Instagramable Kediri', query_config: { categories: ['cafe', 'coffee-shop'], use_cases: ['instagramable', 'aesthetic'], sort: 'featured_first', isIndexable: false } },
  { slug: 'cafe-view-alam-kediri', title: 'Cafe View Alam Kediri', query_config: { categories: ['cafe', 'coffee-shop', 'resto-cafe'], use_cases: ['view-alam'], facilities: ['view-alam', 'outdoor'], sort: 'featured_first', isIndexable: true } },
  { slug: 'cafe-kids-friendly-kediri', title: 'Cafe Kids Friendly Kediri', query_config: { categories: ['cafe', 'resto-cafe'], use_cases: ['kids-friendly', 'keluarga'], facilities: ['kids-friendly', 'area-bermain'], sort: 'featured_first', isIndexable: false } },
  { slug: 'cafe-keluarga-kediri', title: 'Cafe Keluarga Kediri', query_config: { categories: ['cafe', 'resto-cafe'], use_cases: ['keluarga'], sort: 'featured_first', isIndexable: false } },
  { slug: 'cafe-bukber-kediri', title: 'Cafe Bukber Kediri', query_config: { categories: ['cafe', 'resto-cafe'], use_cases: ['bukber', 'keluarga'], facilities: ['reservasi', 'mushola'], sort: 'featured_first', isIndexable: false } },
  { slug: 'cafe-24-jam-kediri', title: 'Cafe 24 Jam Kediri', query_config: { facilities: ['24-jam'], sort: 'featured_first', isIndexable: true } },
  { slug: 'cafe-dekat-stasiun-kediri', title: 'Cafe Dekat Stasiun Kediri', query_config: { areas: ['kota-kediri'], categories: ['cafe', 'coffee-shop', 'warkop'], sort: 'featured_first', isIndexable: true } },
  { slug: 'cafe-murah-kediri', title: 'Cafe Murah Kediri', query_config: { price_label: ['murah'], sort: 'featured_first', isIndexable: false } },
  { slug: 'cafe-rating-tinggi-kediri', title: 'Cafe Rating Tinggi Kediri', query_config: { categories: ['cafe', 'coffee-shop'], min_rating: 4.3, sort: 'rating_desc', isIndexable: true } }
];

function defaultContent(title) {
  return [
    {
      type: 'intent_guide',
      label: 'Kurasi cepat',
      title: `Cara membaca rekomendasi ${title}`,
      description: 'Gunakan kriteria ini sebagai shortlist awal. Data venue akan makin kuat saat tempat valid bertambah.',
      criteria: ['Cek area dan akses.', 'Bandingkan fasilitas yang memang tercatat.', 'Buka halaman detail sebelum berangkat.'],
      avoid_label: 'Catatan',
      avoid: 'Jangan gunakan halaman ini sebagai satu-satunya patokan karena data tempat dapat berubah.'
    },
    { type: 'markdown', content: `## ${title}\n\nHalaman ini disiapkan sebagai landing page kurasi untuk ${title.toLowerCase()}. Listing otomatis hanya memakai data tempat yang sudah tersedia di database. Karena beberapa data masih bertahap, halaman dapat berstatus noindex sampai venue valid dan konten uniknya cukup.` }
  ];
}

for (const page of pages) {
  const { data: existing, error: readError } = await supabase.from('seo_pages').select('id, content, published_at').eq('slug', page.slug).maybeSingle();
  if (readError) throw readError;
  const payload = {
    title: page.title,
    h1: page.title,
    page_type: 'keyword',
    description: `${page.title} untuk membantu memilih tempat berdasarkan data area, fasilitas, dan kebutuhan datang yang tersedia.`,
    query_config: page.query_config,
    content: Array.isArray(existing?.content) && existing.content.length ? existing.content : defaultContent(page.title),
    status: 'published',
    robots: page.query_config.isIndexable === false ? 'noindex,follow' : 'index,follow',
    meta_title: `${page.title}: Rekomendasi dan Kurasi Lokal`,
    meta_description: `Lihat ${page.title.toLowerCase()} dengan listing berbasis data tempat, area, fasilitas, dan catatan editorial yang tersedia.`,
    published_at: existing?.published_at || now,
    updated_at: now,
    last_reviewed_at: now
  };
  if (existing?.id) {
    const { error } = await supabase.from('seo_pages').update(payload).eq('id', existing.id);
    if (error) throw error;
  } else {
    const { error } = await supabase.from('seo_pages').insert({ ...payload, slug: page.slug });
    if (error) throw error;
  }
}

console.log(`Synced ${pages.length} canonical silo SEO pages.`);
