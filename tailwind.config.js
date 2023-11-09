/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const path = require("path");

module.exports = {
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
    maxWidth: ({ theme, breakpoints }) => ({
      none: "none",
      0: "0px",
      sm: "320px",
      lg: "768px",
      xl: "1440px",
      "2xl": "1920px",
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
      ...breakpoints(theme("screens")),
    }),
  },
  plugins: [],
};
