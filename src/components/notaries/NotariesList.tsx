'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import NotaryCard from '@/components/notaries/NotaryCard';
import Pagination from '@/components/ui/Pagination';
import { Notary } from '@/types/notary';

export default function NotariesList() {
  const searchParams = useSearchParams();
  const [notaries, setNotaries] = useState<Notary[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const currentPage = Number(searchParams.get('page')) || 1;
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchNotaries = async () => {
      try {
        const params = new URLSearchParams(searchParams.toString());
        params.set('per_page', String(itemsPerPage));
        
        const response = await fetch(`/api/notaries?${params.toString()}`);
        if (!response.ok) throw new Error('Failed to fetch notaries');
        
        const data = await response.json();
        setNotaries(data.notaries);
        setTotalPages(Math.ceil(data.total / itemsPerPage));
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load notaries');
        setNotaries([]);
        setTotalPages(1);
      }
    };

    fetchNotaries();
  }, [searchParams]);

  if (error) {
    return (
      <div className="text-center text-red-600 py-4">
        {error}
      </div>
    );
  }

  return (
    <div>
      <div className="space-y-6">
        {notaries.map((notary) => (
          <NotaryCard key={notary.id} notary={notary} />
        ))}
        {notaries.length === 0 && (
          <div className="text-center text-gray-600 py-4">
            No notaries found matching your criteria.
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            baseUrl="/notaries"
            searchParams={Object.fromEntries(searchParams.entries())}
          />
        </div>
      )}
    </div>
  );
}
