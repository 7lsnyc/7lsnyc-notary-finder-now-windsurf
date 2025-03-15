// src/components/home/TopRatedNotaries.tsx
import { Notary } from '@/types/notary';
import NotaryCard from '@/components/NotaryCard';
import Link from 'next/link';
import { MapPinIcon } from '@heroicons/react/24/solid';

interface TopRatedNotariesProps {
  notaries: Notary[];
}

export default function TopRatedNotaries({ notaries }: TopRatedNotariesProps) {
  const placeholderLocation = '5th and Broadway, New York, NY 10092'; // Placeholder until geolocation

  if (!notaries?.length) {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-text-dark">
            Top-rated Notaries in your area
          </h2>
          <p className="text-text-light">
            No top-rated notaries available at this time.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-text-dark">
            Top-rated Notaries in your area
          </h2>
          <Link
            href={`/notaries?city=${encodeURIComponent(placeholderLocation)}`}
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            <MapPinIcon className="h-5 w-5 mr-2" />
            <span className="text-lg">{placeholderLocation}</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notaries.map((notary) => (
            <NotaryCard
              key={notary.id}
              notary={notary}
              showActions={false}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/notaries"
            className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
          >
            View All Notaries
          </Link>
        </div>
      </div>
    </section>
  );
}