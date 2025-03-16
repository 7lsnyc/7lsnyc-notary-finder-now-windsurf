import { FormEvent } from 'react';
import { Button } from '../../atoms/Button';

interface SearchFormProps {
  onSubmit: (location: string, service: string) => void;
  locationPlaceholder?: string;
  isLoading?: boolean;
  error?: string;
  initialLocation?: string;
  initialService?: string;
  className?: string;
}

export function SearchForm({
  onSubmit,
  locationPlaceholder = 'Enter your location',
  isLoading = false,
  error,
  initialLocation = '',
  initialService = '',
  className = '',
}: SearchFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const location = formData.get('location')?.toString() || '';
    const service = formData.get('service')?.toString() || '';
    onSubmit(location, service);
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={`bg-white rounded shadow-card p-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 ${className}`}
    >
      <div className="flex-1 flex items-center gap-2 px-3">
        <svg className="w-5 h-5 text-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <input
          type="text"
          name="location"
          defaultValue={initialLocation}
          className="flex-1 py-2 focus:outline-none font-inter"
          required
          aria-label="Search by location"
          placeholder={locationPlaceholder}
          aria-invalid={!!error}
          aria-describedby={error ? 'search-error' : undefined}
        />
      </div>
      <select 
        name="service"
        defaultValue={initialService}
        className="px-3 py-2 border-l text-text-dark focus:outline-none bg-transparent font-inter"
        aria-label="Select notary service type"
      >
        <option value="">Select service type</option>
        <option value="mobile">Mobile</option>
        <option value="remote">Remote</option>
        <option value="24-7">24/7 Availability</option>
        <option value="free">Free Services</option>
      </select>
      <Button
        type="submit"
        disabled={isLoading}
        variant="primary"
        size="medium"
      >
        {isLoading ? 'Searching...' : 'Search'}
      </Button>
      {error && (
        <p
          id="search-error"
          className="mt-1 text-sm text-red-500 font-inter"
          role="alert"
        >
          {error}
        </p>
      )}
    </form>
  );
}
