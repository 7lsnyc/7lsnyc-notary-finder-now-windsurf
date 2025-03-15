import { generateMetadata } from './metadata';

describe('Metadata Generation', () => {
  it('generates default metadata', () => {
    const metadata = generateMetadata();
    
    expect(metadata.title).toBe('Notary Finder Now');
    expect(metadata.description).toBe('Connect with mobile, 24-hour, and free notary services in your area instantly.');
    expect(metadata.metadataBase?.toString().replace(/\/$/, '')).toBe('https://notaryfindernow.com');
  });

  it('generates page-specific metadata', () => {
    const metadata = generateMetadata({
      title: 'Find Notaries in Denver',
      description: 'Connect with qualified notaries in Denver, CO',
      path: '/notaries/denver',
    });
    
    expect(metadata.title).toBe('Find Notaries in Denver | Notary Finder Now');
    expect(metadata.description).toBe('Connect with qualified notaries in Denver, CO');
    expect(metadata.alternates?.canonical).toBe('https://notaryfindernow.com/notaries/denver');
  });

  it('handles noIndex pages correctly', () => {
    const metadata = generateMetadata({ noIndex: true });
    
    expect(metadata.robots).toEqual({
      index: false,
      follow: false,
    });
  });

  it('generates consistent OpenGraph metadata', () => {
    const title = 'Mobile Notaries';
    const description = 'Find mobile notaries near you';
    const metadata = generateMetadata({ title, description });
    
    expect(metadata.openGraph?.title).toBe(`${title} | Notary Finder Now`);
    expect(metadata.openGraph?.description).toBe(description);
    expect(metadata.openGraph?.images).toEqual([{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Notary Finder Now - Find qualified notaries near you',
    }]);
  });
});
