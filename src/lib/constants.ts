export const SITE = {
  name: 'Nongkrong Kediri',
  tagline: 'Direktori tempat ngopi, cafe, WFC, dan tempat nongkrong di Kediri.',
  description:
    'Rekomendasi cafe, tempat ngopi, WFC, dan tempat nongkrong di Kediri. Temukan tempat terbaik untuk bersantai, bekerja, atau berkumpul dengan teman-teman di kota Kediri.',
  url: import.meta.env.PUBLIC_SITE_URL || 'http://localhost:4321',
  author: 'Nando Rifky',
  email: 'mr.winando@gmail.com',
  city: 'Kediri',
  province: 'Jawa Timur'
};

export function siteUrl(runtimeUrl?: string | null) {
  const raw = (runtimeUrl || SITE.url).replace(/\/$/, '');
  if (/^https?:\/\//i.test(raw)) return raw;
  return `https://${raw}`;
}

export const MAIN_NAV = [
  { label: 'Home', href: '/' },
  { label: 'Tempat Ngopi', href: '/tempat-ngopi-kediri/' },
  { label: 'Cafe', href: '/cafe-kediri/' },
  { label: 'WFC', href: '/wfc-kediri/' },
  { label: 'Area', href: '/area/' }
];

export const QUICK_KEYWORDS = [
  { label: 'Cafe Kediri', href: '/cafe-kediri/', icon: 'ri-cup-line' },
  { label: 'Tempat Ngopi', href: '/tempat-ngopi-kediri/', icon: 'ri-cup-line' },
  { label: 'WFC', href: '/wfc-kediri/', icon: 'ri-macbook-line' },
  { label: 'Nugas', href: '/cafe-buat-nugas-kediri/', icon: 'ri-book-open-line' },
  { label: '24 Jam', href: '/cafe-24-jam-kediri/', icon: 'ri-time-line' },
  { label: 'View Alam', href: '/cafe-view-alam-kediri/', icon: 'ri-landscape-line' },
  { label: 'Murah', href: '/cafe-murah-kediri/', icon: 'ri-money-dollar-circle-line' },
  { label: 'Dekat Stasiun', href: '/cafe-dekat-stasiun-kediri/', icon: 'ri-train-line' }
];
