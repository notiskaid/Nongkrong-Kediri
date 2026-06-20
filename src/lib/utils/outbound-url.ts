const SOURCE_PARAM = 'utm_source';
const SOURCE_VALUE = 'nongkrongkediri.web.id';

export function isExternalHttpUrl(href?: string) {
  return Boolean(href && /^https?:\/\//i.test(href));
}

export function withOutboundSource(href?: string) {
  if (!href || !isExternalHttpUrl(href)) return href;

  try {
    const url = new URL(href);
    if (!url.searchParams.has(SOURCE_PARAM)) url.searchParams.set(SOURCE_PARAM, SOURCE_VALUE);
    return url.toString();
  } catch {
    return href;
  }
}
