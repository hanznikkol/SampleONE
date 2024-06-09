/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.html",
    "./js/*.js",
  ],

  theme: {

    extend: {

      backgroundColor: {
        'lightyellow': '#FFFF66', 
      },

      fontFamily: {
        'inter': ['"Inter", sans-serif']
      }
    },

  },

  plugins: [],
}

