const sitemapUrl = process.env.SITEMAP_URL || 'https://nongkrongkediri.web.id/sitemap.xml';
const xml = await (await fetch(sitemapUrl)).text();
const urls = [...xml.matchAll(new RegExp('<loc>(.*?)</loc>', 'g'))].map((match) => match[1]);
let redirects = 0;
let broken = 0;
const issues = [];

for (const url of urls) {
  const response = await fetch(url, { redirect: 'manual' });
  if (response.status >= 300 && response.status < 400) {
    redirects += 1;
    issues.push({ url, status: response.status, location: response.headers.get('location') });
  }
  if (response.status >= 400) {
    broken += 1;
    issues.push({ url, status: response.status });
  }
}

console.log(JSON.stringify({ sitemapUrl, urls: urls.length, redirects, broken, issues }, null, 2));
if (redirects || broken) process.exitCode = 1;
