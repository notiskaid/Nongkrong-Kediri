import { useState } from 'react';
import { slugify } from '@/lib/utils/slug';

type Term = { id?: string; name: string; slug: string; icon?: string | null; description?: string | null; sort_order?: number | null };
type Section = { type: string; label: string; hasIcon?: boolean; terms: Term[] };

export default function TaxonomyManager({ sections }: { sections: Section[] }) {
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState('');

  async function submit(type: string, form: HTMLFormElement, id?: string) {
    setBusy(`${type}:${id || 'new'}`);
    setMessage('');
    const formData = new FormData(form);
    const name = String(formData.get('name') || '');
    const payload = {
      name,
      slug: String(formData.get('slug') || slugify(name)),
      icon: String(formData.get('icon') || ''),
      description: String(formData.get('description') || ''),
      sort_order: Number(formData.get('sort_order')) || 0
    };

    const response = await fetch(id ? `/api/admin/taxonomy/${type}/${id}` : `/api/admin/taxonomy/${type}`, {
      method: id ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await response.json().catch(() => ({})) as { error?: string };
    if (!response.ok) {
      setBusy('');
      setMessage(data.error || 'Gagal menyimpan taxonomy.');
      return;
    }
    window.location.reload();
  }

  async function remove(type: string, id?: string, name?: string) {
    if (!id || !confirm(`Hapus ${name || 'item'}?`)) return;
    setBusy(`${type}:${id}`);
    setMessage('');
    const response = await fetch(`/api/admin/taxonomy/${type}/${id}`, { method: 'DELETE' });
    const data = await response.json().catch(() => ({})) as { error?: string };
    if (!response.ok) {
      setBusy('');
      setMessage(data.error || 'Gagal menghapus taxonomy.');
      return;
    }
    window.location.reload();
  }

  return (
    <div className="space-y-8">
      {message && <div className="rounded-2xl border border-line bg-surface p-4 text-sm text-muted">{message}</div>}
      {sections.map((section) => (
        <section key={section.type} className="rounded-2xl border border-line bg-surface p-5">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold">{section.label}</h2>
              <p className="mt-1 text-sm text-muted">Tambah, edit, atau hapus {section.label.toLowerCase()}.</p>
            </div>
            <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">{section.terms.length} item</span>
          </div>

          <form
            className="mb-5 grid gap-3 rounded-2xl border border-line bg-paper p-4 lg:grid-cols-[1fr_1fr_90px_90px_1.2fr_auto]"
            onSubmit={(event) => {
              event.preventDefault();
              submit(section.type, event.currentTarget);
            }}
          >
            <input name="name" required placeholder="Nama" className="rounded-xl border border-line bg-surface px-3 py-2 text-sm" />
            <input name="slug" placeholder="slug otomatis" className="rounded-xl border border-line bg-surface px-3 py-2 text-sm" />
            {section.hasIcon && <input name="icon" placeholder="icon" className="rounded-xl border border-line bg-surface px-3 py-2 text-sm" />}
            <input name="sort_order" type="number" placeholder="0" className="rounded-xl border border-line bg-surface px-3 py-2 text-sm" />
            <input name="description" placeholder="Deskripsi" className="rounded-xl border border-line bg-surface px-3 py-2 text-sm" />
            <button disabled={busy === `${section.type}:new`} className="rounded-xl border border-ink bg-ink px-4 py-2 text-sm font-semibold text-paper disabled:opacity-60">Tambah</button>
          </form>

          <div className="space-y-3">
            {section.terms.map((term) => (
              <form
                key={term.id || term.slug}
                className="grid gap-3 rounded-2xl border border-line bg-paper p-4 lg:grid-cols-[1fr_1fr_90px_90px_1.2fr_auto_auto]"
                onSubmit={(event) => {
                  event.preventDefault();
                  submit(section.type, event.currentTarget, term.id);
                }}
              >
                <input name="name" defaultValue={term.name} required className="rounded-xl border border-line bg-surface px-3 py-2 text-sm" />
                <input name="slug" defaultValue={term.slug} required className="rounded-xl border border-line bg-surface px-3 py-2 text-sm" />
                {section.hasIcon && <input name="icon" defaultValue={term.icon || ''} className="rounded-xl border border-line bg-surface px-3 py-2 text-sm" />}
                <input name="sort_order" type="number" defaultValue={term.sort_order || 0} className="rounded-xl border border-line bg-surface px-3 py-2 text-sm" />
                <input name="description" defaultValue={term.description || ''} className="rounded-xl border border-line bg-surface px-3 py-2 text-sm" />
                <button disabled={busy === `${section.type}:${term.id}`} className="rounded-xl border border-line px-4 py-2 text-sm font-semibold disabled:opacity-60">Simpan</button>
                <button type="button" onClick={() => remove(section.type, term.id, term.name)} className="rounded-xl border border-line px-4 py-2 text-sm text-muted hover:text-ink">Hapus</button>
              </form>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
