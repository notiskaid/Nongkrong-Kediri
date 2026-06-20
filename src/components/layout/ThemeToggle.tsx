import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('nk-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enabled = saved ? saved === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', enabled);
    setIsDark(enabled);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('nk-theme', next ? 'dark' : 'light');
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="focus-ring flex size-9 items-center justify-center rounded-full border border-ink bg-surface text-ink"
      aria-label="Ganti tema"
    >
      <i className={isDark ? 'ri-sun-line' : 'ri-moon-line'} />
    </button>
  );
}
