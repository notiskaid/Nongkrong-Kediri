import { useState } from 'react';

const links = [
  { label: 'Tempat Ngopi', href: '/tempat-ngopi-kediri/' },
  { label: 'WFC', href: '/wfc-kediri/' },
  { label: 'Nugas', href: '/cafe-buat-nugas-kediri/' },
  { label: 'Kontak', href: '/kontak/' }
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button type="button" onClick={() => setOpen(!open)} className="rounded-2xl border border-line bg-surface px-4 py-3 text-sm font-bold shadow-soft">
        menu
      </button>
      {open && (
        <div className="absolute left-4 right-4 top-20 rounded-[2rem] border border-line bg-surface p-3 shadow-card">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="block rounded-2xl px-4 py-3 text-sm font-bold no-underline hover:bg-paper">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
