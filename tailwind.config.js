/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#C19D56',
          100: '#00642E'
        }
      },
      fontFamily: {
        pop: 'Poppins , sans-serif'
      },
      screens: {
        'se': { 'min': '375px', 'max': '667px' },       
       
      }
    },
  },
  plugins: [],
}
