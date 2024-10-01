/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./render.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Fredoka': ["Fredoka"],
      }
    },
  },
  plugins: [],
}