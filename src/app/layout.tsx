// src/app/layout.tsx
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Notary Finder Now',
  description: 'Find a qualified notary near you now!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-text-dark">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}