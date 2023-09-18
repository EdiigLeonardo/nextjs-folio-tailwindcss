module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'md-max': { 'max': '850px' }, // Define the custom breakpoint here
      },
      colors: {
        'primary-color': '#4571BD',
        'secondary-color': '#1A073A',
        'tertiary-color': '#ecf0f3',
      },
    },
  },
  plugins: [],
};

