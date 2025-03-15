// src/components/notaries/NotaryProfile.tsx
import { Notary } from '@/types/notary';
import Image from 'next/image';

export default function NotaryProfile({ notary }: { notary: Notary }) {
  if (!notary) {
    return (
      <div className="container mx-auto py-8">
        <p>Notary not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      {/* Profile Header */}
      <div className="flex items-start gap-4 mb-6">
        {notary.profile_image_url && (
          <Image
            src={notary.profile_image_url}
            alt={`${notary.name}'s profile`}
            width={96}
            height={96}
            className="rounded-full"
            loading="lazy"
          />
        )}
        <div>
          <h1 className="text-2xl font-bold mb-2">{notary.name}</h1>
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-600">
              {notary.rating?.toFixed(1)} ★ ({notary.review_count} reviews)
            </span>
          </div>
          <p className="text-gray-600">
            {notary.city}, {notary.state}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">About</h2>
            <p className="text-gray-600">{notary.about || 'No description available.'}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Services</h2>
            <div className="flex flex-wrap gap-2">
              {notary.services?.map((service) => (
                <span key={service} className="feature-badge">{service}</span>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div>
          <section>
            <h2 className="text-xl font-semibold mb-3">Location</h2>
            <p className="text-gray-600">
              {notary.city}, {notary.state}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}