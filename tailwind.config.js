/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/design-system/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4AC7',
        secondary: '#E6F0FA',
        accent: '#F97315',
        text: {
          dark: '#333333',
          light: '#FFFFFF',
        },
        footer: {
          bg: '#1F2937',
          text: '#9CA3AF',
        },
        gray: '#CCCCCC',
        success: '#28A745',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        inter: ['var(--font-inter)'],
      },
      fontSize: {
        h1: '36px',
        h2: '24px',
        h3: '18px',
        body: '14px',
        small: '12px',
      },
      spacing: {
        section: '20px',
        component: '10px',
        card: '15px',
      },
      borderRadius: {
        DEFAULT: '8px',
      },
      boxShadow: {
        card: '0 2px 4px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}