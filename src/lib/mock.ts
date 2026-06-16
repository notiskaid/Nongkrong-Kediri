import type { Place } from '@/types/place';
import type { SeoPage } from '@/types/seo-page';
import type { TaxonomyTerm } from '@/types/taxonomy';

export const mockAreas: TaxonomyTerm[] = [
  { id: 'area-1', name: 'Mojoroto', slug: 'mojoroto', description: 'Area kampus, kos, dan banyak spot nongkrong di sisi barat Kediri.' },
  { id: 'area-2', name: 'Kota Kediri', slug: 'kota-kediri', description: 'Pusat kota, dekat stasiun, alun-alun, dan area transit.' },
  { id: 'area-3', name: 'Pesantren', slug: 'pesantren', description: 'Area timur Kediri dengan banyak tempat makan dan nongkrong.' },
  { id: 'area-4', name: 'Dekat Stasiun Kediri', slug: 'dekat-stasiun-kediri', description: 'Spot ngopi yang enak untuk transit atau janjian dekat stasiun.' }
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
  { id: 'use-6', name: 'Keluarga', slug: 'keluarga', icon: 'ri-home-heart-line' }
];

export const mockFacilities: TaxonomyTerm[] = [
  { id: 'fac-1', name: 'WiFi', slug: 'wifi', icon: 'ri-wifi-line' },
  { id: 'fac-2', name: 'Colokan', slug: 'colokan', icon: 'ri-plug-line' },
  { id: 'fac-3', name: 'Indoor', slug: 'indoor', icon: 'ri-building-line' },
  { id: 'fac-4', name: 'Outdoor', slug: 'outdoor', icon: 'ri-leaf-line' },
  { id: 'fac-5', name: 'AC', slug: 'ac', icon: 'ri-windy-line' },
  { id: 'fac-6', name: 'Parkir Motor', slug: 'parkir-motor', icon: 'ri-motorbike-line' },
  { id: 'fac-7', name: 'Mushola', slug: 'mushola', icon: 'ri-community-line' },
  { id: 'fac-8', name: '24 Jam', slug: '24-jam', icon: 'ri-time-line' }
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
      { type: 'markdown', content: '## Cara memilih tempat ngopi\n\nPilih tempat yang sesuai dengan tujuan datang: ngobrol santai, kerja sebentar, atau sekadar mencari suasana baru. Perhatikan area, jam buka, fasilitas, dan kisaran harga sebelum berangkat.' },
      { type: 'internal_links', title: 'Lihat juga', links: [{ label: 'WFC Kediri', href: '/wfc-kediri/' }, { label: 'Cafe 24 Jam Kediri', href: '/cafe-24-jam-kediri/' }] }
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
