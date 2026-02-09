import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https:Reino76.github.io',
  base: '/Kissakala-Wiki', // Explicitly set for your repo name
  integrations: [react(), tailwind()],
});
