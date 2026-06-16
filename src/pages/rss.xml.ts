import type { APIRoute } from 'astro';
import { SITE, siteUrl } from '@/lib/constants';
import { getPublishedSeoPages } from '@/lib/queries/seo-pages';

export const GET: APIRoute = async ({ locals }) => {
  const pages = await getPublishedSeoPages(locals.supabase);
  const base = siteUrl();
  const items = pages
    .map((page) => `<item><title>${page.h1}</title><link>${base}/${page.slug}/</link><description>${page.description || ''}</description><pubDate>${new Date(page.published_at || Date.now()).toUTCString()}</pubDate></item>`)
    .join('');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${SITE.name}</title><link>${base}</link><description>${SITE.description}</description>${items}</channel></rss>`, {
    headers: { 'Content-Type': 'application/rss+xml' }
  });
};
