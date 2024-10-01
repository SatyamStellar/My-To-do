/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./render.js",
    "./src/index.css"

  ],
  theme: {
    extend: {
      fontFamily: {
        'Fredoka': ["Fredoka"],
      },
      backgroundSize: {
        'cust-size': '20px 20px'
      }

    },
  },
  plugins: [],
}