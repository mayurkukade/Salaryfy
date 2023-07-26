/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkGreen:'#0E5F59',
        white:"#FFFFFF",
        yellow:"#FECD08",
        greyBlue:"7B9E9C"
      },
      backgroundImage:{
        // "hero-section-wave" : "url('./src/img/bg/svgviewer-output.svg')"
      },
      images:{
        "hero-section-boy" : "url('./src/img/bg/herosection.png')"
      }
  
    },
  
  },
  plugins: [],
}

