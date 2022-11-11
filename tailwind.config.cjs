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
          boton: '#79b5f3',
          boton2: '#3f67bc',
          fondo: '#C9D5E0',
          topBar: '#4FA9A9',
          loginButton: '#A5E1AD'
        }
      },

      fontFamily: {
        bluetea: ['bluetea', 'cursive'],
        caveat: ['caveat', 'cursive'],
        quicksand: ['quicksand', 'cursive']
      }
    }
  },
  plugins: []
}
