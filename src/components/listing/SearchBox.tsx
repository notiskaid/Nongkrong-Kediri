import { useState } from 'react';

export default function SearchBox({ defaultValue = '' }: { defaultValue?: string }) {
  const [query, setQuery] = useState(defaultValue);
  return (
    <form action="/search/" method="get" className="flex gap-2 rounded-2xl border border-line bg-surface p-2">
      <label className="sr-only" htmlFor="q">Cari tempat</label>
      <input
        id="q"
        name="q"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Cari cafe, WFC, outdoor, murah..."
        className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none"
      />
      <button className="focus-ring rounded-xl border border-ink bg-ink px-4 py-2 text-sm text-paper" type="submit">
        <i className="ri-search-line" /> Cari
      </button>
    </form>
  );
}
