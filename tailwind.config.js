/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grape: "rgba(var(--grape))",
        
      },
      fontFamily: {
      titleFont: ["Rancho", "cursive"],
      paraFont: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

