/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'kayan': '#704BEF',
      'black': '#3A3845',
      'white':'#fff'
    },
  },
  plugins: [],
}
