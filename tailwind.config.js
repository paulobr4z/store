/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      color: {
        dark: {
          100: "#63686c",
          200: "#363638",
        }
      }
    },
  },
  plugins: [],
}
