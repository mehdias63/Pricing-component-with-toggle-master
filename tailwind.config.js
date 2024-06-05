/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      rub: ["Rubik"],
    },
    extend: {
      colors: {
        "light-orange": "#FF8B64",
        "light-blue": "#55C2E6",
        "light-red": "#FF5E7D",
      },
    },
  },
  plugins: [],
};
