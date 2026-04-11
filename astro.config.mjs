import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://staffone.io',
  output: 'hybrid',
  adapter: cloudflare(),
  image: {
    service: {
      entrypoint: 'astro/assets/services/cloudflare'
    }
  },
  vite: {
    css: {
      preprocessorOptions: {}
    }
  }
});
