/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu-mono': ['Ubuntu mono', 'Monospace', 'Bold'],
        'Onest': ['Onest', 'Monospace'],
      },
      animation: {
        typing1: 'typing 2s steps(42), blink, .5s infinite step-end alternate',
        typing2: 'typing 2s steps(50), blink, .5s infinite step-end alternate',
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