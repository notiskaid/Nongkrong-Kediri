import { useMemo, useState } from 'react';

type Place = {
  id: string;
  name: string;
  slug: string;
  excerpt?: string;
  area_name?: string;
  area_slug?: string;
  facilities?: { name: string; slug: string }[];
  use_cases?: { name: string; slug: string }[];
};

export default function PlaceFilter({ places }: { places: Place[] }) {
  const [query, setQuery] = useState('');
  const [area, setArea] = useState('');

  const areas = Array.from(new Set(places.map((place) => place.area_slug).filter(Boolean))).map((slug) => ({
    slug: slug as string,
    name: places.find((place) => place.area_slug === slug)?.area_name || slug
  }));

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return places.filter((place) => {
      if (area && place.area_slug !== area) return false;
      if (!q) return true;
      const haystack = [place.name, place.excerpt, place.area_name, ...(place.facilities || []).map((item) => item.name), ...(place.use_cases || []).map((item) => item.name)].join(' ').toLowerCase();
      return haystack.includes(q);
    });
  }, [places, query, area]);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 rounded-2xl border border-line bg-surface p-3 sm:grid-cols-[1fr_220px]">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter nama/fasilitas..." className="rounded-xl border border-line bg-paper px-3 py-2 text-sm" />
        <select value={area} onChange={(event) => setArea(event.target.value)} className="rounded-xl border border-line bg-paper px-3 py-2 text-sm">
          <option value="">Semua area</option>
          {areas.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}
        </select>
      </div>
      <p className="text-sm text-muted">{filtered.length} tempat ditemukan.</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((place) => (
          <article key={place.id} className="rounded-2xl border border-line bg-surface p-4">
            <h2 className="font-semibold"><a href={`/tempat/${place.slug}/`} className="no-underline">{place.name}</a></h2>
            <p className="mt-2 text-sm leading-6 text-muted">{place.excerpt}</p>
            <p className="mt-3 text-xs text-muted">{place.area_name}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
