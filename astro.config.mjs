import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Your GitHub URL (e.g., https://username.github.io)
  site: 'https://Reino76.github.io',
  // Your repository name with a leading slash (e.g., '/Kissakala')
  base: '/Kissakala-Wiki', 
  integrations: [react(), tailwind()],
});
