const colors = require('tailwindcss/colors')

   
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'warm-gray': colors.warmGray,
        teal: colors.teal,
        rose: colors.rose,
        page: {
          yellow: '#FFD166',
          red: '#EF476F',
          bluelighter: '#118AB2',
          bluelight: '#0b2942',
          green: '#06D6A0',
          greendark: '#2d6a4f',
          bluedarker: '#011627',
        }
      }
  }
},
  plugins: [
    // ...
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar'),
  ],
}
