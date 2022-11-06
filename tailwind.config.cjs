/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softRed: "#fe7867",
        yellow: "#fad400",
        darkDesaturatedCyan: "#25564b",
        darkBlue: "#19536b",
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
      backgroundImage: {
        "hero-image-desktop": "url('../assets/desktop/image-header.jpg')",
        "hero-image-mobile": "url('../src/assets/mobile/image-header.jpg')",
      },
    },
  },
  plugins: [],
};
