import type { Place } from '@/types/place';
import type { SeoPage } from '@/types/seo-page';

export type SiloCluster = 'pillar' | 'productivity' | 'ambience' | 'social' | 'access_time';

export const REDIRECTS: Record<string, string> = {
  '/cafe-outdoor-kediri/': '/cafe-view-alam-kediri/',
  '/tempat-nongkrong-kediri/': '/tempat-ngopi-kediri/',
  '/cafe-wfc-kediri/': '/wfc-kediri/',
  '/area/dekat-kampus/': '/cafe-dekat-kampus-kediri/',
  '/area/dekat-stasiun-kediri/': '/cafe-dekat-stasiun-kediri/'
};

export const SILO_PILLARS = [
  { label: 'Tempat Ngopi Kediri', href: '/tempat-ngopi-kediri/', slug: 'tempat-ngopi-kediri' },
  { label: 'Cafe Kediri', href: '/cafe-kediri/', slug: 'cafe-kediri' },
  { label: 'WFC Kediri', href: '/wfc-kediri/', slug: 'wfc-kediri' },
  { label: 'Area Kediri', href: '/area/', slug: 'area' }
];

export const SILO_AREAS = [
  { label: 'Kota Kediri', href: '/area/kota-kediri/', slug: 'kota-kediri' },
  { label: 'Mojoroto', href: '/area/mojoroto/', slug: 'mojoroto' },
  { label: 'Pesantren', href: '/area/pesantren/', slug: 'pesantren' },
  { label: 'Kabupaten Kediri', href: '/area/kabupaten-kediri/', slug: 'kabupaten-kediri' }
];

export const SILO_CLUSTERS: Record<Exclude<SiloCluster, 'pillar'>, { label: string; parent: string; pages: { label: string; href: string; slug: string }[] }> = {
  productivity: {
    label: 'Produktivitas',
    parent: '/cafe-kediri/',
    pages: [
      { label: 'WFC Kediri', href: '/wfc-kediri/', slug: 'wfc-kediri' },
      { label: 'Cafe Buat Nugas Kediri', href: '/cafe-buat-nugas-kediri/', slug: 'cafe-buat-nugas-kediri' },
      { label: 'Cafe Dekat Kampus Kediri', href: '/cafe-dekat-kampus-kediri/', slug: 'cafe-dekat-kampus-kediri' }
    ]
  },
  ambience: {
    label: 'Suasana',
    parent: '/cafe-kediri/',
    pages: [
      { label: 'Cafe Aesthetic Kediri', href: '/cafe-aesthetic-kediri/', slug: 'cafe-aesthetic-kediri' },
      { label: 'Cafe Instagramable Kediri', href: '/cafe-instagramable-kediri/', slug: 'cafe-instagramable-kediri' },
      { label: 'Cafe View Alam Kediri', href: '/cafe-view-alam-kediri/', slug: 'cafe-view-alam-kediri' }
    ]
  },
  social: {
    label: 'Sosial',
    parent: '/cafe-kediri/',
    pages: [
      { label: 'Cafe Kids Friendly Kediri', href: '/cafe-kids-friendly-kediri/', slug: 'cafe-kids-friendly-kediri' },
      { label: 'Cafe Keluarga Kediri', href: '/cafe-keluarga-kediri/', slug: 'cafe-keluarga-kediri' },
      { label: 'Cafe Bukber Kediri', href: '/cafe-bukber-kediri/', slug: 'cafe-bukber-kediri' }
    ]
  },
  access_time: {
    label: 'Akses/Waktu',
    parent: '/cafe-kediri/',
    pages: [
      { label: 'Cafe 24 Jam Kediri', href: '/cafe-24-jam-kediri/', slug: 'cafe-24-jam-kediri' },
      { label: 'Cafe Dekat Stasiun Kediri', href: '/cafe-dekat-stasiun-kediri/', slug: 'cafe-dekat-stasiun-kediri' }
    ]
  }
};

export const FINAL_SEO_PATHS = new Set([
  ...SILO_PILLARS.map((item) => item.href),
  ...Object.values(SILO_CLUSTERS).flatMap((cluster) => cluster.pages.map((item) => item.href)),
  '/cafe-murah-kediri/',
  '/cafe-rating-tinggi-kediri/'
]);

