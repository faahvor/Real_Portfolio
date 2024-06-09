/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      fontFamily:{
        Sans:('Source Sans 3', 'sans-serif'),
        oswald:('Oswald', 'sans-serif')
      }
    },
  },
  plugins: [],
}

