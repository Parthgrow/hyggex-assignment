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
        "custom-darkBlue" : "#06286E",
        "lightest-blue" : "#407FFF33",
        "custom-heading" : "#0F2669CC",
        "custom-vector1" : "#A5C3FF99",
        "custom-vector2" : "#FFEDAD99",
        "custom-vector3" : "#B7A8FF99"
      }
    },
  },
  plugins: [],
}

