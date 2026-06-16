export default function ActiveFilters({ items = [] }: { items?: string[] }) {
  if (!items.length) return null;
  return <div className="flex flex-wrap gap-2">{items.map((item) => <span className="rounded-lg border border-line px-2 py-1 text-xs" key={item}>{item}</span>)}</div>;
}
