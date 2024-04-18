/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant"'],
        cormorant_upright: ['"Cormorant Upright"'],
        italiana:['"Italiana"'],
        carattere:['"Carattere"'],
      }
    },
  },
  plugins: [],
}

