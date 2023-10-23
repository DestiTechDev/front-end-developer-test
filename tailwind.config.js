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
      sm: "414px",
      md: "768px",
      lg: "1920px",
    },
  },
  plugins: [],
};