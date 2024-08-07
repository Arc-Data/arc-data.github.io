import flowbite from 'flowbite-react/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: 'Montserrat',
        body: 'Inter',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      colors: {
        'text': {
          'default': '#dee6f2',
          50: '#edf1f8',
          100: '#dbe3f0',
          200: '#b6c8e2',
          300: '#92acd3',
          400: '#6d90c5',
          500: '#4975b6',
          600: '#3a5d92',
          700: '#2c466d',
          800: '#1d2f49',
          900: '#0f1724',
          950: '#070c12',
        },
        'background': {
          'default': '#0f161f',
          50: '#eef2f7',
          100: '#dde4ee',
          200: '#bacade',
          300: '#98afcd',
          400: '#7594bd',
          500: '#537aac',
          600: '#42618a',
          700: '#324967',
          800: '#213145',
          900: '#111822',
          950: '#080c11',
        },
        'primary': {
          'default': '#8bb5ea',
          50: '#e9f1fb',
          100: '#d4e4f7',
          200: '#a9c8ef',
          300: '#7eade7',
          400: '#5392df',
          500: '#2877d7',
          600: '#205fac',
          700: '#184781',
          800: '#102f56',
          900: '#08182b',
          950: '#040c16',
        },
        'secondary': {
          'default': '#104fa2',
          50: '#e8f1fd',
          100: '#d1e3fa',
          200: '#a2c6f6',
          300: '#74aaf1',
          400: '#458eed',
          500: '#1772e8',
          600: '#125bba',
          700: '#0e448b',
          800: '#092d5d',
          900: '#05172e',
          950: '#020b17',
        },
        'accent': {
          'default': '#1e7efa',
          50: '#e6f1fe',
          100: '#cde2fe',
          200: '#9bc5fd',
          300: '#69a9fc',
          400: '#378cfb',
          500: '#056ffa',
          600: '#0459c8',
          700: '#034396',
          800: '#022c64',
          900: '#011632',
          950: '#010b19',
        },
        },
    }
  },
  plugins: [
    flowbite.plugin(),
  ],
}

