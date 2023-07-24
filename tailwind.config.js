/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        xs: '389px',
        sm: '640px',
        md: '820px',
      },
        colors: {
        primary: {
          bg: 'rgb(17, 17, 17)',
          color: 'rgb(115, 115, 115)',
        },
        secondary: {
          bg: 'rgb(23, 23, 23)',
          color: 'rgb(255, 255, 255)',
        },
        tertiary: {
          color: 'rgb(51, 65, 85)',
          bg: 'rgb(203, 213, 225)',
        },
      },
      inset: {
        'ball-1/5': '20%',
      },
    },
    fontFamily: {
      primary: ['Montserrat'],
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
