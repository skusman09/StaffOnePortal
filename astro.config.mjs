import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://staffone.io',
  output: 'static',
  adapter: cloudflare({
    prerenderEnvironment: 'node',
    imageService: 'cloudflare',
    platformProxy: {
      enabled: true
    }
  }),
  session: {
    driver: 'cookie'
  },
  vite: {
    css: {
      preprocessorOptions: {}
    }
  }
});
