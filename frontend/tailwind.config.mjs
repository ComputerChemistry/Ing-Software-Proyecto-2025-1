/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cafeoscuro: "#4b3423", // fondo principal
        cafemedio: "#8a745d",  // navbar o secciones destacadas
      },
    },
  },
  plugins: [],
};
