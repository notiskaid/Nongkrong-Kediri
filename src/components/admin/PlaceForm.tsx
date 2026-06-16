import { useMemo, useState } from 'react';
import { slugify } from '@/lib/utils/slug';
import TaxonomySelect from './TaxonomySelect';
import ImageUploader from './ImageUploader';

type Term = { id?: string; name: string; slug: string };
type Place = any;

function ids(items?: Term[]) {
  return (items || []).map((item) => item.id || item.slug);
}

export default function PlaceForm({ place, areas, categories, useCases, facilities }: { place?: Place; areas: Term[]; categories: Term[]; useCases: Term[]; facilities: Term[] }) {
  const [name, setName] = useState(place?.name || '');
  const [slug, setSlug] = useState(place?.slug || '');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const generatedSlug = useMemo(() => slug || slugify(name), [name, slug]);
  const method = place?.id ? 'PUT' : 'POST';
  const endpoint = place?.id ? `/api/admin/places/${place.id}` : '/api/admin/places';

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    const form = new FormData(event.currentTarget);
    const getAll = (key: string) => form.getAll(key).map(String).filter(Boolean);
    const payload = {
      name: String(form.get('name') || ''),
      slug: String(form.get('slug') || ''),
      excerpt: String(form.get('excerpt') || ''),
      description: String(form.get('description') || ''),
      editorial_notes: String(form.get('editorial_notes') || ''),
      address: String(form.get('address') || ''),
      area_id: String(form.get('area_id') || ''),
      google_maps_url: String(form.get('google_maps_url') || ''),
      phone: String(form.get('phone') || ''),
      website: String(form.get('website') || ''),
      instagram: String(form.get('instagram') || ''),
      price_min: Number(form.get('price_min')) || null,
      price_max: Number(form.get('price_max')) || null,
      price_label: String(form.get('price_label') || ''),
      rating: Number(form.get('rating')) || null,
      rating_count: Number(form.get('rating_count')) || null,
      opening_label: String(form.get('opening_label') || ''),
      status: String(form.get('status') || 'draft'),
      is_featured: form.get('is_featured') === 'on',
      sort_order: Number(form.get('sort_order')) || 0,
      meta_title: String(form.get('meta_title') || ''),
      meta_description: String(form.get('meta_description') || ''),
      robots: String(form.get('robots') || 'index,follow'),
      featured_image_url: String(form.get('featured_image_url') || ''),
      featured_image_alt: String(form.get('featured_image_alt') || ''),
      categories: getAll('categories'),
      use_cases: getAll('use_cases'),
      facilities: getAll('facilities')
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
      if (!place?.id && data.id) window.location.href = `/admin/places/${data.id}/edit/`;
    } else {
      const data = await response.json().catch(() => ({})) as { error?: string };
      setStatus('error');
      setMessage(data.error || 'Gagal menyimpan. Cek konfigurasi Supabase/Auth.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="rounded-2xl border border-line bg-surface p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">Nama tempat<input name="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
          <label className="block text-sm">Slug<input name="slug" value={generatedSlug} onChange={(e) => setSlug(e.target.value)} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
        </div>
        <label className="mt-4 block text-sm">Excerpt<textarea name="excerpt" defaultValue={place?.excerpt || ''} className="mt-2 min-h-20 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
        <label className="mt-4 block text-sm">Deskripsi editorial<textarea name="description" defaultValue={place?.description || ''} className="mt-2 min-h-40 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
        <label className="mt-4 block text-sm">Catatan internal/editorial<textarea name="editorial_notes" defaultValue={place?.editorial_notes || ''} className="mt-2 min-h-28 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-line bg-surface p-5 space-y-4">
          <label className="block text-sm">Area<select name="area_id" defaultValue={place?.area_id || ''} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2"><option value="">Pilih area</option>{areas.map((area) => <option key={area.id || area.slug} value={area.id || area.slug}>{area.name}</option>)}</select></label>
          <label className="block text-sm">Alamat<textarea name="address" defaultValue={place?.address || ''} className="mt-2 min-h-24 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
          <label className="block text-sm">Google Maps URL<input name="google_maps_url" defaultValue={place?.google_maps_url || ''} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="block text-sm">Telepon<input name="phone" defaultValue={place?.phone || ''} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
            <label className="block text-sm">Website<input name="website" defaultValue={place?.website || ''} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
            <label className="block text-sm">Instagram<input name="instagram" defaultValue={place?.instagram || ''} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-5 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">Harga min<input name="price_min" type="number" defaultValue={place?.price_min || ''} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
            <label className="block text-sm">Harga max<input name="price_max" type="number" defaultValue={place?.price_max || ''} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
          </div>
          <label className="block text-sm">Label harga<select name="price_label" defaultValue={place?.price_label || ''} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2"><option value="">-</option><option value="murah">murah</option><option value="sedang">sedang</option><option value="premium">premium</option></select></label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">Rating<input name="rating" type="number" step="0.1" defaultValue={place?.rating || ''} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
            <label className="block text-sm">Jumlah rating<input name="rating_count" type="number" defaultValue={place?.rating_count || ''} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
          </div>
          <label className="block text-sm">Jam buka ringkas<input name="opening_label" defaultValue={place?.opening_hours?.label || ''} placeholder="10.00–23.00 / 24 Jam" className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <TaxonomySelect name="categories" label="Kategori" terms={categories} selected={ids(place?.categories)} />
        <TaxonomySelect name="use_cases" label="Use case" terms={useCases} selected={ids(place?.use_cases)} />
        <TaxonomySelect name="facilities" label="Fasilitas" terms={facilities} selected={ids(place?.facilities)} />
      </div>

      <div className="rounded-2xl border border-line bg-surface p-5 space-y-4">
        <h2 className="font-semibold">SEO & publish</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <label className="block text-sm">Status<select name="status" defaultValue={place?.status || 'draft'} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2"><option value="draft">draft</option><option value="review">review</option><option value="published">published</option><option value="closed">closed</option></select></label>
          <label className="block text-sm">Sort order<input name="sort_order" type="number" defaultValue={place?.sort_order || 0} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
          <label className="mt-8 flex items-center gap-2 text-sm"><input name="is_featured" type="checkbox" defaultChecked={Boolean(place?.is_featured)} /> Featured</label>
        </div>
        <label className="block text-sm">Meta title<input name="meta_title" defaultValue={place?.meta_title || ''} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
        <label className="block text-sm">Meta description<textarea name="meta_description" defaultValue={place?.meta_description || ''} className="mt-2 min-h-20 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
        <label className="block text-sm">Robots<input name="robots" defaultValue={place?.robots || 'index,follow'} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" /></label>
      </div>

      <ImageUploader
        defaultUrl={place?.featured_image_url || ''}
        defaultAlt={place?.featured_image_alt || ''}
        placeSlug={generatedSlug}
      />

      <div className="flex items-center gap-3">
        <button disabled={status === 'loading'} className="rounded-xl border border-ink bg-ink px-5 py-2 text-sm font-semibold text-paper disabled:opacity-60">{status === 'loading' ? 'Menyimpan...' : 'Simpan tempat'}</button>
        {message && <p className="text-sm text-muted">{message}</p>}
      </div>
    </form>
  );
}
