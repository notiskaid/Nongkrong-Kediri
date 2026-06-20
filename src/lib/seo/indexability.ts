import type { Place } from '@/types/place';
import type { SeoPage } from '@/types/seo-page';
import type { TaxonomyTerm } from '@/types/taxonomy';
import { filterPlacesByConfig } from '@/lib/queries/places';
import { isRedirectPath, canonicalSeoPath } from './silo';

export function robotsNoIndex(robots?: string | null) {
  return /(^|,)\s*noindex\b/i.test(robots || '');
}

export function queryConfigIndexable(page: SeoPage) {
  const value = (page.query_config as any)?.isIndexable;
  return value !== false;
}

export function isSeoPageIndexable(page: SeoPage, allPlaces: Place[]) {
  if (page.status && page.status !== 'published') return false;
  if (robotsNoIndex(page.robots)) return false;
  if (!queryConfigIndexable(page)) return false;
  if (isRedirectPath(canonicalSeoPath(page.slug))) return false;
  return filterPlacesByConfig(allPlaces, page.query_config).length > 0;
}

export function seoRobots(page: SeoPage, places: Place[]) {
  return isSeoPageIndexable(page, places) ? page.robots || 'index,follow' : 'noindex,follow';
}

export function isAreaIndexable(area: TaxonomyTerm, allPlaces: Place[]) {
  if (isRedirectPath(`/area/${area.slug}/`)) return false;
  return allPlaces.some((place) => place.area_slug === area.slug);
}

export function isPlaceIndexable(place: Place) {
  if (place.status && place.status !== 'published') return false;
  if (robotsNoIndex(place.robots)) return false;
  return true;
}
