/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('focus-not-visible', '&:focus:not(:focus-visible)');
    }),
  ],
  theme: {
    colors: {
      white: '#ffffff', // white: 'var(--colors-white)',
      black: '#000000', // primary: 'var(--colors-black)',
      primary: '#0E3A83', // primary: 'var(--colors-primary)',
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    screens: {
      'tablet': '640px', // => @media (min-width: 640px)
      'laptop': '1024px', // => @media (min-width: 1024px)
      'desktop': '1280px', // => @media (min-width: 1280px)
    },
  },
};
