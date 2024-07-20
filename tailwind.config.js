/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#12130F',
        'text-primary': '#E4DFDA',
        'accent-primary': '#F6690C',
        'orange-primary': {
          DEFAULT: '#f6690c',
          50:'#f6690c',
          100:'#f6690c',
          200:'#f6690c',
          300:'#f6690c',
          400:'#f6690c',
          500:'#f6690c',
          600:'#f6690c',
          700:'#f6690c',
          800:'#9c3b10',
          900:'#7e3210',
          950:'#441706'
        }
      },
      fontFamily: {
        "rekron": ["rekron", "sans-serif"],
        "outfit": ["outfit", "sans-serif"]
      }
    },
  },
  plugins: [],
}

