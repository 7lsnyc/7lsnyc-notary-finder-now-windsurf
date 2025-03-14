 // src/app/page.tsx
import { fetchNotaries } from '@/lib/data/notaries';
import HeroBanner from '@/components/home/HeroBanner';
import TopRatedNotaries from '@/components/home/TopRatedNotaries';
import ValueProposition from '@/components/home/ValueProposition';

export default async function Home() {
  try {
    const result = await fetchNotaries({}, 3, 0); // Limit to 3 for homepage
    console.log('fetchNotaries result:', result); // Debug log
    const notaries = result?.data ?? [];
    const total = result?.total ?? 0;

    if (!notaries || notaries.length === 0) {
      console.warn('No notaries found or data is invalid:', { total });
      return (
        <div className="bg-background">
          <HeroBanner />
          <section className="py-10 px-4 text-center">
            <p className="text-text-dark">No top-rated notaries available at this time.</p>
          </section>
          <ValueProposition />
        </div>
      );
    }

    return (
      <div className="bg-background">
        <HeroBanner />
        <TopRatedNotaries notaries={notaries} />
        <ValueProposition />
      </div>
    );
  } catch (error) {
    console.error('Error fetching notaries:', error);
    return (
      <div className="bg-background">
        <HeroBanner />
        <section className="py-10 px-4 text-center">
          <p className="text-text-dark">Error loading notaries. Please try again later.</p>
        </section>
        <ValueProposition />
      </div>
    );
  }
}