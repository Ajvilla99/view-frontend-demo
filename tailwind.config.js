/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#110f1d',
        'secondary': '#eccb28',
      },
      fontFamily: {
        sans: ['Roboto Condensed', 'sans-serif'], // O el nombre de tu fuente
      },
    },
  },
  plugins: [],
}