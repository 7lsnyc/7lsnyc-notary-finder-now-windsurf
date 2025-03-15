import HeroBanner from '@/components/home/HeroBanner';
import TopRatedNotaries from '@/components/home/TopRatedNotaries';
import { supabase } from '@/lib/supabase';
import { Notary } from '@/types/notary';

export default async function Home() {
  // Fetch top 3 rated notaries for homepage
  const { data: notaries } = await supabase
    .from('notaries')
    .select('*')
    .order('rating', { ascending: false })
    .order('review_count', { ascending: false })
    .limit(3);

  return (
    <main>
      <HeroBanner />
      <TopRatedNotaries notaries={notaries || []} />
    </main>
  );
}

// Revalidate homepage once per day
export const revalidate = 86400;