import { useMemo, useState } from 'react';
import { slugify } from '@/lib/utils/slug';

type Term = { id?: string; name: string; slug: string };
type SeoPage = any;
type FaqItem = { question: string; answer: string };
type ContentBlock = { type: string; content?: string; items?: FaqItem[]; [key: string]: unknown };

const defaultContent = [
  { type: 'markdown', content: '## Panduan singkat\n\nTulis catatan lokal, tips jam terbaik datang, dan hal yang perlu diperhatikan pengunjung.' }
];
const defaultQueryConfig = { categories: ['cafe', 'coffee-shop'], sort: 'featured_first' };
const priceOptions = ['murah', 'sedang', 'premium'];
const sortOptions = [
  { value: 'featured_first', label: 'Pilihan editor dulu' },
  { value: 'newest', label: 'Terbaru dulu' },
  { value: 'name_asc', label: 'Nama A-Z' },
  { value: 'editorial_score_desc', label: 'Skor editorial' },
  { value: 'rating_desc', label: 'Rating tertinggi' }
];

function blocksFrom(value: unknown): ContentBlock[] {
  return Array.isArray(value) ? value as ContentBlock[] : defaultContent;
}

function slugsFrom(value: unknown): string[] {
  return Array.isArray(value) ? value.map(String).filter(Boolean) : [];
}

function ChipGroup({ title, name, terms, selected, onChange }: { title: string; name: string; terms: Term[]; selected: string[]; onChange: (next: string[]) => void }) {
  function toggle(slug: string) {
    onChange(selected.includes(slug) ? selected.filter((item) => item !== slug) : [...selected, slug]);
  }

  return (
    <fieldset className="border border-ink bg-paper p-4">
      <legend className="px-1 font-mono text-xs font-bold uppercase tracking-[0.16em]">{title}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {terms.map((term) => {
          const checked = selected.includes(term.slug);
          return (
            <button key={term.slug} type="button" onClick={() => toggle(term.slug)} className={`border border-ink px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] ${checked ? 'bg-ink text-paper' : 'bg-surface text-ink'}`}>
              {term.name}
            </button>
          );
        })}
        {!terms.length && <p className="text-sm text-muted">Belum ada data {name}.</p>}
      </div>
    </fieldset>
  );
}

