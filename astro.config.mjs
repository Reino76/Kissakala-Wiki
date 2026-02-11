import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Reino76.github.io/',
  base: '/Kissakala-Wiki',
  integrations: [react(), tailwind()],
  vite: {
    build: {
      target: 'esnext'
    }
  }
});
