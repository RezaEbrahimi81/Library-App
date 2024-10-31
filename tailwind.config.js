/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding:{
        DEFAULT: '15PX',
  
      }
  
    },
    screens:{
      sm: '640px',
      md: '768px',
      xl: '1280px',
    },
    fontFamily:{
      primary: 'dana',
      secondary: 'Tahoma',
    },
  
    extend: {
      colors: {
        primary: '#5e942b',
        secondary: '#9E9E9E',
      },
      transitionProperty: {
        'height': 'height'
      },
    },
  
    variants: {
      height: ['responsive', 'hover', 'focus']
   },

  plugins: [],
  }}


