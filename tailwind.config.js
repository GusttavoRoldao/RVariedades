/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OsnovaPro: ["OsnovaPro", "sans-serif"],
        SansitaOne: ["SansitaOne", "sans-serif"],
        Mylierka: ["Mylierka", "sans-serif"],
      },
    },
  },
  plugins: [],
};
