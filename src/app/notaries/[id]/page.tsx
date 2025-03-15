'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import NotaryProfile from '@/components/notaries/NotaryProfile';
import { Notary } from '@/types/notary';

export default function NotaryProfilePage() {
  const { id } = useParams();
  const [notary, setNotary] = useState<Notary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotary() {
      try {
        const response = await fetch(`/api/notaries/${id}`);
        if (!response.ok) throw new Error('Notary not found');
        const data = await response.json();
        setNotary(data);
      } catch (error) {
        console.error('Error fetching notary:', error);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchNotary();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <p>Loading...</p>
      </div>
    );
  }

  if (!notary) {
    return (
      <div className="container mx-auto py-8">
        <p>Notary not found</p>
      </div>
    );
  }

  return <NotaryProfile notary={notary} />;
}
