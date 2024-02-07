import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import mdx from '@astrojs/mdx';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://felix-blaimauer.me',
  integrations: [
    tailwind(),
    solidJs({
      include: ['**/solid/**'],
    }),
    mdx(),
    icon({
      include: {
        'heroicons': ['*'],
      },
    }),
  ],
});
