import { useState } from 'react';

type Term = { name: string };
type PlaceRow = {
  id: string;
  name: string;
  slug: string;
  status?: string | null;
  area_name?: string | null;
  sort_order?: number | null;
  categories?: Term[];
};

function statusClass(status?: string | null) {
  if (status === 'published') return 'border-green-700 text-green-700';
  if (status === 'review') return 'border-yellow-700 text-yellow-700';
  if (status === 'archived' || status === 'closed') return 'border-red-700 text-red-700';
  return 'border-line text-muted';
}

function sortRows(rows: PlaceRow[]) {
  return [...rows].sort((a, b) => (a.sort_order ?? 999999) - (b.sort_order ?? 999999) || a.name.localeCompare(b.name));
}

export default function PlacesTable({ places }: { places: PlaceRow[] }) {
  const [items] = useState(sortRows(places));
  const [busyId, setBusyId] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  async function move(id: string, direction: 'up' | 'down') {
    setBusyId(id);
    setMessage('');
    const response = await fetch('/api/admin/places/reorder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, direction })
    });
    if (!response.ok) {
      const data = await response.json().catch(() => ({})) as { error?: string };
      setMessage(data.error || 'Gagal mengubah urutan.');
      setBusyId(null);
      return;
    }
    window.location.reload();
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface">
      {message && <p className="border-b border-line p-3 text-sm text-red-700">{message}</p>}
      <table className="w-full text-left text-sm">
        <thead className="border-b border-line text-xs text-muted">
          <tr><th className="p-3">Urut</th><th className="p-3">Nama</th><th className="p-3">Status</th><th className="p-3">Area</th><th className="p-3">Kategori</th><th className="p-3">Aksi</th></tr>
        </thead>
        <tbody>
          {items.map((place, index) => (
            <tr key={place.id} className="border-b border-line last:border-0">
              <td className="p-3 font-mono text-xs text-muted">{place.sort_order ?? '-'}</td>
              <td className="p-3 font-semibold"><a href={`/tempat/${place.slug}/`} className="no-underline">{place.name}</a></td>
              <td className="p-3"><span className={`rounded-lg border px-2 py-1 text-xs ${statusClass(place.status)}`}>{place.status || 'draft'}</span></td>
              <td className="p-3 text-muted">{place.area_name || '-'}</td>
              <td className="p-3 text-muted">{(place.categories || []).map((category) => category.name).join(', ')}</td>
              <td className="p-3">
                <div className="flex flex-wrap gap-2">
                  <button type="button" onClick={() => move(place.id, 'up')} disabled={index === 0 || busyId === place.id} className="border border-line px-2 py-1 text-xs disabled:opacity-50">↑</button>
                  <button type="button" onClick={() => move(place.id, 'down')} disabled={index === items.length - 1 || busyId === place.id} className="border border-line px-2 py-1 text-xs disabled:opacity-50">↓</button>
                  <a href={`/admin/places/${place.id}/edit/`} className="border border-line px-2 py-1 text-xs no-underline">edit</a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
