/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["*"],
  theme: {
    screens: {
      'sm': {'min': '0px', 'max': '860px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '861px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'black': '#000000',
        'white': '#FFFFFF',
        'grayy': '#191C20',
        'darkBlack': '#121519',
        'greenn': '#47997E',
        'darkGreenn': '#37715d',
        'yelloww': '#edcb50',
        //Footer
        'footer-background-dark': '#292c30',
        'footer-background-light': '#F5F5F5',
        //Home page
        'home-button-color': '#47997E',
        'home-qrForm-background': '#292C30',
        'home-qrForm-border': '#B7B8BA',
        'home-qrForm-component': '#1E2125',
        'home-ss1-border-light': '#595B5E',
        'home-ss1-border-dark': '#B7B8BA',
        'home-button-background': '#47997E',
        'home-folder-background-dark': '#292c30',
        'home-folder-background-light': '#F5F5F5',
        'home-FAQ-background-dark': '#F5F5F5',
        'home-FAQ-background-light': '#292C30',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

