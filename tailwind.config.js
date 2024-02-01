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
        dark_MidnightBlue: "#1B1E37",
        dark_DeepPurple: "#443D68",
      },
    },
  },
  plugins: [],
};
