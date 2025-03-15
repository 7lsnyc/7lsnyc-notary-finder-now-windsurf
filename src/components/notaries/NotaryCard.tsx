// src/components/notaries/NotaryCard.tsx
import { Notary } from '@/types/notary';
import Link from 'next/link';
import Image from 'next/image';

export default function NotaryCard({ notary }: { notary: Notary }) {
  if (!notary || !notary.name) {
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <p className="text-gray-700">Invalid notary data</p>
      </div>
    );
  }

  return (
    <Link href={`/notaries/${notary.id}`} className="block">
      <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
        <div className="flex items-start gap-4">
          {notary.profile_image_url && (
            <Image
              src={notary.profile_image_url}
              alt={`${notary.name}'s profile`}
              width={64}
              height={64}
              className="rounded-full"
              loading="lazy"
            />
          )}
          
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <h3 className="font-semibold text-gray-900">{notary.name}</h3>
              {notary.rating && (
                <span className="ml-2 text-sm text-gray-600">
                  {notary.rating.toFixed(1)} ★ ({notary.review_count} reviews)
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-2">
              {notary.city}, {notary.state}
            </p>

            {notary.services && notary.services.length > 0 && (
              <p className="text-gray-600 text-sm">
                Services: {notary.services.join(', ')}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}