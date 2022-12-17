/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'ms': '320px',
      'mm': '375px',
      'ml': '425px',
      't': '768px',
      'l': '1024px',
    },
    colors: {
      "transparent": 'transparent',
      'branco': '#fff',
      'cyan': '#0ea5e9',
      'gray': '#f3f4f6',
    },
    fontFamily: {
      'kanit': 'Kanit'
    }
  },
  plugins: [],
}