export default function SeoPageForm({ page, areas = [], categories = [], useCases = [], facilities = [] }: { page?: SeoPage; areas?: Term[]; categories?: Term[]; useCases?: Term[]; facilities?: Term[] }) {
  const query = page?.query_config || defaultQueryConfig;
  const blocks = blocksFrom(page?.content || defaultContent);
  const markdownBlock = blocks.find((block) => block.type === 'markdown');
  const faqBlock = blocks.find((block) => block.type === 'faq');
  const otherBlocks = blocks.filter((block) => !['markdown', 'faq'].includes(block.type));
  const otherQueryEntries = Object.fromEntries(Object.entries(query).filter(([key]) => !['categories', 'use_cases', 'facilities', 'areas', 'price_label', 'sort', 'limit', 'is_featured', 'min_rating'].includes(key)));

  const [title, setTitle] = useState(page?.title || '');
  const [slug, setSlug] = useState(page?.slug || '');
  const [categoriesValue, setCategoriesValue] = useState(slugsFrom(query.categories));
  const [useCasesValue, setUseCasesValue] = useState(slugsFrom(query.use_cases));
  const [facilitiesValue, setFacilitiesValue] = useState(slugsFrom(query.facilities));
  const [areasValue, setAreasValue] = useState(slugsFrom(query.areas));
  const [priceValue, setPriceValue] = useState(slugsFrom(query.price_label));
  const [sort, setSort] = useState(query.sort || 'featured_first');
  const [limit, setLimit] = useState(query.limit ? String(query.limit) : '');
  const [minRating, setMinRating] = useState(query.min_rating ? String(query.min_rating) : '');
  const [isFeatured, setIsFeatured] = useState(Boolean(query.is_featured));
  const [markdown, setMarkdown] = useState(String(markdownBlock?.content || ''));
  const [faqs, setFaqs] = useState<FaqItem[]>(Array.isArray(faqBlock?.items) ? faqBlock.items : []);
  const [rawQuery, setRawQuery] = useState(JSON.stringify(query, null, 2));
  const [rawContent, setRawContent] = useState(JSON.stringify(blocks, null, 2));
  const [useRawJson, setUseRawJson] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const endpoint = page?.id ? `/api/admin/seo-pages/${page.id}` : '/api/admin/seo-pages';
  const method = page?.id ? 'PUT' : 'POST';
  const generatedSlug = useMemo(() => slug || slugify(title), [title, slug]);
  const validFaqs = faqs.filter((item) => item.question.trim() && item.answer.trim());
  const selectedFilterCount = categoriesValue.length + useCasesValue.length + facilitiesValue.length + areasValue.length + priceValue.length + Number(Boolean(isFeatured)) + Number(Number(minRating) > 0);
  const qualityWarnings = [
    markdown.trim().length < 350 && 'Konten editorial masih pendek. Targetkan minimal 350 karakter dengan catatan lokal, kriteria kurasi, tips waktu datang, dan batasan data.',
    validFaqs.length < 3 && 'FAQ unik masih kurang dari 3 item. Tambahkan pertanyaan yang benar-benar membantu pembaca.',
    selectedFilterCount < 1 && 'Filter listing belum spesifik; halaman bisa terlalu umum.',
    generatedSlug !== 'cafe-kediri' && selectedFilterCount < 2 && 'Halaman child sebaiknya punya minimal 2 sinyal filter agar tidak terlalu mirip dengan pillar.',
    !String(page?.description || '').trim() && 'Deskripsi halaman belum diisi.',
    !String(page?.meta_title || '').trim() && 'Meta title belum diisi.',
    !String(page?.meta_description || '').trim() && 'Meta description belum diisi.',
    ['cafe-wfc-kediri', 'wfc-kediri'].includes(generatedSlug) && 'WFC punya risiko cannibal. Pilih satu canonical utama atau bedakan angle secara jelas.',
    ['cafe-aesthetic-kediri', 'cafe-instagramable-kediri'].includes(generatedSlug) && 'Aesthetic/Instagramable mirip. Pastikan angle dan kriteria kurasinya berbeda.'
  ].filter(Boolean) as string[];

  function buildQueryConfig() {
    const next: Record<string, unknown> = { ...otherQueryEntries, sort };
    if (categoriesValue.length) next.categories = categoriesValue;
    if (useCasesValue.length) next.use_cases = useCasesValue;
    if (facilitiesValue.length) next.facilities = facilitiesValue;
    if (areasValue.length) next.areas = areasValue;
    if (priceValue.length) next.price_label = priceValue;
    if (isFeatured) next.is_featured = true;
    if (Number(minRating) > 0) next.min_rating = Number(minRating);
    if (Number(limit) > 0) next.limit = Number(limit);
    return next;
  }

  function buildContent() {
    const next: ContentBlock[] = [];
    if (markdown.trim()) next.push({ type: 'markdown', content: markdown.trim() });
    const cleanFaqs = faqs.map((item) => ({ question: item.question.trim(), answer: item.answer.trim() })).filter((item) => item.question || item.answer);
    if (cleanFaqs.length) next.push({ type: 'faq', items: cleanFaqs });
    return [...next, ...otherBlocks];
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');
    const form = new FormData(event.currentTarget);
    let content: unknown;
    let query_config: unknown;

    try {
      content = useRawJson ? JSON.parse(rawContent || '[]') : buildContent();
      query_config = useRawJson ? JSON.parse(rawQuery || '{}') : buildQueryConfig();
    } catch {
      setStatus('error');
      setMessage('JSON advanced belum valid. Matikan Advanced atau perbaiki JSON dulu.');
      return;
    }

    const payload = {
      title: String(form.get('title') || ''),
      slug: String(form.get('slug') || ''),
      page_type: String(form.get('page_type') || 'keyword'),
      h1: String(form.get('h1') || ''),
      description: String(form.get('description') || ''),
      content,
      query_config,
      status: String(form.get('status') || 'draft'),
      meta_title: String(form.get('meta_title') || ''),
      meta_description: String(form.get('meta_description') || ''),
      robots: String(form.get('robots') || 'index,follow')
    };

    const response = await fetch(endpoint, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (response.ok) {
      const data = await response.json() as { id?: string };
      setStatus('success');
      setMessage('Tersimpan.');
      if (!page?.id && data.id) window.location.href = `/admin/seo-pages/${data.id}/edit/`;
    } else {
      const data = await response.json().catch(() => ({})) as { error?: string };
      setStatus('error');
      setMessage(data.error || 'Gagal menyimpan.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="border border-ink bg-surface p-5 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">Title<input name="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="mt-2 w-full border border-ink bg-paper px-3 py-2" /></label>
          <label className="block text-sm">Slug<input name="slug" value={generatedSlug} onChange={(e) => setSlug(e.target.value)} className="mt-2 w-full border border-ink bg-paper px-3 py-2" /></label>
        </div>
        <div className="grid gap-4 sm:grid-cols-4">
          <label className="block text-sm">Page type<select name="page_type" defaultValue={page?.page_type || 'keyword'} className="mt-2 w-full border border-ink bg-paper px-3 py-2"><option value="keyword">keyword</option><option value="area">area</option><option value="blog">blog</option></select></label>
          <label className="block text-sm">Status<select name="status" defaultValue={page?.status || 'draft'} className="mt-2 w-full border border-ink bg-paper px-3 py-2"><option value="draft">draft</option><option value="published">published</option><option value="archived">archived</option></select></label>
          <label className="block text-sm">Robots<input name="robots" defaultValue={page?.robots || 'index,follow'} className="mt-2 w-full border border-ink bg-paper px-3 py-2" /></label>
        </div>
        <label className="block text-sm">H1<input name="h1" defaultValue={page?.h1 || ''} className="mt-2 w-full border border-ink bg-paper px-3 py-2" /></label>
        <label className="block text-sm">Deskripsi<textarea name="description" defaultValue={page?.description || ''} className="mt-2 min-h-24 w-full border border-ink bg-paper px-3 py-2" /></label>
      </div>

      <section className="border border-ink bg-surface p-5 space-y-4">
        <div>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.05em]">Listing yang tampil</h2>
          <p className="mt-1 text-xs leading-6 text-muted">Pilih filter pakai tombol. Sistem tetap menyimpan sebagai query_config JSON di belakang.</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <ChipGroup title="Kategori" name="categories" terms={categories} selected={categoriesValue} onChange={setCategoriesValue} />
          <ChipGroup title="Use case" name="use_cases" terms={useCases} selected={useCasesValue} onChange={setUseCasesValue} />
          <ChipGroup title="Fasilitas" name="facilities" terms={facilities} selected={facilitiesValue} onChange={setFacilitiesValue} />
          <ChipGroup title="Area" name="areas" terms={areas} selected={areasValue} onChange={setAreasValue} />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <fieldset className="border border-ink bg-paper p-4 sm:col-span-1">
            <legend className="px-1 font-mono text-xs font-bold uppercase tracking-[0.16em]">Harga</legend>
            <div className="mt-3 flex flex-wrap gap-2">{priceOptions.map((price) => <button key={price} type="button" onClick={() => setPriceValue(priceValue.includes(price) ? priceValue.filter((item) => item !== price) : [...priceValue, price])} className={`border border-ink px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] ${priceValue.includes(price) ? 'bg-ink text-paper' : 'bg-surface text-ink'}`}>{price}</button>)}</div>
          </fieldset>
          <label className="block text-sm">Urutan<select value={sort} onChange={(e) => setSort(e.target.value)} className="mt-2 w-full border border-ink bg-paper px-3 py-2">{sortOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
          <label className="block text-sm">Rating minimal<input type="number" min="0" max="5" step="0.1" value={minRating} onChange={(e) => setMinRating(e.target.value)} placeholder="4.3" className="mt-2 w-full border border-ink bg-paper px-3 py-2" /></label>
          <label className="block text-sm">Limit hasil<input type="number" min="0" value={limit} onChange={(e) => setLimit(e.target.value)} placeholder="Kosong = semua" className="mt-2 w-full border border-ink bg-paper px-3 py-2" /></label>
        </div>
        <label className="inline-flex items-center gap-2 border border-ink bg-paper px-4 py-2 text-sm"><input type="checkbox" checked={isFeatured} onChange={(e) => setIsFeatured(e.target.checked)} /> Hanya tampilkan pilihan editor</label>
      </section>

      {qualityWarnings.length > 0 && (
        <section className="border border-ink bg-butter/25 p-5">
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.05em]">Quality guard</h2>
          <p className="mt-1 text-xs leading-6 text-muted">Agar aman dari thin/doorway content, cek ini sebelum publish.</p>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
            {qualityWarnings.map((warning) => <li key={warning}><i className="ri-error-warning-line text-ink"></i> {warning}</li>)}
          </ul>
        </section>
      )}

      <section className="border border-ink bg-surface p-5 space-y-4">
        <div>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.05em]">Konten bawah listing</h2>
          <p className="mt-1 text-xs leading-6 text-muted">Tulis artikel pendek dan FAQ tanpa menyentuh JSON.</p>
        </div>
        <label className="block text-sm">Artikel / catatan editorial<textarea value={markdown} onChange={(e) => setMarkdown(e.target.value)} className="mt-2 min-h-56 w-full border border-ink bg-paper px-3 py-2 font-mono text-sm" /></label>
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3"><h3 className="font-semibold">FAQ</h3><button type="button" onClick={() => setFaqs([...faqs, { question: '', answer: '' }])} className="border border-ink bg-butter px-4 py-2 font-mono text-xs uppercase tracking-[0.12em]">Tambah FAQ</button></div>
          {faqs.map((item, index) => <div key={index} className="border border-ink bg-paper p-4"><label className="block text-sm">Pertanyaan<input value={item.question} onChange={(e) => setFaqs(faqs.map((faq, faqIndex) => faqIndex === index ? { ...faq, question: e.target.value } : faq))} className="mt-2 w-full border border-ink bg-surface px-3 py-2" /></label><label className="mt-3 block text-sm">Jawaban<textarea value={item.answer} onChange={(e) => setFaqs(faqs.map((faq, faqIndex) => faqIndex === index ? { ...faq, answer: e.target.value } : faq))} className="mt-2 min-h-24 w-full border border-ink bg-surface px-3 py-2" /></label><button type="button" onClick={() => setFaqs(faqs.filter((_, faqIndex) => faqIndex !== index))} className="mt-3 border border-ink bg-surface px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em]">Hapus</button></div>)}
        </div>
        {otherBlocks.length > 0 && <p className="border border-ink bg-butter/30 p-3 text-xs leading-6 text-muted">Ada {otherBlocks.length} block lanjutan lama. Block itu tetap disimpan saat save.</p>}
      </section>

      <details className="border border-ink bg-paper p-5">
        <summary className="cursor-pointer font-mono text-xs font-bold uppercase tracking-[0.16em]">Advanced JSON fallback</summary>
        <label className="mt-4 flex items-center gap-2 text-sm"><input type="checkbox" checked={useRawJson} onChange={(e) => setUseRawJson(e.target.checked)} /> Pakai JSON advanced saat simpan</label>
        <label className="mt-4 block text-sm">Query config JSON<textarea value={rawQuery} onChange={(e) => setRawQuery(e.target.value)} className="mt-2 min-h-44 w-full border border-ink bg-surface px-3 py-2 font-mono text-sm" /></label>
        <label className="mt-4 block text-sm">Content JSON<textarea value={rawContent} onChange={(e) => setRawContent(e.target.value)} className="mt-2 min-h-72 w-full border border-ink bg-surface px-3 py-2 font-mono text-sm" /></label>
      </details>

      <div className="border border-ink bg-surface p-5 space-y-4">
        <h2 className="font-display text-2xl font-black uppercase tracking-[-0.05em]">Meta SEO</h2>
        <label className="block text-sm">Meta title<input name="meta_title" defaultValue={page?.meta_title || ''} className="mt-2 w-full border border-ink bg-paper px-3 py-2" /></label>
        <label className="block text-sm">Meta description<textarea name="meta_description" defaultValue={page?.meta_description || ''} className="mt-2 min-h-20 w-full border border-ink bg-paper px-3 py-2" /></label>
      </div>
      <div className="flex items-center gap-3">
        <button disabled={status === 'loading'} className="border border-ink bg-ink px-5 py-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-paper disabled:opacity-60">{status === 'loading' ? 'Menyimpan...' : 'Simpan SEO page'}</button>
        {message && <p className={`text-sm ${status === 'error' ? 'text-brick' : 'text-muted'}`}>{message}</p>}
      </div>
    </form>
  );
}
