import type { APIRoute } from 'astro';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrap(text: string, max = 28) {
  const words = text.replace(/\s+/g, ' ').trim().split(' ');
  const lines: string[] = [];
  let line = '';
  for (const word of words) {
    if (`${line} ${word}`.trim().length > max && line) {
      lines.push(line);
      line = word;
    } else {
      line = `${line} ${word}`.trim();
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 3);
}

export const GET: APIRoute = async ({ url }) => {
  const title = escapeXml(url.searchParams.get('title') || 'Nongkrong Kediri');
  const description = escapeXml(url.searchParams.get('description') || 'Panduan lokal tempat ngopi, cafe, WFC, dan tempat nongkrong di Kediri.');
  const titleLines = wrap(title, 26);
  const descLines = wrap(description, 58).slice(0, 2);
  const titleText = titleLines.map((line, index) => `<text x="104" y="${246 + index * 78}" fill="#1f1f1f" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="68" font-weight="700">${line}</text>`).join('');
  const descText = descLines.map((line, index) => `<text x="104" y="${486 + index * 38}" fill="#666666" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="28">${line}</text>`).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f8f8f6"/>
  <rect x="56" y="56" width="1088" height="518" rx="42" fill="#ffffff" stroke="#1f1f1f" stroke-width="3"/>
  <rect x="852" y="96" width="224" height="224" rx="40" fill="#1f1f1f"/>
  <path d="M916 176h96v24c0 44-36 80-80 80h-16V176Z" fill="#f8f8f6"/>
  <path d="M1012 204h32c20 0 36 16 36 36s-16 36-36 36h-32" fill="none" stroke="#f8f8f6" stroke-width="16"/>
  <text x="104" y="142" fill="#666666" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="28" letter-spacing="4">NONGKRONG KEDIRI</text>
  ${titleText}
  ${descText}
  <text x="104" y="548" fill="#1f1f1f" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="24">nongkrongkediri.web.id</text>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400'
    }
  });
};
