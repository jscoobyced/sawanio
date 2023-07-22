/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
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
