/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans:['Space Grotesk','sans-serif']
      },

      colors : {
        gray : {
          100:'#22223B'
        }
      }
    },

  },
  plugins: [],
}

