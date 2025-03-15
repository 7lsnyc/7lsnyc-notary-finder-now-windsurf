// src/app/page.tsx
import { fetchNotaries } from '@/lib/data/notaries';
import HeroBanner from '@/components/home/HeroBanner';
import TopRatedNotaries from '@/components/home/TopRatedNotaries';
import ValueProposition from '@/components/home/ValueProposition';

export default async function Home() {
  try {
    // Fetch top-rated notaries for the homepage
    const { data: notaries } = await fetchNotaries(
      { is_featured: true }, // Only fetch featured notaries for homepage
      3, // Limit to 3 for homepage display
      0
    );

    return (
      <main className="min-h-screen bg-background">
        {/* Hero Section with Search */}
        <HeroBanner />

        {/* Top Rated Notaries */}
        <TopRatedNotaries notaries={notaries} />

        {/* Value Proposition */}
        <ValueProposition />

        {/* Trust Indicators */}
        <section className="bg-background-alt py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '3,000+', label: 'Verified Notaries' },
                { number: '24/7', label: 'Service Availability' },
                { number: '15min', label: 'Average Response Time' },
                { number: '4.8/5', label: 'Average Rating' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-text-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  } catch (error) {
    console.error('Error fetching notaries:', error);
    return (
      <main className="min-h-screen bg-background">
        <HeroBanner />
        <div className="container mx-auto px-4 py-8">
          <p className="text-red-600 text-center">Error loading featured notaries. Please try again later.</p>
        </div>
      </main>
    );
  }
}