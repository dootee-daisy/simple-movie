/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Popspin", "sans-serif"],
      },
      colors: {
        primary: "#f13b6c",
        secondary: "#7c3aed",
      },
    },
  },
  plugins: [],
}
