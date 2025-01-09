/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sunflower: ["Sunflower", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"]
      },
      colors: {
        gray: "#e4e4e4",
        lightGray:"#fffff1a"
      },
      backgroundImage: {
        whiteLayer:"url('./assets/images/webp/white-layer.webp')",
        heroLayer:"url('./assets/images/webp/hero-layer.webp')",
      },
      screens: {
        lg: "1025px",
        md:"770px"
      }
    },
  },
  plugins: [],
}