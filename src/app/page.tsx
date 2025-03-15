'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      const params = new URLSearchParams();
      params.set('location', location.trim());
      if (service) params.set('service', service);
      router.push(`/notaries?${params.toString()}`);
    }
  };

  return (
    <div className="min-h-screen bg-primary">
      <div className="max-w-3xl mx-auto px-4 py-20 text-center text-text-light">
        <h1 className="text-4xl font-bold mb-4 font-poppins">
          Find a Qualified Notary Near<br />You — Now!
        </h1>
        
        <p className="text-xl mb-8 font-inter">
          Connect with mobile, 24-hour, and free notary services in your area instantly.
        </p>
        
        <form onSubmit={handleSearch} className="bg-white rounded p-1 flex items-center gap-2 shadow-card">
          <div className="flex-1 flex items-center gap-2 px-3">
            <svg className="w-5 h-5 text-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <input
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 py-2 focus:outline-none font-inter"
              required
              aria-label="Search by location"
            />
          </div>
          <select 
            className="px-3 py-2 border-l text-text-dark focus:outline-none bg-transparent font-inter"
            value={service}
            onChange={(e) => setService(e.target.value)}
            aria-label="Select notary service type"
          >
            <option value="">Select service type</option>
            <option value="mobile">Mobile Notary</option>
            <option value="remote">Remote Notary</option>
            <option value="office">Office Location</option>
          </select>
          <button 
            type="submit" 
            className="bg-primary text-text-light px-6 py-2 rounded hover:bg-primary/90 transition-colors font-poppins"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

// Revalidate homepage once per day
export const revalidate = 86400;