/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['36px', '54px'],
      '4xl': ['48px', '58px'],
      '5xl': ['58px', '68px'],
      '6xl': ['70px', '80px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
        lato: ['Lato', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif']
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "purple-primary": "#AAA7CC",
        "blue-secondary": "#A6BDCE",
        "blue-light": "#C5E1E9",
        "purple-secondary": "#8794B4", 
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}