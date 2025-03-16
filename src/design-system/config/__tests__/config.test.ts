import { SiteConfigSchema, ThemeConfigSchema } from '../types/config';
import siteConfig from '../siteConfig';
import themeConfig from '../themeConfig';
import { generateTailwindConfig } from '../utils/tailwindConfig';

describe('Configuration System', () => {
  describe('Site Configuration', () => {
    it('validates correct site configuration', () => {
      expect(() => SiteConfigSchema.parse(siteConfig)).not.toThrow();
    });

    it('validates site configuration structure', () => {
      const invalidConfig = {
        ...siteConfig,
        site: {
          ...siteConfig.site,
          domain: 'invalid-url', // Invalid URL format
        },
      };
      expect(() => SiteConfigSchema.parse(invalidConfig)).toThrow();
    });

    it('contains required business information', () => {
      expect(siteConfig.business).toEqual({
        serviceArea: 'NYC',
        contactEmail: 'contact@notaryfindernow.com',
        phoneNumber: '(212) 555-0123',
      });
    });

    it('has feature flags defined', () => {
      expect(siteConfig.features).toHaveProperty('enableGeolocation');
      expect(siteConfig.features).toHaveProperty('enableBooking');
      expect(siteConfig.features).toHaveProperty('enableReviews');
    });
  });

  describe('Theme Configuration', () => {
    it('validates correct theme configuration', () => {
      expect(() => ThemeConfigSchema.parse(themeConfig)).not.toThrow();
    });

    it('contains all required color definitions', () => {
      expect(themeConfig.colors.brand).toHaveProperty('primary');
      expect(themeConfig.colors.brand).toHaveProperty('secondary');
      expect(themeConfig.colors.brand).toHaveProperty('accent');
    });

    it('contains typography settings', () => {
      expect(themeConfig.typography).toEqual({
        primary: 'Inter',
        secondary: 'Poppins',
      });
    });

    it('contains spacing definitions', () => {
      expect(themeConfig.spacing).toHaveProperty('container');
      expect(themeConfig.spacing).toHaveProperty('section');
    });
  });

  describe('Tailwind Configuration', () => {
    const tailwindConfig = generateTailwindConfig();

    it('generates valid Tailwind theme configuration', () => {
      expect(tailwindConfig).toHaveProperty('theme');
      expect(tailwindConfig.theme).toHaveProperty('extend');
    });

    it('maps theme colors to Tailwind configuration', () => {
      const { colors } = tailwindConfig.theme.extend;
      expect(colors.primary).toBe(themeConfig.colors.brand.primary);
      expect(colors.secondary).toBe(themeConfig.colors.brand.secondary);
      expect(colors.accent).toBe(themeConfig.colors.brand.accent);
    });

    it('maps typography settings to Tailwind configuration', () => {
      const { fontFamily } = tailwindConfig.theme.extend;
      expect(fontFamily.primary[0]).toBe('var(--font-inter)');
      expect(fontFamily.secondary[0]).toBe('var(--font-poppins)');
    });

    it('maps spacing settings to Tailwind configuration', () => {
      const { maxWidth, spacing } = tailwindConfig.theme.extend;
      expect(maxWidth.container).toBe(themeConfig.spacing.container);
      expect(spacing.section).toBe(themeConfig.spacing.section);
    });
  });
});
