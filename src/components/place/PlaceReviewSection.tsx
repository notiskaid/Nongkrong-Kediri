import type { Place } from '@/types/place';

function formatDate(value?: string | null) {
  if (!value) return null;
  return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(value));
}

function stars(value?: number | null) {
  if (!value) return null;
  const rounded = Math.round(value);
  return `${'★'.repeat(rounded)}${'☆'.repeat(Math.max(0, 5 - rounded))} ${value}/5`;
}

export default function PlaceReviewSection({ place }: { place: Place }) {
  if (!place.editorial_verdict) return null;
  const visited = formatDate(place.visited_at);
  const rating = stars(place.editorial_rating);

  return (
    <section className="border border-dashed border-line bg-surface p-5">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-muted">Catatan lapangan</p>
      <h2 className="mt-2 text-xl font-semibold">Kesan Nongkrong Kediri saat berkunjung</h2>
      {(visited || rating) && (
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-muted">
          {visited && <span className="rounded-full border border-line bg-paper px-3 py-1">Dikunjungi terakhir: {visited}</span>}
          {rating && <span className="rounded-full border border-line bg-paper px-3 py-1">Nilai editorial: {rating}</span>}
        </div>
      )}
      {place.editorial_highlights && <div className="mt-4"><h3 className="text-sm font-semibold">Yang terasa enak</h3><p className="mt-1 text-sm leading-6 text-muted">{place.editorial_highlights}</p></div>}
      {place.editorial_notes_cons && <div className="mt-4"><h3 className="text-sm font-semibold">Yang perlu dipertimbangkan</h3><p className="mt-1 text-sm leading-6 text-muted">{place.editorial_notes_cons}</p></div>}
      <div className="mt-4"><h3 className="text-sm font-semibold">Kesimpulan</h3><p className="mt-1 text-sm leading-6 text-muted">{place.editorial_verdict}</p></div>
    </section>
  );
}
