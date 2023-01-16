/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
  theme: {
    colors: {
      white: '#ffffff', // white: 'var(--colors-white)',
      black: '#000000', // primary: 'var(--colors-black)',
      primary: '#0E3A83', // primary: 'var(--colors-primary)',
    },
    screens: {
      'tablet': '640px', // => @media (min-width: 640px)
      'laptop': '1024px', // => @media (min-width: 1024px)
      'desktop': '1280px', // => @media (min-width: 1280px)
    },
  },
};
