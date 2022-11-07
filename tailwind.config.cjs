/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#fad400",
        softRed: "#fe7867",
        darkBlue: "#19536b",
        darkDesaturatedCyan: "#25564b",
        desaturatedCyan: "#90d4c5",
        darkModerateCyan: "#458c7e",
        veryDarkDesaturatedBlue: "#23303e",
        veryDarkGrayishBlue: "#5a636c",
        darkGrayishBlue: "#818498",
        grayishBlue: "#a7abae",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
    },
  },
  safelist: [
    "bg-yellow",
    "bg-softRed",
    "text-veryDarkDesaturatedBlue",
    "text-darkDesaturatedCyan",
    "text-darkBlue",
  ],
  plugins: [],
};
