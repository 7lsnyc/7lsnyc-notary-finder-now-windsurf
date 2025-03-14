/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',   // Scan pages directory
    './src/components/**/*.{js,ts,jsx,tsx}', // Scan components directory
    './src/app/**/*.{js,ts,jsx,tsx}',     // Scan app directory (for Next.js 13+)
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Deep blue for headers/buttons
        accent: '#BFDBFE',  // Light blue for card backgrounds
        'text-dark': '#1F2937', // Dark gray for text
        background: '#F9FAFB', // Light gray for body
        'footer-dark': '#1F2937', // Dark gray for footer
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem', // Add custom spacing for larger sections
        '144': '36rem',
      },
      screens: {
        'xl': '1280px', // Extend breakpoints for larger screens
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};