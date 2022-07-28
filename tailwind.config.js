/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica_en: 'HelveticaEn',
        helvetica_ge: 'HelveticaGe',
        Montserrat: ['Montserrat'],
      },
      colors: {
        mainDark: '#11101A',
        beidge: '#DDCCAA',
        red: '#E31221',
        redHover: '#b0101b',
      },
      backgroundImage: {
        homeGradient:
          'linear-gradient(180deg, #11101A 0%, #08080D 70.52%, rgba(0, 0, 0, 0) 100%)',
        quotesGradient:
          'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 55.21%, rgba(0, 0, 0, 0) 100%)',
      },
    },
  },
  plugins: [],
};
