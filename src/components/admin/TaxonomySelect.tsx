type Term = { id?: string; name: string; slug: string };

export default function TaxonomySelect({ name, label, terms, selected = [] }: { name: string; label: string; terms: Term[]; selected?: string[] }) {
  return (
    <fieldset className="rounded-2xl border border-line bg-paper p-4">
      <legend className="px-1 text-sm font-semibold">{label}</legend>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {terms.map((term) => (
          <label key={term.id || term.slug} className="flex items-center gap-2 text-sm">
            <input type="checkbox" name={name} value={term.id || term.slug} defaultChecked={selected.includes(term.id || term.slug)} />
            {term.name}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
