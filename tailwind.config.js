/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Baskervville SC", "serif"]
      }
    },
  },
  plugins: [],
  prefix: 'tw-'
 }
 