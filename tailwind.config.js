/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#18315A",
        secondary:"#FE3E57"
      },
      fontFamily:{
        grotesk:["Space Grotesk" , "sans-serif"]
      }
    },
  },
  plugins: [],
}

