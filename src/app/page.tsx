// src/app/page.tsx
import { fetchNotaries } from '@/lib/data/notaries';
import HeroBanner from '@/components/home/HeroBanner';
import TopRatedNotaries from '@/components/home/TopRatedNotaries';
import ValueProposition from '@/components/home/ValueProposition';

export default async function Home() {
  const { data: notaries } = await fetchNotaries({}, 3, 0); // Limit to 3 for homepage
  return (
    <div className="bg-background">
      <HeroBanner />
      <TopRatedNotaries notaries={notaries} />
      <ValueProposition />
    </div>
  );
}