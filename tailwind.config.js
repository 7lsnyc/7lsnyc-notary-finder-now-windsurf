/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // Blue 600
          light: '#60a5fa',   // Blue 400
        },
        accent: {
          DEFAULT: '#f59e0b', // Amber 500
          light: '#fbbf24',   // Amber 400
        },
        text: {
          DEFAULT: '#1f2937', // Gray 800
          light: '#6b7280',   // Gray 500
        },
        background: {
          DEFAULT: '#ffffff', // White
          alt: '#f3f4f6',    // Gray 100
        },
      },
      boxShadow: {
        'card': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}