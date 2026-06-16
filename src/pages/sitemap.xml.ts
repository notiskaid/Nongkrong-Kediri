import type { APIRoute } from 'astro';
import { siteUrl } from '@/lib/constants';
import { getPublishedPlaces } from '@/lib/queries/places';
import { getPublishedSeoPages } from '@/lib/queries/seo-pages';
import { getAreas } from '@/lib/queries/taxonomy';

function url(path: string, lastmod?: string | null) {
  const base = siteUrl();
  const loc = `${base}${path}`;
  return `<url><loc>${loc}</loc>${lastmod ? `<lastmod>${new Date(lastmod).toISOString()}</lastmod>` : ''}</url>`;
}

export const GET: APIRoute = async ({ locals }) => {
  const [places, pages, areas] = await Promise.all([
    getPublishedPlaces(locals.supabase),
    getPublishedSeoPages(locals.supabase),
    getAreas(locals.supabase)
  ]);

  const urls = [
    url('/'),
    url('/submit-tempat/'),
    ...pages.map((page) => url(`/${page.slug}/`, page.last_reviewed_at || page.updated_at || page.published_at)),
    ...places.map((place) => url(`/tempat/${place.slug}/`, place.last_reviewed_at || place.updated_at || place.published_at)),
    ...areas.map((area) => url(`/area/${area.slug}/`))
  ];

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>`, {
    headers: { 'Content-Type': 'application/xml' }
  });
};
