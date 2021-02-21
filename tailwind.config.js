const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Varela Round', 'sans-serif'],
      serif: ['serif'],
    },
    extend: {
      colors: {
        teal: colors.teal
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
