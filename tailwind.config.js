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
        primary: {
          100: "rgba(29, 115, 235, 0.1)",
          200: "#4ab0ff",
          300: "#0093ff",
          400: "#007acc",
          500: "#1F6FEB",
          600: "#1455b3",
          700: "#121D2F",
          800: "#0b0e17",
          900: "#05080c",
        },

        secondary: {
          100: "#F7F7F7",
          200: "#E5E5E5",
          300: "#CCCCCC",
          400: "#B3B3B3",
          500: "#999999",
          600: "#808080",
          700: "#666666",
          800: "#4D4D4D",
          900: "#333333",
        },

        primary_hover: "",
        primary_dark: "",

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
