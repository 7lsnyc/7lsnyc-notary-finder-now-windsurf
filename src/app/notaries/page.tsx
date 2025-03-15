'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function NotaryList() {
  const searchParams = useSearchParams();
  const location = searchParams.get('location');
  const service = searchParams.get('service');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-[30px] md:text-[40px] font-bold mb-4 font-poppins leading-tight">
        Notaries {location ? `in ${location}` : 'Near You'}
      </h1>
      
      {service && (
        <p className="text-text-dark mb-4 font-inter">
          Showing {service} notary services
        </p>
      )}
      
      <div className="grid gap-4">
        {/* Notary results will be added here */}
        <p className="text-text-dark font-inter">Loading notaries...</p>
      </div>
    </div>
  );
}

export default function NotariesPage() {
  return (
    <Suspense fallback={
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-[30px] md:text-[40px] font-bold mb-4 font-poppins leading-tight">
          Loading Notaries...
        </h1>
      </div>
    }>
      <NotaryList />
    </Suspense>
  );
}
