/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '350px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        helvetica_en: 'HelveticaEn',
        helvetica_ge: 'HelveticaGe',
        Montserrat: ['Montserrat'],
      },
      colors: {
        mainDark: '#11101A',
        mainDark2: '#222030',
        gray: '#6C757D',
        gray10: '#CED4DA',
        gray20: '#6C757D',
        beidge: '#DDCCAA',
        darkWhite: '#D9D9D9',
        red: '#E31221',
        redHover: '#b0101b',
        link: '#0D6EFD',
        green: '#198754',
      },
      backgroundImage: {
        gradient:
          'linear-gradient(180deg, #11101A 0%, #08080D 2%, rgba(0, 0, 0, 0) 30%)',
        gradient90deg:
          'linear-gradient(90deg, #11101A 0%, #08080D 4%, rgba(0, 0, 0, 0) 80%)',
      },
    },
  },
  plugins: [],
};
