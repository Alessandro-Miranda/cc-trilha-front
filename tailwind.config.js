/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        red: '#e53939',
        white: '#ffffff',
      },
      fontFamily: {
        headings: ['Montserrat', 'sans-serif'],
        subHeading: ['Lora', 'sans-serif'],
        text: ['Hind Madurai', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

