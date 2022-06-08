const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "sun-yellow": {
        DEFAULT: "#FFCC00",
        light: "#fffef2",
      },

      ...colors,
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("daisyui")],
};
