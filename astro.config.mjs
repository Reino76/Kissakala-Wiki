import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // REPLACE with your actual GitHub username
  site: 'https://Reino76.github.io',
  base: '/Kissakala-Wiki',
  integrations: [react(), tailwind()],
  vite: {
    build: {
      // Ensures the builder uses modern JS syntax to avoid "Unexpected const" errors
      target: 'esnext'
    },
    // Useful for handling local assets and avoiding path issues on GitHub Pages
    resolve: {
      alias: {
        '@': '/src',
      }
    }
  }
});