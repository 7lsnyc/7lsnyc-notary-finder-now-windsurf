import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { NotaryServiceType, NotarySearchFilters } from '@/types/notary';

const SERVICE_TYPE_OPTIONS: { value: NotaryServiceType; label: string }[] = [
  { value: 'mobile', label: 'Mobile Notary' },
  { value: '24_7', label: '24/7 Availability' },
  { value: 'real_estate', label: 'Real Estate Closings' },
  { value: 'loan_signing', label: 'Loan Signings' },
  { value: 'apostille', label: 'Apostille Services' },
  { value: 'remote_online', label: 'Remote Online Notary' },
  { value: 'free_services', label: 'Free Services' },
];

interface SearchFormProps {
  initialFilters?: Partial<NotarySearchFilters>;
  variant?: 'hero' | 'compact';
}

export default function SearchForm({ initialFilters = {}, variant = 'hero' }: SearchFormProps) {
  const router = useRouter();
  const [filters, setFilters] = useState<Partial<NotarySearchFilters>>({
    city: '',
    service_type: undefined,
    ...initialFilters,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        searchParams.append(key, value.toString());
      }
    });

    router.push(`/notaries?${searchParams.toString()}`);
  };

  const isHero = variant === 'hero';

  return (
    <form 
      onSubmit={handleSubmit}
      className={`w-full ${isHero ? 'max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg' : 'flex gap-4'}`}
    >
      <div className={`flex flex-col ${isHero ? 'md:flex-row' : ''} gap-4`}>
        {/* Location Input */}
        <div className="flex-1">
          <label htmlFor="city" className="block text-sm font-medium text-text-light mb-1">
            Location
          </label>
          <input
            type="text"
            id="city"
            placeholder="Enter city or ZIP code"
            value={filters.city || ''}
            onChange={(e) => setFilters({ ...filters, city: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Service Type Dropdown */}
        <div className="flex-1">
          <label htmlFor="service_type" className="block text-sm font-medium text-text-light mb-1">
            Service Type
          </label>
          <select
            id="service_type"
            value={filters.service_type || ''}
            onChange={(e) => setFilters({ ...filters, service_type: e.target.value as NotaryServiceType })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">All Services</option>
            {SERVICE_TYPE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className={`flex items-center justify-center px-6 py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors
            ${isHero ? 'md:self-end md:mb-0' : ''}`}
        >
          <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
          Find Notaries
        </button>
      </div>

      {isHero && (
        <div className="mt-4 flex flex-wrap gap-3">
          {SERVICE_TYPE_OPTIONS.slice(0, 4).map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setFilters({ ...filters, service_type: option.value })}
              className="px-3 py-1 text-sm bg-accent-light text-accent-dark rounded-full hover:bg-accent hover:text-white transition-colors"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </form>
  );
}
