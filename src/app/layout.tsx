import './globals.css';

export const metadata = {
  title: 'NotaryFinderNow',
  description: 'Find top notaries near you',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
