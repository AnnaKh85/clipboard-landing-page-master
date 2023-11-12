/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'header-texture-mobile': "url('/images/bg-header-mobile.png')",
        'header-texture-desktop': "url('/images/bg-header-desktop.png')",
      },
      screens: {
        'sm': {'min': '375px', 'max': '500px'},
        'md': {'min': '500px'},
      },
      fontFamily:{
        'sans': ['Bai Jamjuree', 'sans-serif'],
      },
      colors:{
        'strong-cyan' : 'hsl(171, 66%, 44%)',
        'light-blue' : 'hsl(233, 100%, 69%)',
        'dark-grayish-blue' : 'hsl(210, 10%, 33%)',
        'grayish-blue' : 'hsl(201, 11%, 66%)',
      },
      boxShadow: {
        'button-shadow': '6px 7px 2px -5px rgba(0,0,0,0.64)',
        
      }
    },
  },
  plugins: [],
}

