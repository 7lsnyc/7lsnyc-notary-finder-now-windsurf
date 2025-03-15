import { Metadata } from 'next';

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  path = '',
  noIndex = false,
}: GenerateMetadataProps = {}): Metadata {
  const baseTitle = 'Notary Finder Now';
  const baseDescription = 'Connect with mobile, 24-hour, and free notary services in your area instantly.';
  
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;
  const fullDescription = description || baseDescription;
  const url = `https://notaryfindernow.com${path}`;

  return {
    title: fullTitle,
    description: fullDescription,
    metadataBase: new URL('https://notaryfindernow.com'),
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: baseTitle,
      images: [{
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Notary Finder Now - Find qualified notaries near you',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
    },
    verification: {
      google: 'YOUR_GOOGLE_VERIFICATION_ID', // To be replaced with actual ID
    },
  };
}
