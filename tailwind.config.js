/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#05010d',
        'secondary-color': 'linear-gradient(0deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,.1))',
      }
    },
  },
  plugins: [],
}

// rgb(9, 8, 9)

// linear - gradient(0deg, hsla(0, 0 %, 100 %, .1), hsla(0, 0 %, 100 %, .1));