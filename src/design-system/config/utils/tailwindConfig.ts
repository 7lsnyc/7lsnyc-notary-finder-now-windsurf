import { themeConfig } from '../themeConfig';

export const generateTailwindConfig = () => ({
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: {
          primary: themeConfig.colors.brand.primary,
          secondary: themeConfig.colors.brand.secondary,
          accent: themeConfig.colors.brand.accent,
        },
        // Text colors
        text: {
          dark: themeConfig.colors.text.dark,
          primary: themeConfig.colors.text.primary,
          secondary: themeConfig.colors.text.secondary,
          light: themeConfig.colors.text.light,
        },
        // Background colors
        background: {
          primary: themeConfig.colors.background.primary,
          secondary: themeConfig.colors.background.secondary,
          dark: themeConfig.colors.background.dark,
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
      maxWidth: {
        container: themeConfig.spacing.container,
      },
      spacing: {
        section: themeConfig.spacing.section,
        component: themeConfig.spacing.component,
      },
      height: {
        header: '70px',
      },
    },
  },
  plugins: [],
});
