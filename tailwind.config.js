/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["*"],
  theme: {
    screens: {
      'sm': { 'min': '0px', 'max': '860px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'min': '861px', 'max': '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '1024px', 'max': '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': { 'min': '1280px', 'max': '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { 'min': '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundSize: {
        'custom-height': 'auto 50%',
      },
      colors: {
        'black': '#000000',
        'white': '#FFFFFF',
        'grayy': '#191C20',
        'darkBlack': '#121519',
        'greenn': '#47997E',
        'darkGreen': '#428871',
        'primary': '#333B7C',
        'secondary': '#EF8041',
        'tertiary': '#333B7C',
        'menu_desktop': '#FEFEFE',
        'menu_mobile': '#202020',
        'gray80': '#343434',
        'article_gray': '#f6f6f6',
        'article_card': '#272727',
        'card_background': '#A0A1A3',
        'card_container': '#0b0f19',
        'benefits_background': '#272727',
        'brading': '#47997e',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

