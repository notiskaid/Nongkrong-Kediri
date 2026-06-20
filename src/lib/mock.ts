import type { Place } from '@/types/place';
import type { SeoPage } from '@/types/seo-page';
import type { TaxonomyTerm } from '@/types/taxonomy';

export const mockAreas: TaxonomyTerm[] = [
  { id: 'area-1', name: 'Mojoroto', slug: 'mojoroto', description: 'Area kampus, kos, dan banyak spot nongkrong di sisi barat Kediri.' },
  { id: 'area-2', name: 'Kota Kediri', slug: 'kota-kediri', description: 'Pusat kota, dekat stasiun, alun-alun, dan area transit.' },
  { id: 'area-3', name: 'Pesantren', slug: 'pesantren', description: 'Area timur Kediri dengan banyak tempat makan dan nongkrong.' },
  { id: 'area-4', name: 'Dekat Stasiun Kediri', slug: 'dekat-stasiun-kediri', description: 'Spot ngopi yang enak untuk transit atau janjian dekat stasiun.' },
  { id: 'area-5', name: 'Dekat Kampus', slug: 'dekat-kampus', description: 'Area cafe dan tempat ngopi yang praktis untuk mahasiswa, nugas, dan janjian dekat kampus.' },
  { id: 'area-6', name: 'Kabupaten Kediri', slug: 'kabupaten-kediri', description: 'Area Kabupaten Kediri untuk venue yang berada di luar pusat kota. Halaman ini akan aktif penuh saat data tempat valid tersedia.' }
];

export const mockCategories: TaxonomyTerm[] = [
  { id: 'cat-1', name: 'Cafe', slug: 'cafe' },
  { id: 'cat-2', name: 'Coffee Shop', slug: 'coffee-shop' },
  { id: 'cat-3', name: 'Warkop', slug: 'warkop' },
  { id: 'cat-4', name: 'Resto Cafe', slug: 'resto-cafe' },
  { id: 'cat-5', name: 'Angkringan', slug: 'angkringan' }
];

export const mockUseCases: TaxonomyTerm[] = [
  { id: 'use-1', name: 'WFC', slug: 'wfc', icon: 'ri-macbook-line' },
  { id: 'use-2', name: 'Nugas', slug: 'nugas', icon: 'ri-book-open-line' },
  { id: 'use-3', name: 'Nongkrong', slug: 'nongkrong', icon: 'ri-group-line' },
  { id: 'use-4', name: 'Date', slug: 'date', icon: 'ri-heart-line' },
  { id: 'use-5', name: 'Malam', slug: 'malam', icon: 'ri-moon-line' },
  { id: 'use-6', name: 'Keluarga', slug: 'keluarga', icon: 'ri-home-heart-line' },
  { id: 'use-7', name: 'Live Music', slug: 'live-music', icon: 'ri-music-2-line' },
  { id: 'use-8', name: 'Aesthetic', slug: 'aesthetic', icon: 'ri-sparkling-line' },
  { id: 'use-9', name: 'Instagramable', slug: 'instagramable', icon: 'ri-camera-line' },
  { id: 'use-10', name: 'View Alam', slug: 'view-alam', icon: 'ri-landscape-line' },
  { id: 'use-11', name: 'Kids Friendly', slug: 'kids-friendly', icon: 'ri-parent-line' },
  { id: 'use-12', name: 'Bukber', slug: 'bukber', icon: 'ri-restaurant-line' }
];

