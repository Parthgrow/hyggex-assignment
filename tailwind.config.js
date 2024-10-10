/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "custom-blue" : "#06286E",
        "custom-lightBlue" : "#407FFF",
        "custom-darkBlue" : "#06286E"
      }
    },
  },
  plugins: [],
}

