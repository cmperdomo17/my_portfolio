/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu-mono': ['Ubuntu mono', 'Monospace', 'Bold'],
        'Onest': ['Onest', 'Monospace'],
        'Menlo': ['Menlo', 'Monospace'],
      },
      colors: {
        'darkmode': 'rgba(4,8,25,1)',
        'lightmode': 'rgba(255,255,255,1)',
      }
    },
  },
  plugins: [],
}