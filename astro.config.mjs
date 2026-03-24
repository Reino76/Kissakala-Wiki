import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Only use the subfolder base if deploying to GitHub Pages
  base: process.env.GITHUB_ACTIONS ? '/Kissakala-Wiki' : '',
  site: 'https://Reino76.github.io',
  trailingSlash: 'always',
  integrations: [
    react(), 
    tailwind({
      applyBaseStyles: false, // Custom styles handled in global.css
    })
  ],
  vite: {
    build: {
      target: 'esnext'
    }
  }
});