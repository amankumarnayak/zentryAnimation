/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
      zentry: ['zentry', 'sans-serif'],
      general: ['general', 'sans-serif'],
      'circular-web': ['Circular Web', 'sans-serif'],
      'robert-medium': ['Robert-Medium', 'sans-serif'],
      'robert-regular': ['Robert-Regular', 'sans-serif'], },
      colors: {
        blue: {
          50: '#dfdff0',
          75:  '#dfdff2',
          100: '#fof2fa',
          200: '#010101',
          300: '#4fb7dd',
        },
        violet: {
          300: '#5724ff',
        },
        yellow: {
          100: '#8e983f',
          300: '#edff66',
        }
      }
    },
  },
  plugins: [],
};

