/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDarkGreen: "#005F59",
        secondaryYellow1: "#FECD08",
        secondaryYellow2: "FFCD05",
        white: "#FFFFFF",
        lightblue: " #E9FEFF",
        grey: "#5B5B5B",
        black: "#000000",
       darkgrey:" #B3B3B3",
      },
      fontFamily: {
        Lexend: [" Lexend,", "Gilroy-HeavyItalic;"],
      },

      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  
  },
  plugins: [],
}

