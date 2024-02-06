/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const path = require("path");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: "320px",
      // => @media (min-width: 320px) { ... }

      tablet: "768px",
      // => @media (min-width: 768px) { ... }

      desktop: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    // надо бы настроить переменные тайлвинда что б потом темы замутить
    colors: {
      primary: "#E2DEFF",
      textprimary: "#303030",
      purpl: "#D5D1FF",
      purplprimary: "#FAFAFA",
      grey: "#A5A5A5",
      greyprimary: "#DCDCDD",
    },
  },
  plugins: [],
};
