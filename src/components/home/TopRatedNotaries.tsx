// src/components/home/TopRatedNotaries.tsx
import { Notary } from '@/types/notary';
import NotaryCard from '@/components/notaries/NotaryCard';

interface TopRatedNotariesProps {
  notaries: Notary[];
}

export default function TopRatedNotaries({ notaries }: TopRatedNotariesProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Top-Rated Notaries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {notaries.map(notary => (
            <NotaryCard
              key={notary.id}
              notary={notary}
            />
          ))}
        </div>
      </div>
    </section>
  );
}