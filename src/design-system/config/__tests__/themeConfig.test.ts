import { ThemeConfigSchema } from '../types/config';
import { themeConfig } from '../themeConfig';

describe('Theme Configuration', () => {
  it('validates successfully with all required fields', () => {
    expect(() => ThemeConfigSchema.parse(themeConfig)).not.toThrow();
  });

  describe('color tokens', () => {
    it('has all required brand colors', () => {
      expect(themeConfig.colors.brand).toEqual({
        primary: '#1D4AC7',
        secondary: '#E6F0FA',
        accent: '#F97315',
      });
    });

    it('has all required text colors', () => {
      expect(themeConfig.colors.text).toEqual({
        primary: '#1F2937',
        secondary: '#9CA3AF',
        dark: '#1F2937',
        light: '#FFFFFF',
      });
    });

    it('has all required background colors', () => {
      expect(themeConfig.colors.background).toEqual({
        primary: '#FFFFFF',
        secondary: '#F3F4F6',
        dark: '#1F2937',
      });
    });
  });

  describe('typography settings', () => {
    it('has all required font families', () => {
      expect(themeConfig.typography).toMatchObject({
        primary: 'Inter',
        secondary: 'Poppins',
      });
    });

    it('has all required text sizes', () => {
      expect(themeConfig.typography).toMatchObject({
        body: {
          size: '16px',
          lineHeight: '24px',
        },
        small: {
          size: '14px',
          lineHeight: '20px',
        },
      });
    });
  });

  describe('button variants', () => {
    it('has primary button styles', () => {
      expect(themeConfig.variants.button.primary).toEqual({
        background: '#F97315',
        text: '#FFFFFF',
        hover: '#F97315/90',
        padding: '8px 16px',
        height: '40px',
        borderRadius: '8px',
      });
    });

    it('has secondary button styles', () => {
      expect(themeConfig.variants.button.secondary).toEqual({
        background: '#E6F0FA',
        text: '#1D4AC7',
        hover: '#1D4AC7/10',
        padding: '8px 16px',
        height: '40px',
        borderRadius: '8px',
      });
    });

    it('has text button styles', () => {
      expect(themeConfig.variants.button.text).toEqual({
        text: '#1F2937',
        hover: '#1D4AC7',
        padding: '8px',
      });
    });
  });

  describe('navigation variants', () => {
    it('has primary navigation styles', () => {
      expect(themeConfig.variants.navigation.primary).toEqual({
        text: '#1F2937',
        hover: '#1D4AC7',
        fontSize: '14px',
        fontFamily: 'Inter',
      });
    });

    it('has footer navigation styles', () => {
      expect(themeConfig.variants.navigation.footer).toEqual({
        text: '#9CA3AF',
        hover: '#1F2937',
        fontSize: '14px',
        fontFamily: 'Inter',
      });
    });
  });

  describe('schema validation', () => {
    it('rejects theme config with missing variants', () => {
      const invalidConfig = { ...themeConfig };
      delete (invalidConfig as any).variants;
      
      expect(() => ThemeConfigSchema.parse(invalidConfig)).toThrow();
    });

    it('rejects theme config with invalid button variant properties', () => {
      const invalidConfig = {
        ...themeConfig,
        variants: {
          ...themeConfig.variants,
          button: {
            ...themeConfig.variants.button,
            primary: {
              ...themeConfig.variants.button.primary,
              background: 123, // Should be string
            },
          },
        },
      };
      
      expect(() => ThemeConfigSchema.parse(invalidConfig)).toThrow();
    });

    it('rejects theme config with invalid navigation variant properties', () => {
      const invalidConfig = {
        ...themeConfig,
        variants: {
          ...themeConfig.variants,
          navigation: {
            ...themeConfig.variants.navigation,
            primary: {
              ...themeConfig.variants.navigation.primary,
              fontSize: 14, // Should be string
            },
          },
        },
      };
      
      expect(() => ThemeConfigSchema.parse(invalidConfig)).toThrow();
    });
  });
});
