/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        xs: '389px',
        sm: '640px',
        md: '820px',
        lg: '1000px'
      },
      colors: {
        primary: {
          bg: 'rgb(36, 37, 41)',
          color: 'rgb(255, 255, 255)',
        },
        secondary: {
          bg: 'rgb(255, 255, 255)',
          color: 'rgb(36, 37, 41)',
        },
      },
    },
    fontFamily: {
      primary: ['Montserrat'],
    },
    minWidth: {
      'card-w-full': '192px',
      'card-h-full': '342px',
      'card-w-mid': '104px',
      'card-h-mid': '180px',
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
