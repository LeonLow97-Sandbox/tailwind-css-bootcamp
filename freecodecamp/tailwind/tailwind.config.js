/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vuejs: {
          100: '#49e659',
          932: '#458320',
        },
      },
    },
  },
  plugins: [],
};
