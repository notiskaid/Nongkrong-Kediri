import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://nongkrongkediri.web.id',
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough'
  }),
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ['@supabase/ssr']
    }
  }
});
