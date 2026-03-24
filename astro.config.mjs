import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Reino76.github.io',
  // Only use the subfolder base if deploying to GitHub Pages
  base: process.env.GITHUB_ACTIONS ? '/Kissakala-Wiki' : '/',
  // ... rest of config
  trailingSlash: 'always',
  integrations: [
    react(), 
    tailwind({
      applyBaseStyles: false,
    })
  ],
});