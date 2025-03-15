export const tokens = {
  colors: {
    primary: '#007BFF',
    secondary: '#E6F0FA',
    accent: '#F5A623',
    text: {
      dark: '#333333',
      light: '#FFFFFF',
    },
    gray: '#CCCCCC',
    success: '#28A745',
  },
  typography: {
    fonts: {
      heading: 'var(--font-poppins)',
      body: 'var(--font-inter)',
    },
    sizes: {
      h1: '36px',
      h2: '24px',
      h3: '18px',
      body: '14px',
      small: '12px',
    },
    weights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
  },
  spacing: {
    section: '20px',
    component: '10px',
    card: '15px',
  },
  borderRadius: '8px',
  shadows: {
    card: '0 2px 4px rgba(0,0,0,0.1)',
  },
  buttons: {
    height: {
      default: '40px',
      large: '50px',
    },
    width: {
      default: '100px',
      large: '200px',
    },
  },
} as const;
