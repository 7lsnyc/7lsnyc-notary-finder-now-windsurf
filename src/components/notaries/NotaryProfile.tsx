// src/components/notaries/NotaryProfile.tsx
import { Notary } from '@/types/notary';
import Image from 'next/image';

export default function NotaryProfile({ notary }: { notary: Notary }) {
  if (!notary) {
    return <div>Notary not found</div>;
  }

  return (
    <div className="py-10 px-4 max-w-4xl mx-auto">
      <div className="flex items-center mb-4">
        {notary.profile_image_url && (
          <Image
            src={notary.profile_image_url}
            alt={`${notary.name}'s profile`}
            width={64} // Default width in pixels
            height={64} // Default height in pixels
            className="rounded-full object-cover mr-4"
            priority={false} // Set to true for above-the-fold images
            loading="lazy" // Lazy loads the image
          />
        )}
        <div>
          <h1 className="text-3xl font-bold">{notary.name}</h1>
          <div className="flex items-center">
            <span className="text-yellow-400">{'★'.repeat(Math.round(notary.rating || 0))}</span>
            <span className="ml-2">({notary.review_count || 0} reviews)</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-2">About</h2>
          <p className="mb-4">{notary.about || 'No description available'}</p>
          <h2 className="text-xl font-bold mb-2">Services</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {notary.services?.map((service) => (
              <span key={service} className="bg-gray-200 text-gray-700 px-3 py-1 rounded">{service}</span>
            )) || <p>No services listed</p>}
          </div>
          <h2 className="text-xl font-bold mb-2">Languages</h2>
          <p className="mb-4">{notary.languages?.join(', ') || 'N/A'}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Contact Information</h2>
          <p className="mb-2">{notary.address}, {notary.city}, {notary.state} {notary.zip}</p>
          {notary.phone && (
            <p className="mb-2">
              <a href={`tel:${notary.phone}`} className="text-primary hover:underline">{notary.phone}</a>
            </p>
          )}
          {notary.email && (
            <p className="mb-2">
              <a href={`mailto:${notary.email}`} className="text-primary hover:underline">{notary.email}</a>
            </p>
          )}
          {notary.website && (
            <p className="mb-4">
              <a href={notary.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{notary.website}</a>
            </p>
          )}
          <h2 className="text-xl font-bold mb-2">Business Hours</h2>
          <p className="mb-4">{notary.is_available_now ? 'Available Now' : 'Not Available'}</p>
          <h2 className="text-xl font-bold mb-2">Base Fee</h2>
          <p className="mb-4">${notary.starting_price || 0}</p>
          <div className="flex space-x-4">
            {notary.phone && (
              <a href={`tel:${notary.phone}`} className="bg-primary text-white px-4 py-2 rounded">Call Now</a>
            )}
            {notary.email && (
              <a href={`mailto:${notary.email}`} className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Email</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}