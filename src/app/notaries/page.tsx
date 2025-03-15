 // src/app/notaries/page.tsx
'use client';

import { Suspense } from 'react';
import SearchForm from '@/components/search/SearchForm';
import NotariesList from '@/components/notaries/NotariesList';

// Keep page simple as per PRD requirements
export default function NotariesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <SearchForm />
      </div>

      <Suspense fallback={<div>Loading results...</div>}>
        <NotariesList />
      </Suspense>
    </main>
  );
}