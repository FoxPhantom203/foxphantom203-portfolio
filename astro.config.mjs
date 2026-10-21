import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://foxphantom203.github.io',
  output: 'static',
  adapter: '@astrojs/static',
  integrations: [tailwind()]
});
