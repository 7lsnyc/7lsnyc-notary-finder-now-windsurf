// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Notary Finder Now',
  description: 'Find a qualified notary near you now!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}