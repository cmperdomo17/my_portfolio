/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu-mono': ['Ubuntu mono', 'Monospace', 'Bold'],
      },
      animation: {
        typing1: 'typing 2.6s steps(20), blink, .5s infinite step-end alternate',
        typing2: 'typing 3.2s steps(30), blink, .5s infinite step-end alternate',
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