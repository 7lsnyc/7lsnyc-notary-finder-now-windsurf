'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import NotaryCard from '@/components/notaries/NotaryCard';
import Pagination from '@/components/ui/Pagination';
import { Notary } from '@/types/notary';

interface NotariesResponse {
  notaries: Notary[];
  total: number;
}

export default function NotariesList() {
  const searchParams = useSearchParams();
  const [notaries, setNotaries] = useState<Notary[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const currentPage = Number(searchParams.get('page')) || 1;
  const itemsPerPage = 10;

  useEffect(() => {
    async function fetchNotaries() {
      try {
        const params = new URLSearchParams(searchParams.toString());
        const response = await fetch(`/api/notaries?${params.toString()}`);
        if (!response.ok) throw new Error('Failed to fetch notaries');
        const data: NotariesResponse = await response.json();
        setNotaries(data.notaries);
        setTotalPages(Math.ceil(data.total / itemsPerPage));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      }
    }

    fetchNotaries();
  }, [searchParams]);

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  return (
    <div>
      <div className="space-y-6">
        {notaries.map((notary) => (
          <NotaryCard key={notary.id} notary={notary} />
        ))}
        {notaries.length === 0 && (
          <p className="text-center text-gray-600">No notaries found matching your criteria.</p>
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
