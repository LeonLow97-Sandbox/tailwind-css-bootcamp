/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    // Automatically center `container` class
    container: {
      center: true,
    },
    extend: {
      colors: {
        vuejs: {
          100: "#49e659",
          932: "#458320",
        },
      },
      fontSize: {
        base: "18px",
        sm: "15px",
        xs: "12px",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
      },
      margin: {
        1: "14px",
        2: "16px",
        3: "18px",
        4: "20px",
      },
    },
  },
  plugins: [],
};
