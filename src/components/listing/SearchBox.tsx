import { useState } from 'react';

export default function SearchBox({ defaultValue = '' }: { defaultValue?: string }) {
  const [query, setQuery] = useState(defaultValue);
  return (
    <form action="/search/" method="get" className="flex gap-2 rounded-[1.5rem] border border-line bg-surface p-2 shadow-card">
      <label className="sr-only" htmlFor="q">Cari tempat</label>
      <input
        id="q"
        name="q"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Cari cafe, WFC, outdoor, murah..."
        className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm font-medium outline-none placeholder:text-muted/70"
      />
      <button className="focus-ring rounded-2xl border border-ink bg-ink px-5 py-3 text-sm font-extrabold text-paper shadow-offset" type="submit">
        <i className="ri-search-line" /> Cari
      </button>
    </form>
  );
}
