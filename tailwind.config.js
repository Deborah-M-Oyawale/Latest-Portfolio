/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius: {
      rb: "6.25rem",
    },
    extend: {
      // inset: {
      //   '45': 'col-span-5',
      //   '48': 'col-span-6',
      //   '7': 'col-span-1',
      // },

      width:{
        '9/20': '45%',
        '12/25': '48%',
        '1/14': '7%',
        '1/20': '5%',
      },

      spacing: {
        '45': '45%',
        '-10': '-10px',
        '500': '500px'

      },

      right:{
        'nothing': 0
      },

      height:{
        '300': "300px"
      },

      colors: {
        'grey': '#373b40',
      },
     
      zIndex: {
        zin: '100',
      },
    },
  },
  plugins: [],
}

