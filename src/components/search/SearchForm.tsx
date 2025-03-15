'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MapPinIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// Keep services simple as per PRD
const NOTARY_SERVICES = [
  'Mobile Notary',
  'Real Estate Closing',
  'Loan Signing',
  'General Notary'
];

export default function SearchForm() {
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (service) params.append('service', service);
    router.push(`/notaries?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Location */}
        <div className="flex-1">
          <label htmlFor="location" className="label">City or State</label>
          <div className="relative">
            <input
              id="location"
              type="text"
              className="input pl-10"
              placeholder="Enter city or state (e.g., San Francisco, CA)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <MapPinIcon className="icon-sm absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Service Type */}
        <div className="flex-1">
          <label htmlFor="service" className="label">Service Type</label>
          <select
            id="service"
            className="select"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">All Services</option>
            {NOTARY_SERVICES.map(service => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button type="submit" className="btn-primary">
            <MagnifyingGlassIcon className="icon-sm mr-2" />
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
