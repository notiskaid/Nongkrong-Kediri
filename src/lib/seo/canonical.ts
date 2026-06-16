import { siteUrl } from '@/lib/constants';

export function canonicalUrl(pathname: string, custom?: string | null, runtimeSiteUrl?: string | null) {
  if (custom) return custom;
  const base = siteUrl(runtimeSiteUrl);
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${path}`;
}
