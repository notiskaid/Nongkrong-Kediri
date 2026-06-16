export const SITE = {
  name: 'Nongkrong Kediri',
  tagline: 'Direktori tempat ngopi, cafe, WFC, dan tempat nongkrong di Kediri.',
  description:
    'Panduan lokal untuk menemukan tempat ngopi, cafe, WFC, dan tempat nongkrong di Kediri berdasarkan area, suasana, fasilitas, dan kebutuhan.',
  url: import.meta.env.PUBLIC_SITE_URL || 'http://localhost:4321',
  author: 'Nando Rifky',
  email: 'mr.winando@gmail.com',
  city: 'Kediri',
  province: 'Jawa Timur'
};

export function siteUrl(runtimeUrl?: string | null) {
  return (runtimeUrl || SITE.url).replace(/\/$/, '');
}

export const MAIN_NAV = [
  { label: 'home', href: '/' },
  { label: 'tempat', href: '/tempat-ngopi-kediri/' },
  { label: 'wfc', href: '/wfc-kediri/' },
  { label: 'area', href: '/area/mojoroto/' },
  { label: 'submit', href: '/submit-tempat/' }
];

export const QUICK_KEYWORDS = [
  { label: 'Tempat Ngopi', href: '/tempat-ngopi-kediri/', icon: 'ri-cup-line' },
  { label: 'WFC', href: '/wfc-kediri/', icon: 'ri-macbook-line' },
  { label: 'Nugas', href: '/cafe-buat-nugas-kediri/', icon: 'ri-book-open-line' },
  { label: '24 Jam', href: '/cafe-24-jam-kediri/', icon: 'ri-time-line' },
  { label: 'Outdoor', href: '/cafe-outdoor-kediri/', icon: 'ri-leaf-line' },
  { label: 'Murah', href: '/cafe-murah-kediri/', icon: 'ri-money-dollar-circle-line' },
  { label: 'Dekat Stasiun', href: '/cafe-dekat-stasiun-kediri/', icon: 'ri-train-line' }
];
