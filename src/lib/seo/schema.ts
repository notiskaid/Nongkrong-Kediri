import type { Place } from '@/types/place';
import type { SeoPage } from '@/types/seo-page';
import { SITE } from '@/lib/constants';
import { canonicalUrl } from './canonical';

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.href)
    }))
  };
}

export function placeSchema(place: Place) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: place.name,
    description: place.excerpt || place.description,
    image: place.featured_image_url ? [place.featured_image_url] : undefined,
    address: place.address,
    telephone: place.phone || undefined,
    url: canonicalUrl(`/tempat/${place.slug}/`, place.canonical_url),
    hasMap: place.google_maps_url || undefined,
    aggregateRating: place.rating
      ? {
          '@type': 'AggregateRating',
          ratingValue: place.rating,
          reviewCount: place.rating_count || undefined
        }
      : undefined,
    geo:
      place.latitude && place.longitude
        ? { '@type': 'GeoCoordinates', latitude: place.latitude, longitude: place.longitude }
        : undefined
  };
}

export function itemListSchema(page: SeoPage, places: Place[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: page.h1,
    itemListElement: places.map((place, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: canonicalUrl(`/tempat/${place.slug}/`),
      name: place.name
    }))
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url.replace(/\/$/, '')}/search/?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}
