import { ThemeConfig } from './types/config';

export const themeConfig: ThemeConfig = {
  colors: {
    brand: {
      primary: '#1D4AC7', // Deep blue - used for nav hover
      secondary: '#E6F0FA',
      accent: '#F97315', // Orange for CTA - per memory fc54e17b
    },
    text: {
      primary: '#1F2937', // Dark text for primary content
      secondary: '#9CA3AF',
      dark: '#1F2937', // Per memory ef3afadf - nav items
      light: '#FFFFFF', // For text on dark backgrounds
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#F3F4F6',
      dark: '#1F2937', // For dark sections
    },
  },
  typography: {
    primary: 'Inter', // Per memory fc54e17b - Logo font changed to Inter
    secondary: 'Poppins',
    body: {
      size: '16px',
      lineHeight: '24px',
    },
    small: {
      size: '14px', // Per memory e69200b3 - nav and CTA text size
      lineHeight: '20px',
    },
  },
  spacing: {
    container: '1280px',
    section: '64px',
    component: '16px',
  },
  variants: {
    button: {
      primary: {
        background: '#F97315', // Per memory fc54e17b - CTA color
        text: '#FFFFFF', // Per memory ef3afadf - CTA text color
        hover: '#F97315/90', // Per memory e69200b3 - hover:bg-accent/90
        padding: '8px 16px', // Per memory e69200b3 - px-4 py-2
        height: '40px',
        borderRadius: '8px', // Per memory e69200b3 - rounded
      },
      secondary: {
        background: '#E6F0FA',
        text: '#1D4AC7',
        hover: '#1D4AC7/10',
        padding: '8px 16px',
        height: '40px',
        borderRadius: '8px',
      },
      text: {
        text: '#1F2937',
        hover: '#1D4AC7',
        padding: '8px',
      },
    },
    navigation: {
      primary: {
        text: '#1F2937', // Per memory ef3afadf - text-text-dark
        hover: '#1D4AC7', // Per memory ef3afadf - hover:text-primary
        fontSize: '14px', // Per memory e69200b3 - text-[14px]
        fontFamily: 'Inter', // Per memory e69200b3 - font-inter
      },
      footer: {
        text: '#9CA3AF',
        hover: '#1F2937',
        fontSize: '14px',
        fontFamily: 'Inter',
      },
    },
  },
} as const;

export default themeConfig;
