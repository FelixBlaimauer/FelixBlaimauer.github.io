const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'body-sm': '19pt',
        'body-lg': '22pt',
        'display-xl': '64pt',
      },
      colors: {
        primary: '#FFC700',
        background: '#1D1D1D',
        'white-90-opaque': '#e8e8e8',
        'white-90': 'rgba(255, 255, 255, 0.9)',
        'white-70': 'rgba(255, 255, 255, 0.7)',
        'white-30': 'rgba(255, 255, 255, 0.3)',
      },
      lineHeight: {
        tighter: '96%',
      },
    },
  },
  plugins: [],
};
