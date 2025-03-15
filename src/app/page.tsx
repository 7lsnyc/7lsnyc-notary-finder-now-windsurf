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
    <div className="min-h-screen bg-blue-600">
      <div className="max-w-3xl mx-auto px-4 py-20 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Find a Qualified Notary Near<br />You — Now!
        </h1>
        <p className="text-xl mb-8">
          Connect with mobile, 24-hour, and free notary services in your area instantly.
        </p>
        
        <form onSubmit={handleSearch} className="bg-white rounded-lg p-1 flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 px-3">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <input
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 py-2 focus:outline-none"
              required
            />
          </div>
          <select 
            className="px-3 py-2 border-l text-gray-600 focus:outline-none bg-transparent"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select service type</option>
            <option value="mobile">Mobile Notary</option>
            <option value="remote">Remote Notary</option>
            <option value="office">Office Location</option>
          </select>
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
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