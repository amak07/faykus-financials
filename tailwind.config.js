
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
      heading1_M: ['20px', '26px'],
      heading2: ['24px', '33px'],
      heading2_M: ['14px', '19px'],
      heading3: ['28px', '53px'],
      heading3_M: ['16px', '21px'],
      heading4: ['30px', '40px'],
      heading4_M: ['20px', '26px'],
      paragraph: ['24px', '33px'],
      paragraph_M: ['16px', '22px'],
      li: ['33px'],
      li_M: ['20px', '24px'],
      "footer-span": ['20px', '27px'],
      "footer-span_M": ['14px', '19px'],
      "icon-btn-heading": ['38px'],
      "icon-btn-heading_M": ['28px']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
