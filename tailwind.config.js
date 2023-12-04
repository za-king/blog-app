/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {},
    container: {
      padding: '9rem'
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

