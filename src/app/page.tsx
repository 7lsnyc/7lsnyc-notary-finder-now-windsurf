'use client';

import { useRouter } from 'next/navigation';
import { SearchForm } from '../design-system/components/molecules/SearchForm';

export default function Home() {
  const router = useRouter();

  const handleSearch = (location: string, service: string) => {
    if (location) {
      const params = new URLSearchParams();
      params.set('location', location);
      if (service) params.set('service', service);
      router.push(`/notaries?${params.toString()}`);
    }
  };

  return (
    <div className="min-h-screen bg-brand-primary">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center text-text-light">
        <h1 className="text-[30px] md:text-[40px] font-bold mb-4 font-poppins leading-tight">
          Find a Qualified Notary Near You — Now!
        </h1>
        
        <p className="text-xl mb-8 font-inter">
          Connect with mobile, 24-hour, and free notary services in your area instantly.
        </p>
        
        <SearchForm onSubmit={handleSearch} />
      </div>
    </div>
  );
}