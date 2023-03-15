const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "dark-blue": "#17252A",
      "dark-cyan": "#2B7A78",
      "light-cyan": "#3AAFA9",
      "light-gray": "#DEF2F1",
      white: "#FEFFFF",
      gray: "#333f",
    },
  },
  plugins: [],
};
