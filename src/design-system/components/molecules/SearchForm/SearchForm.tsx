import { FormEvent, useState } from 'react';
import { Button } from '../../atoms/Button';

interface SearchFormProps {
  onSubmit: (searchTerm: string) => void;
  placeholder?: string;
  isLoading?: boolean;
  error?: string;
  initialValue?: string;
}

export function SearchForm({
  onSubmit,
  placeholder = 'Search for notaries in your area...',
  isLoading = false,
  error,
  initialValue = '',
}: SearchFormProps) {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-4 px-4 md:px-6"
    >
      <div className="w-full flex flex-col sm:flex-row gap-4">
        <div className="w-full min-w-0">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={placeholder}
            className={`
              w-full px-4 py-2 rounded
              border ${error ? 'border-red-500' : 'border-text-secondary'}
              focus:border-primary focus:ring-2 focus:ring-primary/20
              font-inter text-text-dark placeholder:text-text-secondary
              outline-none transition-colors
              text-base sm:text-sm
            `}
            aria-label="Search"
            aria-invalid={!!error}
            aria-describedby={error ? 'search-error' : undefined}
          />
          {error && (
            <p
              id="search-error"
              className="mt-1 text-sm text-red-500 font-inter"
              role="alert"
            >
              {error}
            </p>
          )}
        </div>
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full sm:w-auto sm:self-end"
      >
        {isLoading ? 'Searching...' : 'Search'}
      </Button>
    </form>
  );
}
