
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/tw-elements/js/**/*.js",
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
  darkMode: "class",
  plugins: [require("tw-elements/plugin.cjs")]
};