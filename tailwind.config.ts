import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      colors: {
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        coffee: 'rgb(var(--color-coffee) / <alpha-value>)',
        leaf: 'rgb(var(--color-leaf) / <alpha-value>)',
        brick: 'rgb(var(--color-brick) / <alpha-value>)',
        sky: 'rgb(var(--color-sky) / <alpha-value>)',
        butter: 'rgb(var(--color-butter) / <alpha-value>)'
      },
      boxShadow: {
        soft: '0 12px 30px rgba(68, 42, 24, 0.08)',
        card: '0 18px 50px rgba(68, 42, 24, 0.12)',
        offset: '5px 5px 0 rgb(var(--color-ink) / 0.18)'
      }
    }
  },
  plugins: [typography]
} satisfies Config;
