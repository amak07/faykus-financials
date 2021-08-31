const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      cyan: {
        DEFAULT: '#00599c',
        accent: '#5eb4e7',
        text: '#1779ba'
      },
      ochre: {
        DEFAULT: '#83794e',
        text: '#757575'
      }
    },
    extend: {
      screens: {
        "3xl": '2000px'
      }
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
      textColor: ['active', 'first'],
      padding: ['last'],
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('daisyui')],
}
