/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        black: '#09051A',
        black75: '#434749',
        black50: '#808080',
        light: '#F6F9FF',
        lightGray: '#E6E6E6',
        borderLight: '#ffffff33',
        yellow: '#FCD53A',
        blue: '#1C5CFF',
        lightPink: '#CF95FB',
        primary: {
          DEFAULT: '#048EFF',
          50: '#BCE1FF',
          100: '#A7D7FF',
          200: '#7EC5FF',
          300: '#56B3FF',
          400: '#2DA0FF',
          500: '#048EFF',
          600: '#0070CB',
          700: '#005193',
          800: '#00325B',
          900: '#030221'
        }
      },
      boxShadow: {
        primary:
          '0px 14.9572px 22.4358px -4.48716px rgba(0, 0, 0, 0.1), 0px 5.98288px 8.97432px -5.98288px rgba(0, 0, 0, 0.1)',
        primaryLg: '0px 16px 32px rgba(56, 56, 138, 0.12)',
        button: '0px 4px 48px rgba(4, 142, 255, 0.4)'
      },
      borderRadius: {
        '3xl': '2rem',
        '4xl': '2.5rem',
        '6xl': '3rem'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')]
};
