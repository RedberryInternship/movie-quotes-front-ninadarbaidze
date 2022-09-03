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
        gray15: '#EFEFEF',
        gray20: '#6C757D',
        gray25: '#9C9A9A',
        gray30: '#24222E',
        gray35: '#485563',
        gray50: '#24222F',
        beidge: '#DDCCAA',
        darkWhite: '#D9D9D9',
        red: '#E31221',
        red2: '#E33812',
        redHover: '#b0101b',
        link: '#0D6EFD',
        green: '#198754',
        yellow: '#EC9524',
        purple: '#422772',
        pink: '#F3426C',
      },
      backgroundImage: {
        gradient:
          'linear-gradient(180deg, #11101A 0%, #08080D 2%, rgba(0, 0, 0, 0) 30%)',
        gradient90deg:
          'linear-gradient(90deg, #11101A 0%, #08080D 4%, rgba(0, 0, 0, 0) 80%)',
        background:
          'linear-gradient(187.16deg, #181623 0.07%, #191725 51.65%, #0D0B14 98.75%)',
        feedBackground:
          'linear-gradient(187.16deg, #181623 0.07%, #191725 51.65%, #0D0B14 98.75%)',
        profileDialog:
          'linear-gradient(-50deg, rgba(239, 239, 239, 0.125) -1.81%, rgba(239, 239, 239, 0.00514528) 102.5%, rgba(1, 1, 1, 0.00260417) 102.51%, rgba(239, 239, 239, 0.95) 102.52%)',
        image: "url('/assets/images/profile.png')",
      },
    },
  },
  plugins: [],
};
