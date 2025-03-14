// src/app/page.tsx
import { fetchNotaries } from '@/lib/data/notaries';
import NotaryCard from '@/components/NotaryCard';

export default async function Home() {
  const notaries = await fetchNotaries({}, 10, 0);
  return (
    <div className="min-h-screen bg-background p-4">
      <h1 className="text-2xl font-bold text-text-dark text-center mb-4">Notary Finder Now</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {notaries.map((notary) => (
          <NotaryCard key={notary.id} notary={notary} />
        ))}
      </div>
    </div>
  );
}