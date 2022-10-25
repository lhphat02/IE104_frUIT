module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'prim-dark': '#24252D',
        'prim-gray-1': '#E3E1E3',
        'prim-gray-2': '#888888',
        'prim-gray-3': '#4F4F4F',
        'prim-black-1': '#2D2E36',
        'prim-black-2': '#1B1A21',
        'prim-black-3': '#2A2D3A',
        'prim-black-4': '#24252D',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};