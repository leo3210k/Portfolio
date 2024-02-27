/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '455px',
        ...defaultTheme.screens,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          lgCircularLight: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, transparent 5px, transparent 120px);",
          mdCircularLight: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, transparent 5px, transparent 80px);",
          smCircularLight: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, transparent 5px, transparent 70px);",
          circularLight: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, transparent 5px, transparent 60px);",
      },
      boxShadow: {
        "3xl": "7px 10px 0 5px #020617",
      },
      animation: {
        'ping-slow': 'ping 2s linear infinite'
      }
    },
  },
  plugins: [],
};
