import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Header } from '../design-system/components/molecules/Header';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Notary Finder Now',
  description: 'Find qualified notaries in your area',
};

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Find a Notary', href: '/notaries' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Header navigation={navigation} />
        <main>{children}</main>
      </body>
    </html>
  );
}