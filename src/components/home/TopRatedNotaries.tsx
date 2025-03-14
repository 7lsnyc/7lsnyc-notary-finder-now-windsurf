// src/components/home/TopRatedNotaries.tsx
import { Notary } from '@/types/notary';
import NotaryCard from '@/components/notaries/NotaryCard';
import Link from 'next/link';

export default function TopRatedNotaries({ notaries }: { notaries: Notary[] }) {
  const placeholderLocation = '5th and Broadway, New York, NY 10092'; // Placeholder until geolocation
  if (!notaries || !Array.isArray(notaries)) {
    return (
      <section className="py-10 px-4 text-center">
        <p className="text-text-dark">No top-rated notaries available.</p>
      </section>
    );
  }
  return (
    <section className="py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-2 text-text-dark">
        Top-rated Notaries in your area
      </h2>
      <Link href={`/notaries?location=${encodeURIComponent(placeholderLocation)}`} className="block text-center text-primary hover:underline mb-6">
        {placeholderLocation}
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {notaries.map((notary) => (
          <NotaryCard key={notary.id} notary={notary} layout="horizontal" />
        ))}
      </div>
    </section>
  );
}