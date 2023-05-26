/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: "#09051A",
        black50: "#808080",
        light: "#F6F9FF",
        borderLight: "#ffffff33",
        primary: {
          DEFAULT: "#048EFF",
          50: "#BCE1FF",
          100: "#A7D7FF",
          200: "#7EC5FF",
          300: "#56B3FF",
          400: "#2DA0FF",
          500: "#048EFF",
          600: "#0070CB",
          700: "#005193",
          800: "#00325B",
          900: "#030221",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
