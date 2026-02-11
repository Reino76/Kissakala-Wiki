import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // SITE must be the base domain. BASE is the subfolder.
  site: 'https://Reino76.github.io',
  base: '/Kissakala-Wiki',
  trailingSlash: 'always',
  integrations: [
    react(), 
    tailwind({
      applyBaseStyles: false, // We handle this in global.css
    })
  ],
  vite: {
    build: {
      target: 'esnext'
    }
  }
});
