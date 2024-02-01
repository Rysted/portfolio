/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#1a139b",
        secondary: "#362fbd",
        white: "#ffffff",
        gray: "#e5eaf2",
        dark_navyBlue: "#0f1325",
        dark_indigo: "#1b1e37",
      },
    },
  },
  plugins: [],
};
