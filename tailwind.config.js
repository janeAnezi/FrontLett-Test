/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: { 
        'primary': '#20888F',
        'secondary': '#303030',
      },
      colors: {
        'primary': '#20888F',
      }
    },
  },
  plugins: [],
}

