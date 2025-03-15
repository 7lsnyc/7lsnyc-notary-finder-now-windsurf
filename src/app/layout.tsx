import { Inter, Poppins } from 'next/font/google';
import { Header } from '@/design-system/components/molecules/Header';
import { Footer } from '@/design-system/components/molecules/Footer';
import { Metadata } from 'next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Notary Finder Now',
  description: 'Find qualified notaries in your area offering mobile, 24-hour, and free services.',
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
      <body className="min-h-screen flex flex-col">
        <Header navigation={navigation} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}