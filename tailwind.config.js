/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'emWhite': [
           '-1px 1px 0.5px #FFF',
            '1px 1px 0.5px #FFF',
           '1px -1px 0.5px #FFF',
          '-1px -1px 0.5px #FFF',
        ],
        'emBlack': [
           '-1px 1px 0.5px #000',
            '1px 1px 0.5px #000',
           '1px -1px 0.5px #000',
          '-1px -1px 0.5px #000',
        ],
      },
      animation: {
        'orbit': 'spin 60s linear infinite',
        'orbit-slow': 'spin 60s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
}
