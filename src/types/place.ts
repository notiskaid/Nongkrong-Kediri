import type { TaxonomyTerm } from './taxonomy';

export type OpeningHours = {
  label?: string;
  raw?: string[];
  is_24h?: boolean;
};

export type PlacePhoto = {
  id?: string;
  url: string;
  alt?: string | null;
  credit?: string | null;
  source?: string | null;
  is_featured?: boolean;
};

export type Place = {
  id: string;
  slug: string;
  name: string;
  excerpt?: string | null;
  description?: string | null;
  editorial_notes?: string | null;
  address?: string | null;
  area_id?: string | null;
  area_name?: string | null;
  area_slug?: string | null;
  city?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  google_place_id?: string | null;
  google_maps_url?: string | null;
  phone?: string | null;
  website?: string | null;
  instagram?: string | null;
  price_min?: number | null;
  price_max?: number | null;
  price_label?: string | null;
  rating?: number | null;
  rating_count?: number | null;
  opening_hours?: OpeningHours | null;
  status?: 'draft' | 'review' | 'published' | 'archived' | 'closed' | string;
  is_featured?: boolean;
  sort_order?: number;
  meta_title?: string | null;
  meta_description?: string | null;
  canonical_url?: string | null;
  robots?: string | null;
  published_at?: string | null;
  last_reviewed_at?: string | null;
  updated_at?: string | null;
  created_at?: string | null;
  categories: TaxonomyTerm[];
  use_cases: TaxonomyTerm[];
  facilities: TaxonomyTerm[];
  photos: PlacePhoto[];
  featured_image_url?: string | null;
  featured_image_alt?: string | null;
};

export type PlaceQueryConfig = {
  categories?: string[];
  use_cases?: string[];
  facilities?: string[];
  areas?: string[];
  price_label?: string[];
  is_featured?: boolean;
  sort?: 'featured_first' | 'editorial_score_desc' | 'newest' | 'name_asc';
  limit?: number;
};
