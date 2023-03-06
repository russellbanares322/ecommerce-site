const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "dk-blue": "#17252A",
      "dk-cyan": "#2B7A78",
      "lght-cyan": "#3AAFA9",
      "lght-gray": "#DEF2F1",
      "dflt-white": "#FEFFFF",
    },
  },
  plugins: [],
};
