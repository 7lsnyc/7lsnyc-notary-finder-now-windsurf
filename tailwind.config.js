module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Scan all files in src/ for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Blue for headers/buttons
        accent: '#BFDBFE',  // Light blue for backgrounds
        'text-dark': '#1F2937', // Dark gray for text
        background: '#F9FAFB', // Light gray for body
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
