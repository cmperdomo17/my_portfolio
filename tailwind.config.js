/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu-mono': ['Ubuntu mono', 'Monospace', 'Bold'],
        'Onest': ['Onest', 'Monospace'],
      },
    },
  },
  plugins: [],
}