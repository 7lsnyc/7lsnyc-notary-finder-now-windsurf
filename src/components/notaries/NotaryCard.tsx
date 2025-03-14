// src/components/notaries/NotaryCard.tsx
import { Notary } from '@/types/notary';
import Link from 'next/link';
import Image from 'next/image';

export default function NotaryCard({ notary, layout = 'vertical' }: { notary: Notary; layout?: 'horizontal' | 'vertical' }) {
  if (!notary || !notary.name) {
    return (
      <div className={`p-4 bg-accent rounded-lg shadow ${layout === 'horizontal' ? 'flex items-center' : ''}`}>
        <p className="text-text-dark">Invalid notary data</p>
      </div>
    );
  }

  return (
    <div className={`p-4 bg-accent rounded-lg shadow ${layout === 'horizontal' ? 'flex items-center space-x-4' : ''}`}>
      {notary.profile_image_url && (
        <Image
          src={notary.profile_image_url}
          alt={`${notary.name}'s profile`}
          width={64}
          height={64}
          className="rounded-full object-cover mr-4"
          loading="lazy"
        />
      )}
      <div className="flex-1">
        <div className="flex items-center mb-2">
          <h3 className="font-semibold text-text-dark">{notary.name}</h3>
          <span className="ml-2 text-yellow-400">{'★'.repeat(Math.round(notary.rating || 0))}</span>
          <span className="ml-1 text-gray-600">({notary.review_count || 0} reviews)</span>
        </div>
        <p className="text-text-dark">{notary.address}, {notary.city}, {notary.state} {notary.zip}</p>
        <p className="text-text-dark">{notary.languages?.join(', ') || 'N/A'}</p>
        <p className="text-text-dark">{notary.is_available_now ? 'Available Now' : 'Not Available'}</p>
        <p className="text-text-dark">{notary.services?.join(', ') || 'No services listed'}</p>
        <p className="text-text-dark font-bold mt-2">${notary.starting_price || 0} Base Fee</p>
        <div className="mt-4 flex space-x-2">
          <Link href={`/notaries/${notary.id}`} className="bg-gray-200 text-gray-700 px-4 py-2 rounded">View Profile</Link>
          <button className="bg-primary text-white px-4 py-2 rounded">Contact</button>
        </div>
      </div>
    </div>
  );
}