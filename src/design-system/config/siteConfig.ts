import { SiteConfig, SiteConfigSchema } from './types/config';

export const siteConfig: SiteConfig = {
  site: {
    name: 'Notary Finder Now',
    serviceType: 'notaries',
    domain: 'https://notaryfindernow.com',
  },
  business: {
    serviceArea: 'NYC',
    contactEmail: 'contact@notaryfindernow.com',
    phoneNumber: '(212) 555-0123',
  },
  features: {
    enableGeolocation: true,
    enableBooking: true,
    enableReviews: true,
  },
};

// Validate configuration at runtime
SiteConfigSchema.parse(siteConfig);

export default siteConfig;
