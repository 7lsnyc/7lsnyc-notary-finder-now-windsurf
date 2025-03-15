// src/app/notaries/[id]/page.tsx
import { notFound } from 'next/navigation';
import { getSupabaseClient } from '@/lib/supabase';

async function getNotaryById(id: string) {
  const supabase = getSupabaseClient();
  const { data: notary, error } = await supabase
    .from('notaries')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return notary;
}

export default async function NotaryPage({ params }: { params: { id: string } }) {
  const notary = await getNotaryById(params.id);

  if (!notary) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">{notary.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
              <p className="text-gray-600">{notary.city}, {notary.state}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Services</h2>
              <div className="flex flex-wrap gap-2">
                {notary.services?.map((service: string) => (
                  <span key={service} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {service}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-2">Reviews</h2>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{notary.rating}</span>
                <span className="text-gray-600">({notary.review_count} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Revalidate once per day
export const revalidate = 86400;