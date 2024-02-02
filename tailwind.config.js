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
        light_text: "#000000",
        light_background: "#FFFFFF",
        light_highlight: "#F5F5F5",
        dark_text: "#FFFFFF",
        dark_background: "#171717",
        dark_highlight: "#212121",
      },
      boxShadow: {
        light_left: "-0px 10px 10px 0px rgba(0,0,0,0.75)",
        light_bottom: "-0px 0px 10px 0px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
