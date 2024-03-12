/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        'blue': '#2D2879',
        'teal':'#ABD9D9',
        'purple': '#9091DC',
      },
      width: {
        '256': '64rem',
      },
      height:{
        '256': '64rem',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, rgba(141,141,218,1) 0%, rgba(0,0,0,1) 61%)',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1000px', 
        'xl': '1280px',
       
      },
    },
  },
  plugins: [],
}

