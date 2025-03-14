import { fetchNotaries } from '@/lib/data/notaries';
import NotaryCard from '@/components/NotaryCard';

export default async function Home() {
  const notaries = await fetchNotaries({}, 10, 0);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Notary Finder Now</h1>
      <div className="grid gap-4 mt-4">
        {notaries.map((notary) => (
          <NotaryCard key={notary.id} notary={notary} />
        ))}
      </div>
    </div>
  );
}