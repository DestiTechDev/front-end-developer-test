/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#192945",
        secondary: "#4688F2",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      mobile: "414px",
      middle: "768px",
      desktop: "1920px",
    },
  },
  plugins: [],
};