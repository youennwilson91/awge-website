/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
      animation: {
        blink: 'blink 2.5s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': {
            opacity: 1
          },
          '50%': {
            opacity: 0
          }
        }
      }
    },
  },
  plugins: [],
}
