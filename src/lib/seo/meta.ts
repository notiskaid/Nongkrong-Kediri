import { SITE } from '@/lib/constants';

export function titleTemplate(title?: string | null) {
  if (!title) return SITE.name;
  if (title.includes(SITE.name)) return title;
  return `${title} | ${SITE.name}`;
}

export function truncateDescription(description?: string | null, fallback = SITE.description) {
  const text = (description || fallback).replace(/\s+/g, ' ').trim();
  return text.length > 158 ? `${text.slice(0, 155)}...` : text;
}
