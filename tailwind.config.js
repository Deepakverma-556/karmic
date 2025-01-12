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
        lightGray: "#fffff1a",
        gray: "#1d1d1d",
        darkGray:"#4d4d4d"
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