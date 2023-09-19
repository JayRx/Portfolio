/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#6527BE',
        'lightpurple': '#D9CBEE',
        'folly': '#FF005D',
        'customgray': '#686868'
      },
    },
  },
  plugins: [],
}

