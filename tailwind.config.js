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
        primary: "#5657FF",
        primary_hover: "#3A3AFF",
        primary_dark: "#6D72FF",

        light_text: "#000000",
        light_text_secondary: "#555555",
        light_text_tertiary: "#919FB4",
        light_background: "#E5E9F5",
        light_highlight: "#F5F5F5",

        dark_text: "#FFFFFF",
        dark_text_secondary: "#CCCCCC",
        dark_background: "#050505",
        dark_highlight: "#212121",
      },
      boxShadow: {
        light_left: "5px 10px 10px 0px rgba(0,0,0,0.75)",
        light_bottom: "0px 0px 10px -5px rgba(0,0,0,0.75)",
        dark_left: "5px 10px 10px 0px rgba(255,255,255,0.75)",
        dark_bottom: "0px 0px 10px -5px rgba(255,255,255,0.75)",
      },
    },
  },
  plugins: [],
};
