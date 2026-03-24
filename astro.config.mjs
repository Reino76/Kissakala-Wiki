import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Use the subfolder only when deploying to GitHub Actions
  base: process.env.GITHUB_ACTIONS ? '/Kissakala-Wiki' : '', 
  site: 'https://Reino76.github.io',
  trailingSlash: 'always',
  integrations: [
    react(), 
    tailwind({
      applyBaseStyles: false,
    })
  ],
  vite: {
    build: {
      target: 'esnext'
    }
  }
});