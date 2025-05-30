/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
      colors:{
        pink:"#e31870",
        lightPink:"#FFF7F7",
        grayColor:"#f5f5f5",
        beige:"#f9f3eb",
        softbeige:"#f6f0ef",
        nude:"#f5ddd8"
      },
      // fontFamily: {
      //   poppins: ['Poppins', 'sans-serif'],
      //   heading: ['"Dancing Script"', 'cursive'], // الخط الأنثوي للعناوين
      // },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        heading: ['"Quicksand"', 'sans-serif'], // تغيير الخط للعناوين
      },
      }
    },
    plugins: [require("daisyui")], 
  };
  