import type { PlaceQueryConfig } from './place';

export type SeoContentBlock =
  | { type: 'markdown'; content: string }
  | { type: 'faq'; items: { question: string; answer: string }[] }
  | { type: 'internal_links'; title?: string; links: { label: string; href: string }[] }
  | { type: 'note'; content: string };

export type SeoPage = {
  id: string;
  slug: string;
  page_type: 'keyword' | 'area' | 'blog' | string;
  title: string;
  h1: string;
  description?: string | null;
  content?: SeoContentBlock[] | null;
  query_config?: PlaceQueryConfig | null;
  author_name?: string | null;
  author_slug?: string | null;
  author_id?: string | null;
  status?: 'draft' | 'published' | 'archived' | string;
  meta_title?: string | null;
  meta_description?: string | null;
  canonical_url?: string | null;
  robots?: string | null;
  published_at?: string | null;
  last_reviewed_at?: string | null;
  updated_at?: string | null;
  created_at?: string | null;
};
