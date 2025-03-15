'use client';

import { useState, useEffect } from 'react';
import { getSupabaseClient } from '@/lib/supabase';

interface Notary {
  id: string;
  name: string;
  city: string;
  state: string;
  services: string[];
  rating: number;
  review_count: number;
}

interface NotariesListProps {
  city?: string;
  state?: string;
  services?: string[];
}

export default function NotariesList({ city, state, services }: NotariesListProps) {
  const [notaries, setNotaries] = useState<Notary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNotaries() {
      try {
        setLoading(true);
        setError(null);

        const searchParams = new URLSearchParams();
        if (city) searchParams.set('city', city);
        if (state) searchParams.set('state', state);
        if (services?.length) searchParams.set('services', services.join(','));

        const response = await fetch(`/api/notaries?${searchParams.toString()}`);
        if (!response.ok) throw new Error('Failed to fetch notaries');
        
        const data = await response.json();
        setNotaries(data.notaries);
      } catch (err) {
        setError('Error loading notaries. Please try again.');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchNotaries();
  }, [city, state, services]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!notaries.length) return <div>No notaries found.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notaries.map((notary) => (
        <div key={notary.id} className="p-4 border rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">{notary.name}</h3>
          <p>{notary.city}, {notary.state}</p>
          <p>Rating: {notary.rating} ({notary.review_count} reviews)</p>
          <div className="mt-2">
            <p className="text-sm text-gray-600">Services:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {notary.services?.map((service) => (
                <span key={service} className="px-2 py-1 text-xs bg-gray-100 rounded">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
