/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // container: {
    //   center: true,
    // },
    extend: {
      colors:{
        darkGreen:'#0E5F59',
        white:"#FFFFFF",
        yellow:"#FECD08",
        greyBlue:"7B9E9C",
        lightBlue:"#E9FEFF"
      },
    
  
    },
  
  },
  plugins: [],
}

