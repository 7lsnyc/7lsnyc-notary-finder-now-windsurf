 // src/app/notaries/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import NotaryCard from '@/components/notaries/NotaryCard';
import SearchForm from '@/components/search/SearchForm';
import Pagination from '@/components/ui/Pagination';
import { Notary } from '@/types/notary';

interface NotariesResponse {
  notaries: Notary[];
  total: number;
}

export default function NotariesPage() {
  const searchParams = useSearchParams();
  const [notaries, setNotaries] = useState<Notary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  const currentPage = Number(searchParams.get('page')) || 1;
  const itemsPerPage = 10;

  useEffect(() => {
    async function fetchNotaries() {
      try {
        setLoading(true);
        const params = new URLSearchParams(searchParams.toString());
        const response = await fetch(`/api/notaries?${params.toString()}`);
        if (!response.ok) throw new Error('Failed to fetch notaries');
        const data: NotariesResponse = await response.json();
        setNotaries(data.notaries);
        setTotalPages(Math.ceil(data.total / itemsPerPage));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchNotaries();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Search Form */}
      <div className="mb-8">
        <SearchForm />
      </div>

      {/* Results */}
      <div className="space-y-6">
        {notaries.map((notary) => (
          <NotaryCard key={notary.id} notary={notary} />
        ))}
        {notaries.length === 0 && (
          <p className="text-center text-gray-600">No notaries found matching your criteria.</p>
        )}
      </div>

      {/* Pagination */}
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
    </main>
  );
}