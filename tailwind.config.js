/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#00D8FF',
        'darkBlack': '#21222A',
        'gray': '#282D35',
        'lightBlue' : '#61DAFB'
      }
    },
  },
  plugins: [],
}