module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dashboard: {
          DEFAULT: '#5189C4',
          100: '#27378E',
        },
      },
      fontFamily: {
        primary: ['Titania', 'sans-serif'],
        secondary: 'Poppins, sans-serif',
        tertiary: 'Roboto, sans-serif',
      },
    },
  },
  plugins: [],
};
