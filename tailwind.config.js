const { generateTailwindConfig } = require('./src/design-system/config/utils/tailwindConfig');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',  // This will catch all files under src
  ],
  ...generateTailwindConfig(),
};