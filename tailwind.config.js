/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: "var(--body_background)",
        color: "var(--body_color)",
        
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

