/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2C7DFA",
        blueshade: "#3685FF",
        darknavy: "#1F314F",
        gray: "#7D889E",
        lightgray: "#D5E1EF",
      },
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
}
