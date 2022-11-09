/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        web: {
          boton: '#56B6CB',
          fondo: '#C9D5E0',
          topBar: '#4FA9A9',
          loginButton: '#A5E1AD'
        }
      },

      fontFamily: {
        bluetea: ['bluetea', 'cursive']
      }
    }
  },
  plugins: []
}
