/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Nunito Sans', 'serif'],
    },
    extend: {
      fontSize: {
        base: '16px',
      },
      screens: {
        sm: '385px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        primary: { DEFAULT: '#b06ab3', light: '#4568dc' },
        dark: '#16212C',
        text: '#555555',
        background: '#F6F6F6',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
};
