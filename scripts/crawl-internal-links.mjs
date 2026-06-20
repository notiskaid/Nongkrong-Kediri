const base = process.env.CRAWL_BASE_URL || 'http://localhost:4321';
const maxPages = Number(process.env.CRAWL_MAX_PAGES || 250);
const startPaths = ['/', '/tempat-ngopi-kediri/', '/cafe-kediri/', '/wfc-kediri/', '/area/'];

function normalize(path) {
  if (!path) return '/';
  const url = new URL(path, base);
  if (url.origin !== new URL(base).origin) return null;
  if (url.pathname.includes('.') || url.pathname.endsWith('/')) return url.pathname;
  return `${url.pathname}/`;
}

function linksFrom(html) {
  const links = [];
  const regex = /<a\s+[^>]*href=["']([^"'#]+)["'][^>]*>/gi;
  let match;
  while ((match = regex.exec(html))) {
    const href = match[1];
    if (/^(mailto:|tel:|javascript:)/i.test(href)) continue;
    const path = normalize(href);
    if (path) links.push(path);
  }
  return [...new Set(links)];
}

async function check(path) {
  const response = await fetch(new URL(path, base), { redirect: 'manual' });
  const location = response.headers.get('location');
  const text = response.headers.get('content-type')?.includes('text/html') ? await response.text() : '';
  return { path, status: response.status, location, html: text };
}

const queue = [...startPaths];
const seen = new Set();
const results = new Map();
const linkEdges = [];

while (queue.length && seen.size < maxPages) {
  const path = queue.shift();
  if (!path || seen.has(path)) continue;
  seen.add(path);
  const result = await check(path);
  results.set(path, result);
  if (result.status === 200 && result.html) {
    for (const link of linksFrom(result.html)) {
      linkEdges.push({ from: path, to: link });
      if (!seen.has(link) && !queue.includes(link) && seen.size + queue.length < maxPages) queue.push(link);
    }
  }
}

for (const edge of linkEdges) {
  if (!results.has(edge.to)) results.set(edge.to, await check(edge.to));
}

const values = [...results.values()];
const redirects = values.filter((item) => item.status >= 300 && item.status < 400);
const broken = values.filter((item) => item.status >= 400);
const linksToRedirect = linkEdges.filter((edge) => {
  const target = results.get(edge.to);
  return target && target.status >= 300 && target.status < 400;
});
const linksToBroken = linkEdges.filter((edge) => {
  const target = results.get(edge.to);
  return target && target.status >= 400;
});

const report = {
  base,
  totalUrl: results.size,
  ok200: values.filter((item) => item.status === 200).length,
  redirects: redirects.length,
  broken: broken.length,
  linksChecked: linkEdges.length,
  linksToRedirect: linksToRedirect.length,
  linksToBroken: linksToBroken.length,
  redirectList: redirects.map((item) => ({ path: item.path, status: item.status, location: item.location })),
  brokenList: broken.map((item) => ({ path: item.path, status: item.status })),
  linksToRedirectList: linksToRedirect,
  linksToBrokenList: linksToBroken
};

console.log(JSON.stringify(report, null, 2));

if (linksToRedirect.length || linksToBroken.length || broken.length) process.exitCode = 1;
