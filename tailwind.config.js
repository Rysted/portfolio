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
        light_text: "#000000",
        light_text_secondary: "#333333",
        light_background: "#F3F6FD",
        light_highlight: "#F5F5F5",
        light_bg_card: "#FFFFFF",
        dark_text: "#FFFFFF",
        dark_text_secondary: "#CCCCCC",
        dark_background: "#000000",
        dark_highlight: "#171717",
        dark_bg_card: "#212121",
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
