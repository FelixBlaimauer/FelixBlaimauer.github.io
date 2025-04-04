import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import playformInline from '@playform/inline';
import playformCompress from '@playform/compress';
import tailwindcss from '@tailwindcss/vite'

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://felix-blaimauer.me',
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    solidJs({
      include: ['**/solid/**'],
    }),
    mdx(),
    icon({
      include: {
        heroicons: ['*'],
        mdi: ['linkedin', 'github'],
      },
    }),
    playformInline(),
    playformCompress(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          de: 'de-DE',
        },
      },
    }),
  ],
});
