import HeroBanner from '@/components/home/HeroBanner';
import TopRatedNotaries from '@/components/home/TopRatedNotaries';
import { getSupabaseClient } from '@/lib/supabase';

async function getTopNotaries() {
  const supabase = getSupabaseClient();
  const { data } = await supabase
    .from('notaries')
    .select('*')
    .order('rating', { ascending: false })
    .order('review_count', { ascending: false })
    .limit(3);
  
  return data || [];
}

export default async function Home() {
  const notaries = await getTopNotaries();

  return (
    <main className="min-h-screen bg-gray-50">
      <HeroBanner />
      <TopRatedNotaries notaries={notaries} />
    </main>
  );
}

// Revalidate homepage once per day
export const revalidate = 86400;