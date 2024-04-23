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

```
## Add Prettier class sorting in tailwind css
## Link: https://tailwindcss.com/blog/automatic-class-sorting-with-prettier
npm install -D prettier prettier-plugin-tailwindcss

## Create a `.prettierrc` file and add the following
{
    "plugins": [
        "prettier-plugin-tailwindcss"
    ]
}
```

## Tailwind Cheatsheet

- [Cheat Sheet](https://tailwindcomponents.com/cheatsheet/)

## What is tailwindcss?

- Tailwind CSS is a CSS library with predefined CSS styles.
- Has breakpoint prefixes to deal with responsiveness.

## Adding Customize Colors in Tailwind CSS

- `extend` keeps the initial configuration of tailwind, and it adds on top of what tailwind already has. If put outside of `extend`, then it overrides what tailwind offers.

```js
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vuejs: {
          100: "#49e659",
          932: "#434252",
        },
        react: "#493585",
      },
    },
  },
  plugins: [],
};
```

```html
<h1 class="text-vuejs-100">Hello World!</h1>
<h1 class="text-react">Hello World!</h1>
<p class="bg-[#bad943]">Second Sentence</p>
```

## Customization with Screen Size

```js
screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
},
```

```html
<p class="text-sm lg:text-lg"></p>
```

## Customization with Spacing

```js
spacing: {
    1: '8px',
    2: '12px',
    3: '16px',
    4: '24px',
    5: '32px',
    6: '48px',
},
```

## Apply tailwind with custom css in style.css

- `@apply` is not recommended.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply bg-slate-500 text-lg font-bold text-white;
  }
}
```

## Adding Google Fonts in Tailwind

- Add in `style.css`, the global css file.

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;800&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply text-black;
    font-family: "Inter", sans-serif;
  }
}
```

## Adding negative margin

- `-mt-8`
- `-mb-4`

## Tailwind Container

- Tailwind container is a component for fixing an element's width to the current breakpoint.

```html
<div class="container columns-lg px-2"></div>
```

## Dark Mode

- Go to `tailwind.config.js` file and add the following:

```js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  ...
}
```

- Add to `index.html` file on `<html class="dark" id="html-root">` tag and `<body class="dark:bg-slate-900 text-white">` tag

```html
<!doctype html>
<html lang="en" class="dark" id="html-root">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Vue</title>
  </head>
  <body class="dark:bg-slate-900 dark:text-white">
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```
