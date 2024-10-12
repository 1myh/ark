/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tajawal: "Tajawal"
      },
      colors: {
        dish: "#f74a26"
      }
    },
  },
  plugins: [],
}