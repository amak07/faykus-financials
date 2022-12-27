
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{ts,tsx}",
    "./widgets/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#3C4959",
        "dark-gray": "#3D3D3D",
        "sun-yellow": "#FBC218",
        "light-yellow": "#fef3d1",
        "light-blue": "#d9eefa"
      },
      letterSpacing: {
        "h2": ".21em"
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        roboto_slab: ['Roboto Slab', 'serif']
      }
    },
    fontSize: {
      heading1: ['38px', '50px'],
      heading2: ['24px', '33px'],
      heading3: ['28px', '53px'],
      heading4: ['30px', '40px'],
      paragraph: ['24px', '33px'],
      "footer-span": ['20px', '27px'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
