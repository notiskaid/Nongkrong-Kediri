function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function safeHref(href: string) {
  const trimmed = href.trim();
  if (/^(https?:\/\/|\/)/i.test(trimmed)) return escapeHtml(trimmed);
  return '#';
}

function renderInline(value: string) {
  return escapeHtml(value)
    .replace(/`([^`]+?)`/g, '<code>$1</code>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/~~(.+?)~~/g, '<del>$1</del>')
    .replace(/(^|[^*])\*([^*]+?)\*/g, '$1<em>$2</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, href) => `<a href="${safeHref(href)}">${label}</a>`);
}

function imageHtml(alt: string, src: string) {
  return `<figure><img src="${safeHref(src)}" alt="${escapeHtml(alt)}" loading="lazy" /><figcaption>${escapeHtml(alt)}</figcaption></figure>`;
}

export function renderSafeMarkdown(markdown: string) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const output: string[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];
  let orderedList: string[] = [];
  let checklist: { checked: boolean; content: string }[] = [];
  let blockquote: string[] = [];
  let codeBlock: string[] = [];
  let inCodeBlock = false;
  let table: string[][] = [];

  function flushParagraph() {
    if (!paragraph.length) return;
    output.push(`<p>${renderInline(paragraph.join(' '))}</p>`);
    paragraph = [];
  }

  function flushList() {
    if (!list.length) return;
    output.push(`<ul>${list.map((item) => `<li>${renderInline(item)}</li>`).join('')}</ul>`);
    list = [];
  }

  function flushOrderedList() {
    if (!orderedList.length) return;
    output.push(`<ol>${orderedList.map((item) => `<li>${renderInline(item)}</li>`).join('')}</ol>`);
    orderedList = [];
  }

  function flushChecklist() {
    if (!checklist.length) return;
    output.push(`<ul class="nk-checklist">${checklist.map((item) => `<li data-checked="${item.checked ? 'true' : 'false'}"><span>${renderInline(item.content)}</span></li>`).join('')}</ul>`);
    checklist = [];
  }

  function flushBlockquote() {
    if (!blockquote.length) return;
    output.push(`<blockquote>${blockquote.map((line) => `<p>${renderInline(line)}</p>`).join('')}</blockquote>`);
    blockquote = [];
  }

  function flushCodeBlock() {
    if (!codeBlock.length) return;
    output.push(`<pre><code>${escapeHtml(codeBlock.join('\n'))}</code></pre>`);
    codeBlock = [];
  }

  function parseTableRow(line: string) {
    return line
      .replace(/^\|/, '')
      .replace(/\|$/, '')
      .split('|')
      .map((cell) => cell.trim());
  }

  function isTableSeparator(line: string) {
    const cells = parseTableRow(line);
    return cells.length > 1 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
  }

  function flushTable() {
    if (table.length < 2) {
      table = [];
      return;
    }
    const [rawHead, ...rawBody] = table;
    const head = rawHead.map((cell, index) => cell || `Kolom ${index + 1}`);
    const body = rawBody.map((row) => head.map((_cell, index) => row[index] || ''));
    output.push(`<div class="nk-table-wrap"><table><thead><tr>${head.map((cell) => `<th>${renderInline(cell)}</th>`).join('')}</tr></thead><tbody>${body.map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
    table = [];
  }

  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index];
    const line = rawLine.trim();

    if (line.startsWith('```')) {
      if (inCodeBlock) {
        inCodeBlock = false;
        flushCodeBlock();
      } else {
        flushParagraph();
        flushList();
        flushOrderedList();
        flushChecklist();
        flushBlockquote();
        flushTable();
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlock.push(rawLine);
      continue;
    }

    if (!line) {
      flushParagraph();
      flushList();
      flushOrderedList();
      flushChecklist();
      flushBlockquote();
      flushTable();
      continue;
    }

    const nextLine = lines[index + 1]?.trim() || '';
    const tableCandidate = line.includes('|') && (isTableSeparator(nextLine) || table.length > 0);
    if (tableCandidate) {
      flushParagraph();
      flushList();
      flushOrderedList();
      flushChecklist();
      flushBlockquote();
      if (isTableSeparator(line)) {
        if (table.length === 0) flushTable();
        continue;
      }
      table.push(parseTableRow(line));
      continue;
    }

    const heading = /^(#{1,6})\s+(.+)$/.exec(line);
    if (heading) {
      flushParagraph();
      flushList();
      flushOrderedList();
      flushChecklist();
      flushBlockquote();
      flushTable();
      const level = heading[1].length;
      output.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
      continue;
    }

    if (/^(-{3,}|\*{3,})$/.test(line)) {
      flushParagraph();
      flushList();
      flushOrderedList();
      flushChecklist();
      flushBlockquote();
      flushTable();
      output.push('<hr />');
      continue;
    }

    const image = /^!\[([^\]]*)\]\(([^)]+)\)$/.exec(line);
    if (image) {
      flushParagraph();
      flushList();
      flushOrderedList();
      flushChecklist();
      flushBlockquote();
      flushTable();
      output.push(imageHtml(image[1], image[2]));
      continue;
    }

    const quote = /^>\s?(.+)$/.exec(line);
    if (quote) {
      flushParagraph();
      flushList();
      flushOrderedList();
      flushChecklist();
      flushTable();
      blockquote.push(quote[1]);
      continue;
    }

    const checklistItem = /^[-*]\s+\[([ xX])]\s+(.+)$/.exec(line);
    if (checklistItem) {
      flushParagraph();
      flushList();
      flushOrderedList();
      flushBlockquote();
      flushTable();
      checklist.push({ checked: checklistItem[1].toLowerCase() === 'x', content: checklistItem[2] });
      continue;
    }

    const listItem = /^[-*]\s+(.+)$/.exec(line);
    if (listItem) {
      flushParagraph();
      flushOrderedList();
      flushChecklist();
      flushBlockquote();
      flushTable();
      list.push(listItem[1]);
      continue;
    }

    const orderedListItem = /^\d+\.\s+(.+)$/.exec(line);
    if (orderedListItem) {
      flushParagraph();
      flushList();
      flushChecklist();
      flushBlockquote();
      flushTable();
      orderedList.push(orderedListItem[1]);
      continue;
    }

    flushList();
    flushOrderedList();
    flushChecklist();
    flushBlockquote();
    flushTable();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  flushOrderedList();
  flushChecklist();
  flushBlockquote();
  flushCodeBlock();
  flushTable();

  return output.join('\n');
}
