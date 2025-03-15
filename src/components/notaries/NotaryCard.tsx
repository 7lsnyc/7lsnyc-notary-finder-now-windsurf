'use client';

import { Notary } from '@/types/notary';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';

interface NotaryCardProps {
  notary: Notary;
}

export default function NotaryCard({ notary }: NotaryCardProps) {
  return (
    <Link href={`/notaries/${notary.id}`}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{notary.name}</h3>
            <p className="text-gray-600">{notary.city}, {notary.state}</p>
          </div>
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <span className="ml-1 text-gray-700">{notary.rating}</span>
            <span className="ml-2 text-sm text-gray-500">({notary.review_count} reviews)</span>
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700">Services:</h4>
          <div className="mt-1 flex flex-wrap gap-2">
            {notary.services.map((service) => (
              <span
                key={service}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}