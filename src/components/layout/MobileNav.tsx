import { useState } from 'react';

const links = [
  { label: 'Tempat Ngopi', href: '/tempat-ngopi-kediri/' },
  { label: 'WFC', href: '/wfc-kediri/' },
  { label: 'Nugas', href: '/cafe-buat-nugas-kediri/' },
  { label: 'Submit', href: '/submit-tempat/' }
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button type="button" onClick={() => setOpen(!open)} className="rounded-xl border border-line bg-surface px-3 py-2 text-sm">
        menu
      </button>
      {open && (
        <div className="absolute left-4 right-4 top-16 rounded-2xl border border-line bg-surface p-3 shadow-soft">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="block rounded-xl px-3 py-2 text-sm no-underline hover:bg-paper">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
