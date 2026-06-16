import { SITE } from '@/lib/constants';

export function canonicalUrl(pathname: string, custom?: string | null) {
  if (custom) return custom;
  const base = SITE.url.replace(/\/$/, '');
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${path}`;
}