export const mockFacilities: TaxonomyTerm[] = [
  { id: 'fac-1', name: 'WiFi', slug: 'wifi', icon: 'ri-wifi-line' },
  { id: 'fac-2', name: 'Colokan', slug: 'colokan', icon: 'ri-plug-line' },
  { id: 'fac-3', name: 'Indoor', slug: 'indoor', icon: 'ri-building-line' },
  { id: 'fac-4', name: 'Outdoor', slug: 'outdoor', icon: 'ri-leaf-line' },
  { id: 'fac-5', name: 'AC', slug: 'ac', icon: 'ri-windy-line' },
  { id: 'fac-6', name: 'Parkir Motor', slug: 'parkir-motor', icon: 'ri-motorbike-line' },
  { id: 'fac-7', name: 'Mushola', slug: 'mushola', icon: 'ri-community-line' },
  { id: 'fac-8', name: '24 Jam', slug: '24-jam', icon: 'ri-time-line' },
  { id: 'fac-9', name: 'Live Music', slug: 'live-music', icon: 'ri-music-2-line' },
  { id: 'fac-10', name: 'View Alam', slug: 'view-alam', icon: 'ri-landscape-line' },
  { id: 'fac-11', name: 'Kids Friendly', slug: 'kids-friendly', icon: 'ri-parent-line' },
  { id: 'fac-12', name: 'Area Bermain', slug: 'area-bermain', icon: 'ri-gamepad-line' },
  { id: 'fac-13', name: 'Reservasi', slug: 'reservasi', icon: 'ri-calendar-check-line' },
  { id: 'fac-14', name: 'Private Room', slug: 'private-room', icon: 'ri-door-closed-line' }
];

const img = (seed: string) => `https://images.unsplash.com/photo-${seed}?auto=format&fit=crop&w=1200&q=80`;

