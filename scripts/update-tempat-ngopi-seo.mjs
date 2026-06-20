import { readFileSync } from 'node:fs';
import { createClient } from '@supabase/supabase-js';

function loadDotEnv() {
  try {
    const raw = readFileSync('.env', 'utf8');
    for (const line of raw.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const index = trimmed.indexOf('=');
      if (index === -1) continue;
      const key = trimmed.slice(0, index).trim();
      const value = trimmed.slice(index + 1).trim().replace(/^['"]|['"]$/g, '');
      if (key && process.env[key] == null) process.env[key] = value;
    }
  } catch {
    // CI/production can provide real env vars without a local .env file.
  }
}

loadDotEnv();

const url = process.env.PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('Missing Supabase env: PUBLIC_SUPABASE_URL plus SUPABASE_SERVICE_ROLE_KEY or PUBLIC_SUPABASE_ANON_KEY.');
  process.exit(1);
}

const content = [
  {
    type: 'intent_guide',
    label: 'Kurasi cepat',
    title: 'Cara memilih tempat ngopi yang masuk akal',
    description: 'Gunakan kriteria ini untuk membaca daftar rekomendasi tanpa berhenti di rating atau nama tempat saja.',
    criteria: [
      'Mulai dari tujuan datang: ngobrol, singgah cepat, laptopan ringan, atau nongkrong malam.',
      'Bandingkan area, akses parkir, kisaran harga, dan fasilitas dasar sebelum memilih.',
      'Buka halaman detail untuk cek alamat, jam buka, foto, fasilitas, dan catatan editorial.'
    ],
    avoid_label: 'Catatan',
    avoid: 'Jangan pilih hanya dari rating. Tempat yang ramai belum tentu paling cocok untuk kebutuhanmu.'
  },
  {
    type: 'markdown',
    content: `## Rekomendasi Tempat Ngopi di Kediri

Daftar di atas berisi cafe, coffee shop, dan warkop yang bisa kamu jadikan shortlist saat mencari tempat ngopi di Kediri. Fokusnya bukan sekadar tempat yang ramai dibicarakan, tetapi tempat yang punya konteks jelas: enak untuk ngobrol, praktis untuk singgah, cukup nyaman untuk laptopan ringan, atau cocok untuk nongkrong malam.

Keyword "tempat ngopi Kediri" biasanya dicari saat orang belum menentukan tujuan final. Karena itu, halaman ini dibuat sebagai pintu masuk utama sebelum kamu memilih kategori yang lebih spesifik seperti WFC, cafe murah, outdoor, atau dekat stasiun.

## Pilihan Cepat Berdasarkan Kebutuhan

| Kebutuhan | Prioritas Saat Memilih | Halaman Lanjutan |
| --- | --- | --- |
| Ngobrol santai | kursi nyaman, musik tidak terlalu keras, menu pendamping | [Tempat Ngopi Kediri](/tempat-ngopi-kediri/) |
| Laptopan ringan | WiFi, colokan, meja stabil, tidak terlalu bising | [WFC Kediri](/wfc-kediri/) |
| Hemat | harga minuman dasar, porsi, area dekat kampus | [Cafe Murah Kediri](/cafe-murah-kediri/) |
| Sore atau malam | jam buka, parkir, pencahayaan, suasana area | [Cafe View Alam Kediri](/cafe-view-alam-kediri/) |
| Transit | jarak, akses cepat, parkir singkat, lokasi mudah dicari | [Cafe Dekat Stasiun Kediri](/cafe-dekat-stasiun-kediri/) |

Tabel ini bukan ranking mutlak. Anggap sebagai peta cepat agar pencarian tidak berhenti di nama tempat saja.

> Gunakan halaman ini seperti shortlist awal. Pilih 2-3 tempat yang paling sesuai dengan momen datang, lalu cek halaman detail masing-masing sebelum berangkat.

## Kenapa Kurasi Ini Tidak Hanya Berdasarkan Rating

Rating membantu sebagai sinyal awal, tetapi tidak selalu menjawab kebutuhan. Tempat dengan rating tinggi belum tentu nyaman untuk kerja lama. Cafe yang bagus untuk foto belum tentu enak untuk ngobrol. Warkop yang sederhana bisa saja lebih pas untuk singgah cepat dibanding coffee shop yang ramai saat akhir pekan.

Dalam kurasi tempat ngopi Kediri, beberapa hal yang lebih relevan untuk pembaca adalah:

- Suasana tempat saat dipakai ngobrol atau duduk cukup lama.
- Kejelasan area, akses, dan kemudahan parkir.
- Kisaran harga minuman dan menu pendamping.
- Fasilitas dasar seperti WiFi, colokan, outdoor, mushola, atau area smoking.
- Kecocokan dengan momen datang: sore, malam, transit, nugas, atau kumpul kecil.
- Kelengkapan data tempat dan pembaruan terakhir.

## Tempat Ngopi untuk Sore, Malam, dan Singgah Cepat

### Untuk Ngopi Sore

Sore biasanya jadi waktu paling aman untuk mencoba tempat baru. Cahaya masih enak, suasana belum selalu terlalu padat, dan beberapa tempat outdoor terasa lebih nyaman sebelum malam.

Kalau tujuan utamanya ngobrol, pilih tempat dengan jarak meja yang tidak terlalu rapat. Cafe dengan musik pelan dan kursi yang tidak terlalu kaku biasanya lebih nyaman untuk duduk lebih lama.

### Untuk Ngopi Malam

Ngopi malam butuh pertimbangan berbeda. Jam buka harus dicek ulang, terutama untuk tempat yang terlihat aktif di media sosial tetapi punya jadwal operasional berubah-ubah.

Perhatikan juga penerangan, akses pulang, dan kondisi parkir. Jika tempat punya live music, suasananya bisa lebih seru untuk nongkrong, tetapi mungkin kurang cocok untuk diskusi serius.

### Untuk Singgah Cepat

Tidak semua kunjungan butuh ambience panjang. Kadang yang paling penting adalah lokasi mudah, pesanan cepat, dan menu minuman yang jelas.

Untuk kebutuhan ini, coffee shop kecil atau warkop dengan akses praktis sering lebih efisien. Fasilitas lengkap bukan selalu prioritas; yang penting tempatnya mudah dijangkau dan tidak membuat perjalanan jadi memutar jauh.

## Area Populer untuk Cari Tempat Ngopi di Kediri

### Mojoroto

Mojoroto sering masuk pencarian karena dekat dengan aktivitas kampus, kos, dan rute mahasiswa. Area ini cocok untuk yang mencari tempat ngopi dengan harga masuk akal, nugas ringan, atau ketemu teman setelah aktivitas sore.

### Kota Kediri

Area Kota Kediri lebih praktis untuk janjian, transit, atau singgah dari pusat aktivitas. Jika datang dari kantor, stasiun, alun-alun, atau titik ramai kota, area ini biasanya lebih mudah dijadikan titik temu.

### Pesantren

Pesantren bisa jadi alternatif saat ingin mencari suasana yang tidak selalu berada di pusat kota. Untuk area ini, akses dan jam buka perlu dicek lebih teliti karena jarak antar tempat bisa lebih menentukan kenyamanan perjalanan.

### Dekat Kampus dan Dekat Stasiun

Dekat kampus biasanya kuat untuk kebutuhan mahasiswa: harga, WiFi, colokan, dan tempat duduk santai. Dekat stasiun lebih cocok untuk transit, menunggu jadwal, atau janjian singkat tanpa harus masuk terlalu jauh ke area kota.

## Cara Membaca Daftar Rekomendasi

Gunakan daftar tempat sebagai shortlist, lalu buka halaman detail untuk melihat alamat, fasilitas, kisaran harga, jam buka, dan catatan editorial. Urutan rekomendasi bisa mempertimbangkan kelengkapan data, relevansi fasilitas, status publish, dan kebutuhan pencarian.

Sebelum menentukan tempat, cek hal berikut:

1. Apakah tempatnya cocok dengan tujuan datang?
2. Apakah jam buka masih sesuai jadwal terbaru?
3. Apakah parkir dan aksesnya aman untuk waktu kunjungan?
4. Apakah fasilitas penting seperti WiFi, colokan, atau outdoor tersedia?
5. Apakah suasananya cocok untuk ngobrol, kerja ringan, atau sekadar mampir?

Checklist cepat sebelum berangkat:

- [x] Cek jam buka terbaru.
- [x] Simpan rute maps.
- [x] Lihat kisaran harga dan fasilitas penting.
- [ ] Hubungi tempat jika datang bersama rombongan.

---

## Catatan Kurasi Nongkrong Kediri

Halaman ini sengaja dibuat sebagai artikel kurasi, bukan hanya kumpulan link. Tujuannya membantu pembaca membandingkan tempat ngopi di Kediri dari sisi kebutuhan nyata: lokasi, suasana, harga, fasilitas, dan waktu datang.

Data tempat dapat berubah, terutama jam buka, menu, harga, dan fasilitas. Jika ingin datang pada malam hari, akhir pekan, atau bersama rombongan, cek ulang halaman detail dan kanal resmi tempat sebelum berangkat.`
  },
  {
    type: 'faq',
    items: [
      { question: 'Apa tempat ngopi di Kediri yang cocok untuk sore?', answer: 'Pilih tempat dengan area duduk nyaman, akses parkir mudah, dan suasana yang tidak terlalu bising. Jika cuaca mendukung, cafe dengan area semi-outdoor bisa jadi pilihan yang enak untuk sore.' },
      { question: 'Apa beda Tempat Ngopi Kediri dan WFC Kediri?', answer: 'Tempat Ngopi Kediri berisi pilihan umum untuk ngopi, ngobrol, singgah, atau cari suasana. WFC Kediri lebih fokus pada kebutuhan kerja seperti WiFi, colokan, meja, dan suasana yang mendukung produktivitas.' },
      { question: 'Apakah semua tempat di halaman ini cafe?', answer: 'Tidak selalu. Halaman ini dapat memuat cafe, coffee shop, dan warkop selama relevan untuk kebutuhan ngopi di Kediri.' },
      { question: 'Apa yang perlu dicek sebelum datang ke tempat ngopi?', answer: 'Cek jam buka, lokasi, parkir, kisaran harga, fasilitas, dan suasana tempat. Untuk kunjungan malam, cek juga akses pulang dan apakah tempat masih buka sesuai jadwal terbaru.' },
      { question: 'Apakah urutan rekomendasi berarti ranking terbaik?', answer: 'Tidak mutlak. Urutan mempertimbangkan status publish, kelengkapan data, relevansi fasilitas, konteks pencarian, dan pilihan editorial. Tempat terbaik tetap tergantung kebutuhan kunjungan.' }
    ]
  },
  {
    type: 'internal_links',
    title: 'Pilih berdasarkan kebutuhan',
    links: [
      { label: 'WFC Kediri', href: '/wfc-kediri/' },
      { label: 'Cafe Murah Kediri', href: '/cafe-murah-kediri/' },
      { label: 'Cafe View Alam Kediri', href: '/cafe-view-alam-kediri/' },
      { label: 'Cafe Dekat Stasiun Kediri', href: '/cafe-dekat-stasiun-kediri/' },
      { label: 'Tempat Ngopi Kediri', href: '/tempat-ngopi-kediri/' }
    ]
  },
  { type: 'note', content: 'Tips: kalau tujuan utama adalah kerja lama atau nugas serius, mulai dari halaman WFC Kediri. Kalau ingin pilihan umum untuk ngopi dan ngobrol, halaman ini lebih cocok.' }
];

const supabase = createClient(url, key, {
  auth: { autoRefreshToken: false, persistSession: false }
});

const { data: existing, error: readError } = await supabase
  .from('seo_pages')
  .select('id, published_at')
  .eq('slug', 'tempat-ngopi-kediri')
  .maybeSingle();

if (readError) {
  console.error(`Read failed: ${readError.message}`);
  process.exit(1);
}

const payload = {
  title: 'Tempat Ngopi Kediri',
  h1: 'Tempat Ngopi Kediri',
  description: 'Kumpulan tempat ngopi di Kediri, mulai dari cafe, coffee shop, sampai warkop yang cocok untuk nongkrong santai.',
  content,
  query_config: { categories: ['cafe', 'coffee-shop', 'warkop'], sort: 'featured_first' },
  status: 'published',
  meta_title: 'Tempat Ngopi Kediri: Cafe, Coffee Shop, dan Warkop Pilihan',
  meta_description: 'Cari tempat ngopi di Kediri? Lihat rekomendasi cafe, coffee shop, dan warkop dengan info area, fasilitas, harga, dan jam buka.',
  robots: 'index,follow',
  updated_at: new Date().toISOString(),
  published_at: existing?.published_at || new Date().toISOString(),
  last_reviewed_at: new Date().toISOString()
};

if (existing?.id) {
  const { error } = await supabase.from('seo_pages').update(payload).eq('id', existing.id);
  if (error) {
    console.error(`Update failed: ${error.message}`);
    process.exit(1);
  }
  console.log('Updated seo_pages row: tempat-ngopi-kediri');
} else {
  const { error } = await supabase.from('seo_pages').insert({ ...payload, slug: 'tempat-ngopi-kediri', page_type: 'keyword' });
  if (error) {
    console.error(`Insert failed: ${error.message}`);
    process.exit(1);
  }
  console.log('Inserted seo_pages row: tempat-ngopi-kediri');
}
