## Installation Vue and Tailwind

```
## Install Vue with Vite (https://vitejs.dev/guide/)
npm create vite@latest

## Install TailwindCSS with Vue (https://tailwindcss.com/docs/guides/vite#vue)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

npm install

npm run dev
```

## What is tailwindcss?

- Tailwind CSS is a CSS library with predefined CSS styles.
- Has breakpoint prefixes to deal with responsiveness.

## Adding Customize Colors in Tailwind CSS

```js
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vuejs: {
          100: '#49e659',
          932: '#434252',
        },
        react: '#493585',
      },
    },
  },
  plugins: [],
};
```

```html
<h1 class="text-vuejs-100">Hello World!</h1>
<h1 class="text-react">Hello World!</h1>
```
