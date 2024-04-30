/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "mainBGC":"#0D1117",
        "colBGC":"#161C22"
      }
    },
  },
  plugins: [],
}

