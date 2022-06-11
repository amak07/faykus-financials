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
      gold: {
        DEFAULT: "#d1b854",
      },
      "cool-gray": {
        DEFAULT: "#808c9c",
        dark: "#6D6961",
      },

      ...colors,
    },

    fontFamily: {
      "GillSansMTPro-Book": ["GillSansMTPro-Book", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("daisyui")],
};
