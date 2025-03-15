 // src/app/notaries/page.tsx
'use client';

import { Suspense } from 'react';
import SearchForm from '@/components/search/SearchForm';
import NotariesList from '@/components/notaries/NotariesList';

// Keep page simple as per PRD requirements
export default function NotariesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <SearchForm />
        <div className="mt-8">
          <Suspense fallback={
            <div className="text-center text-gray-600">
              Loading notaries...
            </div>
          }>
            <NotariesList />
          </Suspense>
        </div>
      </div>
    </main>
  );
}