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

    it('has required color properties', () => {
      expect(themeConfig.colors.brand.primary).toBeDefined();
      expect(themeConfig.colors.brand.secondary).toBeDefined();
      expect(themeConfig.colors.brand.accent).toBeDefined();
      expect(themeConfig.colors.text.dark).toBeDefined();
      expect(themeConfig.colors.text.primary).toBeDefined();
      expect(themeConfig.colors.text.secondary).toBeDefined();
    });

    it('has required spacing properties', () => {
      expect(themeConfig.spacing.container).toBeDefined();
      expect(themeConfig.spacing.section).toBeDefined();
      expect(themeConfig.spacing.component).toBeDefined();
    });

    it('contains typography settings', () => {
      expect(themeConfig.typography).toEqual({
        primary: 'Inter',
        secondary: 'Poppins',
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

  describe('Tailwind Configuration', () => {
    const tailwindConfig = generateTailwindConfig();

    it('extends theme configuration', () => {
      expect(tailwindConfig.theme.extend).toBeDefined();
      expect(tailwindConfig.theme.extend.colors).toBeDefined();
      expect(tailwindConfig.theme.extend.fontFamily).toBeDefined();
      expect(tailwindConfig.theme.extend.maxWidth).toBeDefined();
      expect(tailwindConfig.theme.extend.spacing).toBeDefined();
    });

    it('maps brand colors to Tailwind configuration', () => {
      const { colors } = tailwindConfig.theme.extend;
      expect(colors.brand.primary).toBe(themeConfig.colors.brand.primary);
      expect(colors.brand.secondary).toBe(themeConfig.colors.brand.secondary);
      expect(colors.brand.accent).toBe(themeConfig.colors.brand.accent);
    });

    it('maps text colors to Tailwind configuration', () => {
      const { colors } = tailwindConfig.theme.extend;
      expect(colors.text.dark).toBe(themeConfig.colors.text.dark);
      expect(colors.text.primary).toBe(themeConfig.colors.text.primary);
      expect(colors.text.secondary).toBe(themeConfig.colors.text.secondary);
    });

    it('maps spacing to Tailwind configuration', () => {
      const { spacing, maxWidth } = tailwindConfig.theme.extend;
      expect(spacing.section).toBe(themeConfig.spacing.section);
      expect(spacing.component).toBe(themeConfig.spacing.component);
      expect(maxWidth.container).toBe(themeConfig.spacing.container);
    });

    it('maps typography settings to Tailwind configuration', () => {
      const { fontFamily } = tailwindConfig.theme.extend;
      expect(fontFamily).toEqual({
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      });
    });
  });
});