export function withTrailingSlash(path: string) {
  if (!path) return '/';
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (clean.includes('.') || clean.endsWith('/')) return clean;
  return `${clean}/`;
}

export function redirectTarget(path: string) {
  return REDIRECTS[withTrailingSlash(path)] || null;
}

export function isRedirectPath(path: string) {
  return Boolean(redirectTarget(path));
}

export function clusterForSlug(slug?: string | null): SiloCluster | null {
  if (!slug) return null;
  if (SILO_PILLARS.some((item) => item.slug === slug)) return 'pillar';
  for (const [key, cluster] of Object.entries(SILO_CLUSTERS)) {
    if (cluster.pages.some((item) => item.slug === slug)) return key as SiloCluster;
  }
  return null;
}

export function clusterSiblings(slug: string, limit = 4) {
  const clusterKey = clusterForSlug(slug);
  if (!clusterKey || clusterKey === 'pillar') return [];
  return SILO_CLUSTERS[clusterKey].pages.filter((item) => item.slug !== slug).slice(0, limit);
}

export function parentForSeoPage(page: Pick<SeoPage, 'slug' | 'title'>) {
  const clusterKey = clusterForSlug(page.slug);
  if (clusterKey && clusterKey !== 'pillar') return { label: 'Cafe Kediri', href: SILO_CLUSTERS[clusterKey].parent };
  return null;
}

export function canonicalSeoPath(slug: string) {
  return withTrailingSlash(`/${slug}/`);
}

export const TERM_LINKS: Record<string, { label: string; href: string }> = {
  cafe: { label: 'Cafe Kediri', href: '/cafe-kediri/' },
  'coffee-shop': { label: 'Cafe Kediri', href: '/cafe-kediri/' },
  warkop: { label: 'Tempat Ngopi Kediri', href: '/tempat-ngopi-kediri/' },
  wfc: { label: 'WFC Kediri', href: '/wfc-kediri/' },
  nugas: { label: 'Cafe Buat Nugas Kediri', href: '/cafe-buat-nugas-kediri/' },
  aesthetic: { label: 'Cafe Aesthetic Kediri', href: '/cafe-aesthetic-kediri/' },
  instagramable: { label: 'Cafe Instagramable Kediri', href: '/cafe-instagramable-kediri/' },
  'view-alam': { label: 'Cafe View Alam Kediri', href: '/cafe-view-alam-kediri/' },
  'kids-friendly': { label: 'Cafe Kids Friendly Kediri', href: '/cafe-kids-friendly-kediri/' },
  keluarga: { label: 'Cafe Keluarga Kediri', href: '/cafe-keluarga-kediri/' },
  bukber: { label: 'Cafe Bukber Kediri', href: '/cafe-bukber-kediri/' },
  '24-jam': { label: 'Cafe 24 Jam Kediri', href: '/cafe-24-jam-kediri/' },
  'dekat-kampus': { label: 'Cafe Dekat Kampus Kediri', href: '/cafe-dekat-kampus-kediri/' },
  'dekat-stasiun-kediri': { label: 'Cafe Dekat Stasiun Kediri', href: '/cafe-dekat-stasiun-kediri/' },
  murah: { label: 'Cafe Murah Kediri', href: '/cafe-murah-kediri/' }
};

export function linksForPlace(place: Place) {
  const terms = [...(place.categories || []), ...(place.use_cases || []), ...(place.facilities || [])];
  const links = [
    { label: 'Tempat Ngopi Kediri', href: '/tempat-ngopi-kediri/' },
    ...(place.categories?.some((term) => ['cafe', 'coffee-shop'].includes(term.slug)) ? [{ label: 'Cafe Kediri', href: '/cafe-kediri/' }] : []),
    ...(place.area_slug ? [{ label: `Area ${place.area_name || place.area_slug}`, href: `/area/${place.area_slug}/` }] : []),
    ...terms.map((term) => TERM_LINKS[term.slug]).filter(Boolean)
  ];
  return links.filter((link, index, array) => link && array.findIndex((item) => item.href === link.href) === index);
}
