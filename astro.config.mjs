import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://<username>.github.io',
  base: '/Kissakala-Wiki', // Explicitly set for your repo name
  integrations: [react(), tailwind()],
});
