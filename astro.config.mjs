import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import mdx from '@astrojs/mdx';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://felix-blaimauer.me',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    tailwind(),
    solidJs({
      include: ['**/solid/**'],
    }),
    mdx(),
    icon({
      include: {
        heroicons: ['*'],
      },
    }),
  ],
});