export const mockPlaces: Place[] = [
  {
    id: 'place-1',
    slug: 'kedai-kopi-mojoroto',
    name: 'Kedai Kopi Mojoroto',
    excerpt: 'Coffee shop minimal di Mojoroto yang cocok untuk WFC dan nugas singkat.',
    description:
      'Kedai kopi di area Mojoroto dengan suasana santai untuk ngopi sore, laptopan ringan, atau janjian dengan teman.',
    editorial_notes:
      'Catatan editorial: nyaman untuk laptopan di jam siang, meja tidak terlalu besar, dan suasana lebih ramai saat malam minggu.',
    address: 'Jl. Contoh Mojoroto No. 12, Kediri',
    area_id: 'area-1',
    area_name: 'Mojoroto',
    area_slug: 'mojoroto',
    city: 'Kediri',
    latitude: -7.816,
    longitude: 112.01,
    google_maps_url: 'https://maps.google.com',
    price_min: 12000,
    price_max: 35000,
    price_label: 'murah',
    rating: 4.6,
    rating_count: 128,
    opening_hours: { label: '10.00–23.00', raw: ['Setiap hari 10.00–23.00'] },
    status: 'published',
    is_featured: true,
    sort_order: 1,
    published_at: '2026-01-10T08:00:00.000Z',
    last_reviewed_at: '2026-06-01T08:00:00.000Z',
    updated_at: '2026-06-01T08:00:00.000Z',
    categories: [mockCategories[0], mockCategories[1]],
    use_cases: [mockUseCases[0], mockUseCases[1], mockUseCases[2]],
    facilities: [mockFacilities[0], mockFacilities[1], mockFacilities[2], mockFacilities[5]],
    photos: [
      { url: img('1511920170033-f8396924c348'), alt: 'Interior kedai kopi minimal', is_featured: true }
    ],
    featured_image_url: img('1511920170033-f8396924c348'),
    featured_image_alt: 'Interior kedai kopi minimal'
  },
  {
    id: 'place-2',
    slug: 'teras-ngopi-kota-kediri',
    name: 'Teras Ngopi Kota Kediri',
    excerpt: 'Tempat nongkrong outdoor dekat pusat kota, enak untuk ngobrol sore sampai malam.',
    description:
      'Teras Ngopi Kota Kediri menawarkan area outdoor yang enak untuk ngobrol sore sampai malam di sekitar pusat kota.',
    editorial_notes:
      'Catatan editorial: lebih cocok untuk nongkrong daripada WFC karena area outdoor cenderung ramai dan musik kadang cukup terdengar.',
    address: 'Jl. Contoh Pusat Kota No. 8, Kediri',
    area_id: 'area-2',
    area_name: 'Kota Kediri',
    area_slug: 'kota-kediri',
    city: 'Kediri',
    google_maps_url: 'https://maps.google.com',
    price_min: 15000,
    price_max: 50000,
    price_label: 'sedang',
    rating: 4.5,
    rating_count: 212,
    opening_hours: { label: '15.00–01.00', raw: ['Setiap hari 15.00–01.00'] },
    status: 'published',
    is_featured: true,
    sort_order: 2,
    published_at: '2026-01-15T08:00:00.000Z',
    last_reviewed_at: '2026-06-02T08:00:00.000Z',
    updated_at: '2026-06-02T08:00:00.000Z',
    categories: [mockCategories[0]],
    use_cases: [mockUseCases[2], mockUseCases[3], mockUseCases[4]],
    facilities: [mockFacilities[3], mockFacilities[5]],
    photos: [{ url: img('1495474472287-4d71bcdd2085'), alt: 'Area outdoor cafe', is_featured: true }],
    featured_image_url: img('1495474472287-4d71bcdd2085'),
    featured_image_alt: 'Area outdoor cafe'
  },
  {
    id: 'place-3',
    slug: 'warkop-24-jam-kediri',
    name: 'Warkop 24 Jam Kediri',
    excerpt: 'Warkop untuk nongkrong malam, nugas ringan, dan ngopi murah kapan saja.',
    description:
      'Warkop 24 jam di Kediri untuk nongkrong malam, nugas dadakan, atau cari kopi sederhana setelah jam ramai.',
    editorial_notes:
      'Catatan editorial: cocok untuk ngobrol malam dan nugas ringan, tapi bukan pilihan utama untuk meeting formal.',
    address: 'Jl. Contoh Pesantren No. 17, Kediri',
    area_id: 'area-3',
    area_name: 'Pesantren',
    area_slug: 'pesantren',
    city: 'Kediri',
    google_maps_url: 'https://maps.google.com',
    price_min: 5000,
    price_max: 25000,
    price_label: 'murah',
    rating: 4.3,
    rating_count: 89,
    opening_hours: { label: '24 Jam', raw: ['Buka 24 jam'], is_24h: true },
    status: 'published',
    is_featured: false,
    sort_order: 3,
    published_at: '2026-02-01T08:00:00.000Z',
    last_reviewed_at: '2026-06-05T08:00:00.000Z',
    updated_at: '2026-06-05T08:00:00.000Z',
    categories: [mockCategories[2]],
    use_cases: [mockUseCases[1], mockUseCases[2], mockUseCases[4]],
    facilities: [mockFacilities[0], mockFacilities[1], mockFacilities[5], mockFacilities[7]],
    photos: [{ url: img('1509042239860-f550ce710b93'), alt: 'Kopi dan meja sederhana', is_featured: true }],
    featured_image_url: img('1509042239860-f550ce710b93'),
    featured_image_alt: 'Kopi dan meja sederhana'
  }
];

