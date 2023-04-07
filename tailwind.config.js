/** @type {import('tailwindcss').Config} */

const nativewind = require("nativewind/tailwind")

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "index.js"],
  theme: {
    colors:{
        'ug-light-green' : '#61ff73',
        'ug-green' : '#2fc62d',
        'ug-dark-green' : '#031e08',
        'ug-brown' : '#393424',
        'ug-light-blue' : '#b6dee4',
        'ug-light-gray' : '#a3c2b3',
        'ug-gray' : '#838e88',
        'ug-white' : '#ecf6ff',
        'ug-black' : '#0f0e0d',
        'ug-red': '#a63232'
    },
    extend: {
      animation: {
        logoColorAlternate: 'logoColorAlternate 4s ease-in-out infinite',
      },
      keyframes: {
        logoColorAlternate: {
          '0%': { color: '#b6dee4' },

          '50%': { color: '#2fc62d' },

          '100%': { color: '#b6dee4' },
        },
      },
    },
  },
  presets: [nativewind],
}
