import { Inter, Poppins } from 'next/font/google';
import { Header } from '@/design-system/components/molecules/Header';
import { generateMetadata } from './metadata';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['700'],  // Bold for headers per PRD
  variable: '--font-poppins',
});

// Only navigation items specified in PRD
const navigation = [
  { label: 'Find a Notary', href: '/notaries' },
  { label: 'Services', href: '/services' },
];

export { generateMetadata as generateMetadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${poppins.variable}`}>
      <body className="text-[#333333] text-[14px]"> {/* PRD text color and size */}
        <Header
          navigation={navigation}
          brandName="Notary Finder Now"
        />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}