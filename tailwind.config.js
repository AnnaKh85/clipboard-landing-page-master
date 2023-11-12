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
        'sm': {'min': '375px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
        'md': {'min': '768px'},
      },
    },
  },
  plugins: [],
}

