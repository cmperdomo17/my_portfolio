/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu-mono': ['Ubuntu mono', 'Monospace', 'Bold'],
      },
      animation: {
        typing25: 'typing 3s steps(24), blink, .5s infinite step-end alternate',
        typing12: 'typing 3s steps(9), blink, .5s infinite step-end alternate',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' }
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'inherit' }
        }
      },
    },
  },
  plugins: [],
}