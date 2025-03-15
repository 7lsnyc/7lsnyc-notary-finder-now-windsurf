'use client';

import SearchForm from '@/components/search/SearchForm';
import { MapPinIcon, ClockIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function HeroBanner() {
  return (
    <section className="bg-background-alt py-16">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find a Qualified Notary Near You
        </h1>
        <p className="text-xl text-text-light mb-8">
          Connect with mobile, 24-hour, and free notary services in your area instantly.
        </p>

        <div className="max-w-2xl mx-auto mb-8">
          <SearchForm />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="feature-badge">
            <MapPinIcon className="icon-sm mr-2" />
            Mobile Service
          </span>
          <span className="feature-badge">
            <ClockIcon className="icon-sm mr-2" />
            24/7 Availability
          </span>
          <span className="feature-badge">
            <DocumentTextIcon className="icon-sm mr-2" />
            Verified Professionals
          </span>
        </div>
      </div>
    </section>
  );
}