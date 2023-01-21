/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'white':'#FFFFFF',
      'blue': '#1943DC',
      'blue-black': '#020553',
      'sea-blue': '#D7E7FF',
      'light-blue': '#B8B6FF',
    },
    
    // fontFamily:{
    //   sans:['Graphik','sans-serif', 'Roboto','Arial,'],
    //   serif:['Merriweather','serif']
    // },
    fontSize:{
       'xl':'15px',
        '2xl':'19px',
        '3xl':'24px',
         '4xl':'34px',
          '5xl':'2.6rem',
          '6xl':'3.6rem',
          '7xl':'12px'
           
    },
    extend: {},
  },
  plugins: [],
}
