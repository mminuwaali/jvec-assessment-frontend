/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/images/bg.jpg')",
      }
    }
  },
  plugins: [],
  content: ['./src/**/*.{ts,tsx}'],
}
