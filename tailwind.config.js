/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Aquí defines los archivos donde Tailwind buscará clases
  ],
  theme: {
    extend: {
      fontFamily: {
        spotify: ['SpotifyCircular', 'sans-serif'], // Aquí agregas la fuente personalizada
      },
    },
  },
  plugins: [],
}
