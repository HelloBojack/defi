/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      current: "currentColor",
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      gray: "#202020",
      gray2: "#343434",
      gray3: "#494949",
      gray4: "#7f7f7f",
      red: "#fa243c",
      green: "#03ffe1",
      yellow: "#ffff00",
    },
    extend: {},
  },
  plugins: [],
};
