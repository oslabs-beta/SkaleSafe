/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/index.html', './client/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'light-grey': '#91A3B0',
      'primary-color': '#8DD9CC',
      'teal-blue': '#0A7E8C',
      'dark-grey': '#555555',
      'sapphire-blue': '#126180',
      'prussian-blue': '#003153',
      'fuzzy-wuzzy': '#CC7178',
      'off-white': '#e5e7eb',
      white: '#FFFFFF',
      black: '#000000',
      grey: '#6b7280',
      'light-blue': '#0EA8CF',
      pink: '#b784a7',
      purple: '#540E99',
      honeydew: '#F0FFF0',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        kubernetes: "url('./client/assets/kubernetes.jpg')",
      },
      height: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};
