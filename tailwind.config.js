/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ocean-teal": "#008080",
        "ocean-aqua": "#00FFFF",
        "skater-yellow": "#FFFF00",
        "urban-pink": "#FF69B4",
        "urban-purple": "#800080",
        "urban-black": "#1a1a1a",
      },
      fontFamily: {
        sans: ["Roboto Slab", "serif"],
        display: ["Roboto Slab", "serif"],
        roboto: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};