export const mockSeoPages: SeoPage[] = [
  {
    id: 'seo-cafe-kediri',
    slug: 'cafe-kediri',
    page_type: 'keyword',
    title: 'Cafe Kediri',
    h1: 'Cafe Kediri',
    description: 'Kurasi cafe Kediri untuk ngopi, WFC, nugas, ngobrol, date santai, sampai cari suasana baru di area kota dan sekitarnya.',
    query_config: { categories: ['cafe', 'coffee-shop'], sort: 'featured_first', limit: 4 },
    author_name: 'Nando Rifky',
    author_slug: 'nando-rifky',
    status: 'published',
    published_at: '2026-01-01T08:00:00.000Z',
    last_reviewed_at: '2026-06-01T08:00:00.000Z',
    meta_title: 'Cafe Kediri: Rekomendasi Cafe, Coffee Shop, dan WFC',
    meta_description: 'Cari cafe Kediri? Lihat kurasi cafe, coffee shop, dan tempat WFC dengan info area, fasilitas, harga, dan suasana.',
    content: [{ type: 'markdown', content: '## Cafe Kediri pilihan\n\nGunakan halaman ini untuk mengatur spotlight cafe di homepage dan listing cafe Kediri.' }]
  },
  {
    id: 'seo-live-music', slug: 'cafe-live-music-kediri', page_type: 'keyword', title: 'Cafe Live Music Kediri', h1: 'Cafe Live Music Kediri', description: 'Pilihan cafe live music di Kediri untuk nongkrong malam, komunitas, dan suasana santai dengan hiburan musik.', query_config: { categories: ['cafe', 'coffee-shop', 'resto-cafe'], use_cases: ['live-music', 'malam'], facilities: ['live-music'], sort: 'featured_first' }, author_name: 'Nando Rifky', author_slug: 'nando-rifky', status: 'draft', robots: 'noindex,follow', published_at: '2026-01-10T08:00:00.000Z', last_reviewed_at: '2026-06-01T08:00:00.000Z', meta_title: 'Cafe Live Music Kediri: Tempat Nongkrong Musik Malam', meta_description: 'Cari cafe live music di Kediri? Lihat rekomendasi tempat dengan suasana malam, hiburan musik, area, harga, dan jam buka.', content: [{ type: 'markdown', content: '## Tips memilih cafe live music\n\nCek jadwal tampil, jam ramai, biaya tambahan, dan apakah perlu reservasi sebelum datang.' }, { type: 'faq', items: [{ question: 'Apa cafe live music cocok untuk kerja?', answer: 'Biasanya lebih cocok untuk nongkrong malam. Untuk kerja, pilih jam sebelum acara musik dimulai.' }] }]
  },
  {
    id: 'seo-aesthetic', slug: 'cafe-aesthetic-kediri', page_type: 'keyword', title: 'Cafe Aesthetic Kediri', h1: 'Cafe Aesthetic Kediri', description: 'Kurasi cafe aesthetic di Kediri untuk foto, date santai, nongkrong, dan menikmati ambience yang rapi.', query_config: { categories: ['cafe', 'coffee-shop'], use_cases: ['aesthetic', 'date'], sort: 'featured_first' }, author_name: 'Nando Rifky', author_slug: 'nando-rifky', status: 'published', published_at: '2026-01-10T08:00:00.000Z', last_reviewed_at: '2026-06-01T08:00:00.000Z', meta_title: 'Cafe Aesthetic Kediri: Tempat Ngopi Instagramable', meta_description: 'Rekomendasi cafe aesthetic di Kediri untuk foto, date, dan nongkrong dengan suasana nyaman.', content: [{ type: 'markdown', content: '## Cafe aesthetic di Kediri\n\nPerhatikan pencahayaan, area duduk, jam ramai, dan apakah tempatnya tetap nyaman untuk ngobrol.' }]
  },
  {
    id: 'seo-instagramable', slug: 'cafe-instagramable-kediri', page_type: 'keyword', title: 'Cafe Instagramable Kediri', h1: 'Cafe Instagramable Kediri', description: 'Daftar cafe instagramable di Kediri dengan spot foto, ambience menarik, dan suasana yang cocok untuk konten ringan.', query_config: { categories: ['cafe', 'coffee-shop'], use_cases: ['instagramable', 'aesthetic'], sort: 'featured_first' }, author_name: 'Nando Rifky', author_slug: 'nando-rifky', status: 'draft', robots: 'noindex,follow', published_at: '2026-01-10T08:00:00.000Z', last_reviewed_at: '2026-06-01T08:00:00.000Z', meta_title: 'Cafe Instagramable Kediri: Spot Foto dan Tempat Ngopi', meta_description: 'Cari cafe instagramable di Kediri? Lihat pilihan cafe dengan spot foto, suasana aesthetic, dan info lokasi.', content: [{ type: 'markdown', content: '## Spot foto dan ambience\n\nDatang saat cahaya masih bagus dan cek area outdoor/indoor sebelum menentukan tempat.' }]
  },
  {
    id: 'seo-cafe-wfc', slug: 'cafe-wfc-kediri', page_type: 'keyword', title: 'Cafe WFC Kediri', h1: 'Cafe WFC Kediri', description: 'Cafe WFC di Kediri untuk kerja, laptopan, meeting ringan, dan nugas dengan WiFi serta colokan.', query_config: { categories: ['cafe', 'coffee-shop'], use_cases: ['wfc'], facilities: ['wifi', 'colokan'], sort: 'featured_first' }, author_name: 'Nando Rifky', author_slug: 'nando-rifky', status: 'draft', robots: 'noindex,follow', published_at: '2026-01-10T08:00:00.000Z', last_reviewed_at: '2026-06-01T08:00:00.000Z', meta_title: 'Cafe WFC Kediri: Cafe Nyaman untuk Laptopan', meta_description: 'Rekomendasi cafe WFC di Kediri dengan WiFi, colokan, meja nyaman, dan suasana fokus.', content: [{ type: 'markdown', content: '## Cafe WFC yang nyaman\n\nPrioritaskan WiFi stabil, colokan, meja cukup luas, dan noise level yang aman untuk fokus.' }]
  },
  {
    id: 'seo-view-alam', slug: 'cafe-view-alam-kediri', page_type: 'keyword', title: 'Cafe View Alam Kediri', h1: 'Cafe View Alam Kediri', description: 'Cafe view alam di Kediri untuk nongkrong sore, date santai, outdoor, dan cari suasana lebih lega.', query_config: { categories: ['cafe', 'coffee-shop', 'resto-cafe'], use_cases: ['view-alam', 'date'], facilities: ['view-alam', 'outdoor'], sort: 'featured_first' }, author_name: 'Nando Rifky', author_slug: 'nando-rifky', status: 'draft', robots: 'noindex,follow', published_at: '2026-01-10T08:00:00.000Z', last_reviewed_at: '2026-06-01T08:00:00.000Z', meta_title: 'Cafe View Alam Kediri: Outdoor dan Suasana Santai', meta_description: 'Cari cafe view alam di Kediri? Lihat pilihan cafe outdoor dengan suasana lega untuk sore dan malam.', content: [{ type: 'markdown', content: '## Cafe dengan view alam\n\nCek cuaca, akses jalan, parkir, dan waktu terbaik datang untuk menikmati pemandangan.' }]
  },
  {
    id: 'seo-dekat-kampus', slug: 'cafe-dekat-kampus-kediri', page_type: 'keyword', title: 'Cafe Dekat Kampus Kediri', h1: 'Cafe Dekat Kampus Kediri', description: 'Cafe dekat kampus di Kediri untuk mahasiswa, nugas, kerja kelompok, dan nongkrong hemat.', query_config: { categories: ['cafe', 'coffee-shop', 'warkop'], areas: ['dekat-kampus', 'mojoroto'], use_cases: ['nugas', 'wfc'], sort: 'featured_first' }, author_name: 'Nando Rifky', author_slug: 'nando-rifky', status: 'published', published_at: '2026-01-10T08:00:00.000Z', last_reviewed_at: '2026-06-01T08:00:00.000Z', meta_title: 'Cafe Dekat Kampus Kediri: Nugas dan Nongkrong', meta_description: 'Rekomendasi cafe dekat kampus Kediri untuk nugas, WFC, kerja kelompok, dan nongkrong mahasiswa.', content: [{ type: 'markdown', content: '## Cafe dekat kampus\n\nPilih tempat dengan WiFi, colokan, harga masuk akal, dan jarak yang mudah dari area kos/kampus.' }]
  },
  {
    id: 'seo-kids', slug: 'cafe-kids-friendly-kediri', page_type: 'keyword', title: 'Cafe Kids Friendly Kediri', h1: 'Cafe Kids Friendly di Kediri', description: 'Cafe kids friendly di Kediri untuk keluarga yang butuh tempat nyaman, area aman, dan opsi makan santai.', query_config: { categories: ['cafe', 'resto-cafe'], use_cases: ['kids-friendly', 'keluarga'], facilities: ['kids-friendly', 'area-bermain'], sort: 'featured_first' }, author_name: 'Nando Rifky', author_slug: 'nando-rifky', status: 'draft', robots: 'noindex,follow', published_at: '2026-01-10T08:00:00.000Z', last_reviewed_at: '2026-06-01T08:00:00.000Z', meta_title: 'Cafe Kids Friendly Kediri: Tempat Nyaman untuk Keluarga', meta_description: 'Cari cafe kids friendly di Kediri? Lihat rekomendasi cafe keluarga dengan fasilitas ramah anak.', content: [{ type: 'markdown', content: '## Cafe ramah anak\n\nCek area bermain, keamanan tempat duduk, parkir, dan menu yang cocok untuk keluarga.' }]
  },
  {
    id: 'seo-rating', slug: 'cafe-rating-tinggi-kediri', page_type: 'keyword', title: 'Cafe Rating Tinggi Kediri', h1: 'Cafe Rating Tinggi di Kediri yang Nyaman', description: 'Kurasi cafe rating tinggi di Kediri yang nyaman untuk ngopi, nongkrong, WFC, dan bertemu teman.', query_config: { categories: ['cafe', 'coffee-shop'], min_rating: 4.3, sort: 'rating_desc' }, author_name: 'Nando Rifky', author_slug: 'nando-rifky', status: 'published', published_at: '2026-01-10T08:00:00.000Z', last_reviewed_at: '2026-06-01T08:00:00.000Z', meta_title: 'Cafe Rating Tinggi Kediri yang Nyaman', meta_description: 'Lihat pilihan cafe rating tinggi di Kediri dengan suasana nyaman, info fasilitas, area, dan harga.', content: [{ type: 'markdown', content: '## Rating tinggi bukan satu-satunya patokan\n\nTetap cek fasilitas, jam buka, harga, dan suasana karena rating bisa berbeda dari kebutuhan datang.' }]
  },
  {
    id: 'seo-keluarga', slug: 'cafe-keluarga-kediri', page_type: 'keyword', title: 'Cafe Keluarga Kediri', h1: 'Cafe Keluarga di Kediri', description: 'Cafe keluarga di Kediri untuk makan santai, ngobrol, membawa anak, dan kumpul keluarga kecil.', query_config: { categories: ['cafe', 'resto-cafe'], use_cases: ['keluarga'], facilities: ['parkir-motor', 'mushola'], sort: 'featured_first' }, author_name: 'Nando Rifky', author_slug: 'nando-rifky', status: 'published', published_at: '2026-01-10T08:00:00.000Z', last_reviewed_at: '2026-06-01T08:00:00.000Z', meta_title: 'Cafe Keluarga Kediri: Tempat Nyaman untuk Kumpul', meta_description: 'Rekomendasi cafe keluarga di Kediri dengan suasana nyaman, fasilitas, dan akses mudah.', content: [{ type: 'markdown', content: '## Cafe untuk keluarga\n\nUtamakan tempat duduk nyaman, parkir mudah, mushola, dan pilihan menu yang aman untuk banyak usia.' }]
  },
  {
    id: 'seo-bukber', slug: 'cafe-bukber-kediri', page_type: 'keyword', title: 'Cafe Bukber Kediri', h1: 'Cafe Bukber di Kediri', description: 'Cafe untuk bukber di Kediri yang cocok untuk keluarga, komunitas, teman kantor, atau reunian kecil.', query_config: { categories: ['cafe', 'resto-cafe'], use_cases: ['bukber', 'keluarga'], facilities: ['reservasi', 'mushola'], sort: 'featured_first' }, author_name: 'Nando Rifky', author_slug: 'nando-rifky', status: 'draft', robots: 'noindex,follow', published_at: '2026-01-10T08:00:00.000Z', last_reviewed_at: '2026-06-01T08:00:00.000Z', meta_title: 'Cafe Bukber Kediri: Tempat Buka Bersama Nyaman', meta_description: 'Cari cafe bukber di Kediri? Lihat pilihan tempat untuk buka bersama dengan reservasi, mushola, dan area nyaman.', content: [{ type: 'markdown', content: '## Tips memilih tempat bukber\n\nCek kapasitas, opsi reservasi, mushola, parkir, dan jam ramai sebelum menentukan tempat.' }]
  },
  {
    id: 'seo-1',
    slug: 'tempat-ngopi-kediri',
    page_type: 'keyword',
    title: 'Tempat Ngopi Kediri',
    h1: 'Tempat Ngopi Kediri',
    description: 'Kumpulan tempat ngopi di Kediri, mulai dari cafe, coffee shop, sampai warkop yang cocok untuk nongkrong santai.',
    query_config: { categories: ['cafe', 'coffee-shop', 'warkop'], sort: 'featured_first' },
    author_name: 'Nando Rifky',
    author_slug: 'nando-rifky',
    status: 'published',
    published_at: '2026-01-01T08:00:00.000Z',
    last_reviewed_at: '2026-06-01T08:00:00.000Z',
    meta_title: 'Tempat Ngopi Kediri: Cafe, Coffee Shop, dan Warkop Pilihan',
    meta_description: 'Cari tempat ngopi di Kediri? Lihat rekomendasi cafe, coffee shop, dan warkop dengan info area, fasilitas, harga, dan jam buka.',
    content: [
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
    ]
  },
  {
    id: 'seo-2',
    slug: 'tempat-nongkrong-kediri',
    page_type: 'keyword',
    title: 'Tempat Nongkrong Kediri',
    h1: 'Tempat Nongkrong Kediri',
    description: 'Direktori tempat nongkrong di Kediri untuk ngobrol, date, komunitas, atau santai malam hari.',
    query_config: { use_cases: ['nongkrong'], sort: 'featured_first' },
    author_name: 'Nando Rifky',
    author_slug: 'nando-rifky',
    status: 'published',
    published_at: '2026-01-01T08:00:00.000Z',
    last_reviewed_at: '2026-06-01T08:00:00.000Z',
    content: [{ type: 'markdown', content: '## Rekomendasi nongkrong\n\nUntuk nongkrong santai, cari tempat dengan kursi nyaman, suasana tidak terlalu bising, dan akses pulang yang mudah terutama kalau datang malam.' }]
  },
  {
    id: 'seo-3',
    slug: 'wfc-kediri',
    page_type: 'keyword',
    title: 'WFC Kediri',
    h1: 'WFC Kediri',
    description: 'Cari tempat WFC di Kediri? Temukan cafe yang nyaman untuk kerja, nugas, laptopan, WiFi, dan colokan.',
    query_config: { use_cases: ['wfc'], facilities: ['wifi', 'colokan'], sort: 'featured_first' },
    author_name: 'Nando Rifky',
    author_slug: 'nando-rifky',
    status: 'published',
    published_at: '2026-01-02T08:00:00.000Z',
    last_reviewed_at: '2026-06-01T08:00:00.000Z',
    content: [
      { type: 'markdown', content: '## Cara memilih tempat WFC\n\nUntuk WFC, jangan hanya lihat rating. Cek juga colokan, WiFi, ukuran meja, noise level, dan apakah tempatnya nyaman untuk duduk lama.' },
      { type: 'faq', items: [{ question: 'Apa beda WFC dan cafe biasa?', answer: 'WFC lebih menekankan kenyamanan kerja: WiFi, colokan, meja, noise, dan durasi duduk.' }] }
    ]
  },
  {
    id: 'seo-4',
    slug: 'cafe-buat-nugas-kediri',
    page_type: 'keyword',
    title: 'Cafe Buat Nugas Kediri',
    h1: 'Cafe Buat Nugas Kediri',
    description: 'Pilihan cafe dan warkop di Kediri yang cocok untuk nugas, skripsian, dan laptopan.',
    query_config: { use_cases: ['nugas'], facilities: ['wifi'], sort: 'featured_first' },
    author_name: 'Nando Rifky',
    author_slug: 'nando-rifky',
    status: 'published',
    published_at: '2026-01-05T08:00:00.000Z',
    last_reviewed_at: '2026-06-01T08:00:00.000Z',
    content: [{ type: 'markdown', content: 'Cafe buat nugas idealnya punya WiFi stabil, meja cukup luas, pencahayaan nyaman, dan suasana yang tidak terlalu ramai.' }]
  },
  {
    id: 'seo-5',
    slug: 'cafe-24-jam-kediri',
    page_type: 'keyword',
    title: 'Cafe 24 Jam Kediri',
    h1: 'Cafe 24 Jam Kediri',
    description: 'Tempat ngopi dan nongkrong 24 jam di Kediri untuk malam hari, nugas, atau sekadar cari suasana.',
    query_config: { facilities: ['24-jam'], sort: 'featured_first' },
    author_name: 'Nando Rifky',
    author_slug: 'nando-rifky',
    status: 'published',
    published_at: '2026-01-06T08:00:00.000Z',
    last_reviewed_at: '2026-06-01T08:00:00.000Z',
    content: [{ type: 'markdown', content: 'Pastikan data 24 jam dicek berkala karena jam operasional sering berubah.' }]
  },
  {
    id: 'seo-6',
    slug: 'cafe-murah-kediri',
    page_type: 'keyword',
    title: 'Cafe Murah Kediri',
    h1: 'Cafe Murah Kediri',
    description: 'Rekomendasi tempat ngopi murah di Kediri untuk mahasiswa, nugas, dan nongkrong santai.',
    query_config: { price_label: ['murah'], sort: 'featured_first' },
    author_name: 'Nando Rifky',
    author_slug: 'nando-rifky',
    status: 'published',
    published_at: '2026-01-07T08:00:00.000Z',
    last_reviewed_at: '2026-06-01T08:00:00.000Z',
    content: [{ type: 'markdown', content: 'Tempat ngopi murah cocok untuk kunjungan singkat, nugas ringan, atau nongkrong santai tanpa banyak pertimbangan biaya.' }]
  },
  {
    id: 'seo-7',
    slug: 'cafe-outdoor-kediri',
    page_type: 'keyword',
    title: 'Cafe Outdoor Kediri',
    h1: 'Cafe Outdoor Kediri',
    description: 'Cafe outdoor di Kediri untuk nongkrong sore, date santai, dan ngobrol malam.',
    query_config: { facilities: ['outdoor'], sort: 'featured_first' },
    author_name: 'Nando Rifky',
    author_slug: 'nando-rifky',
    status: 'published',
    published_at: '2026-01-08T08:00:00.000Z',
    last_reviewed_at: '2026-06-01T08:00:00.000Z',
    content: [{ type: 'markdown', content: 'Halaman outdoor idealnya diberi catatan cuaca, parkir, dan waktu terbaik datang.' }]
  },
  {
    id: 'seo-8',
    slug: 'cafe-dekat-stasiun-kediri',
    page_type: 'keyword',
    title: 'Cafe Dekat Stasiun Kediri',
    h1: 'Cafe Dekat Stasiun Kediri',
    description: 'Tempat ngopi dekat Stasiun Kediri yang cocok untuk transit, janjian, atau menunggu jadwal kereta.',
    query_config: { areas: ['dekat-stasiun-kediri', 'kota-kediri'], categories: ['cafe', 'coffee-shop', 'warkop'], sort: 'featured_first' },
    author_name: 'Nando Rifky',
    author_slug: 'nando-rifky',
    status: 'published',
    published_at: '2026-01-09T08:00:00.000Z',
    last_reviewed_at: '2026-06-01T08:00:00.000Z',
    content: [{ type: 'markdown', content: 'Untuk halaman dekat stasiun, tambahkan estimasi jarak, akses jalan kaki, dan opsi parkir.' }]
  }
];
