import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://felix-blaimauer.me',
  integrations: [tailwind(), solidJs(), react()],
});
