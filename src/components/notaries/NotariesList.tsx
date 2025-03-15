'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Notary {
  id: string;
  name: string;
  city: string;
  state: string;
  services: string[];
  rating: number;
  review_count: number;
  profile_image_url?: string;
}

interface NotariesListProps {
  searchParams?: {
    city?: string;
    state?: string;
    service?: string;
  };
}

export default function NotariesList({ searchParams }: NotariesListProps) {
  const [notaries, setNotaries] = useState<Notary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNotaries() {
      try {
        let query = supabase.from('notaries').select('*');

        if (searchParams?.city) {
          query = query.ilike('city', `%${searchParams.city}%`);
        }
        if (searchParams?.state) {
          query = query.ilike('state', `%${searchParams.state}%`);
        }
        if (searchParams?.service) {
          query = query.contains('services', [searchParams.service]);
        }

        const { data, error } = await query.limit(20);

        if (error) throw error;
        setNotaries(data || []);
      } catch (err) {
        setError('Failed to fetch notaries');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchNotaries();
  }, [searchParams]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (notaries.length === 0) return <div>No notaries found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notaries.map((notary) => (
        <div key={notary.id} className="p-4 border rounded-lg shadow">
          <h3 className="text-lg font-semibold">{notary.name}</h3>
          <p>{notary.city}, {notary.state}</p>
          <div className="mt-2">
            <span className="font-medium">Rating: {notary.rating}</span>
            <span className="ml-2 text-sm text-gray-600">({notary.review_count} reviews)</span>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            {notary.services.join(', ')}
          </div>
        </div>
      ))}
    </div>
  );
}
