import type { Place } from '@/types/place';
import type { SeoPage } from '@/types/seo-page';
import { siteUrl } from '@/lib/constants';
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
  const editorialReview = place.visited_at && place.editorial_rating && place.editorial_verdict
    ? {
        '@type': 'Review',
        author: { '@type': 'Organization', name: 'Nongkrong Kediri', url: siteUrl() },
        datePublished: place.visited_at,
        reviewBody: place.editorial_verdict,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: place.editorial_rating,
          bestRating: 5,
          worstRating: 1
        },
        publisher: { '@type': 'Organization', name: 'Nongkrong Kediri', url: siteUrl() }
      }
    : undefined;

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
    review: editorialReview,
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

export function collectionPageSchema(page: SeoPage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: page.h1 || page.title,
    description: page.description || page.meta_description,
    url: canonicalUrl(`/${page.slug}/`)
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
}

export function websiteSchema() {
  const url = siteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Nongkrong Kediri',
    url,
    description: 'Rekomendasi cafe, tempat ngopi, WFC, dan tempat nongkrong di Kediri. Temukan tempat terbaik untuk bersantai, bekerja, atau berkumpul dengan teman-teman di kota Kediri.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/search/?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}
