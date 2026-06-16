import { useState } from 'react';
import { slugify } from '@/lib/utils/slug';

type SeoPage = any;

const defaultContent = JSON.stringify([
  { type: 'markdown', content: '## Panduan singkat\n\nTulis catatan lokal, tips jam terbaik datang, dan hal yang perlu diperhatikan pengunjung.' }
], null, 2);

const defaultQueryConfig = JSON.stringify({ categories: ['cafe', 'coffee-shop'], sort: 'featured_first' }, null, 2);

export default function SeoPageForm({ page }: { page?: SeoPage }) {
  const [title, setTitle] = useState(page?.title || '');
  const [slug, setSlug] = useState(page?.slug || '');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const endpoint = page?.id ? `/api/admin/seo-pages/${page.id}` : '/api/admin/seo-pages';
  const method = page?.id ? 'PUT' : 'POST';

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    const form = new FormData(event.currentTarget);
    let content;
    let query_config;
    try {
      content = JSON.parse(String(form.get('content') || '[]'));
      query_config = JSON.parse(String(form.get('query_config') || '{}'));
    } catch {
      setStatus('error');
      setMessage('Konten atau pengaturan listing belum memakai format JSON yang valid.');
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

    const response = await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

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
      <div className="rounded-2xl border border-line bg-surface p-5 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">Title<input name="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
          <label className="block text-sm">Slug<input name="slug" value={slug || slugify(title)} onChange={(e) => setSlug(e.target.value)} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <label className="block text-sm">Page type<select name="page_type" defaultValue={page?.page_type || 'keyword'} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2"><option value="keyword">keyword</option><option value="area">area</option><option value="blog">blog</option></select></label>
          <label className="block text-sm">Status<select name="status" defaultValue={page?.status || 'draft'} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2"><option value="draft">draft</option><option value="published">published</option><option value="archived">archived</option></select></label>
          <label className="block text-sm">Robots<input name="robots" defaultValue={page?.robots || 'index,follow'} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
        </div>
        <label className="block text-sm">H1<input name="h1" defaultValue={page?.h1 || ''} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
        <label className="block text-sm">Deskripsi<textarea name="description" defaultValue={page?.description || ''} className="mt-2 min-h-24 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
      </div>
      <div className="rounded-2xl border border-line bg-surface p-5 space-y-4">
        <h2 className="font-semibold">Query config</h2>
        <p className="text-xs leading-6 text-muted">Atur kategori, area, fasilitas, atau kebutuhan pengunjung yang ingin ditampilkan di halaman ini.</p>
        <textarea name="query_config" defaultValue={JSON.stringify(page?.query_config || JSON.parse(defaultQueryConfig), null, 2)} className="min-h-44 w-full rounded-xl border border-line bg-paper px-3 py-2 font-mono text-sm" />
      </div>
      <div className="rounded-2xl border border-line bg-surface p-5 space-y-4">
        <h2 className="font-semibold">Konten bawah listing</h2>
        <textarea name="content" defaultValue={JSON.stringify(page?.content || JSON.parse(defaultContent), null, 2)} className="min-h-72 w-full rounded-xl border border-line bg-paper px-3 py-2 font-mono text-sm" />
      </div>
      <div className="rounded-2xl border border-line bg-surface p-5 space-y-4">
        <h2 className="font-semibold">Meta SEO</h2>
        <label className="block text-sm">Meta title<input name="meta_title" defaultValue={page?.meta_title || ''} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
        <label className="block text-sm">Meta description<textarea name="meta_description" defaultValue={page?.meta_description || ''} className="mt-2 min-h-20 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
      </div>
      <div className="flex items-center gap-3">
        <button disabled={status === 'loading'} className="rounded-xl border border-ink bg-ink px-5 py-2 text-sm font-semibold text-paper disabled:opacity-60">{status === 'loading' ? 'Menyimpan...' : 'Simpan SEO page'}</button>
        {message && <p className="text-sm text-muted">{message}</p>}
      </div>
    </form>
  );
}
