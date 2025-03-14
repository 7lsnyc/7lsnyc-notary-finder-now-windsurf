// src/components/NotaryCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/solid';
import { Notary } from '@/types/notary';
import { formatCurrency } from '@/utils/format';

interface NotaryCardProps {
  notary: Notary;
  showActions?: boolean;
}

export default function NotaryCard({ notary, showActions = true }: NotaryCardProps) {
  const {
    id,
    name,
    profile_image_url,
    rating,
    review_count,
    city,
    state,
    phone,
    email,
    is_available_now,
    starting_price,
    specialized_services,
  } = notary;

  // Helper function to get service badges
  const getServiceBadges = () => {
    const badges = [];
    if (specialized_services?.includes('mobile')) {
      badges.push('Mobile');
    }
    if (specialized_services?.includes('24_7')) {
      badges.push('24/7');
    }
    if (starting_price === 0) {
      badges.push('Free Service Available');
    }
    return badges;
  };

  return (
    <div className="group relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start gap-4">
        {/* Profile Image */}
        <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={profile_image_url || '/images/default-notary.png'}
            alt={name}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>

        <div className="flex-1 min-w-0">
          {/* Name and Rating */}
          <Link href={`/notaries/${id}`} className="hover:text-primary">
            <h3 className="text-lg font-semibold text-text-dark truncate">{name}</h3>
          </Link>
          
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <span className="ml-1 text-sm font-medium text-text-dark">{rating}</span>
            </div>
            <span className="text-sm text-text-light">({review_count} reviews)</span>
          </div>

          {/* Service Badges */}
          <div className="flex flex-wrap gap-2 mt-2">
            {getServiceBadges().map((badge) => (
              <span
                key={badge}
                className="px-2 py-1 text-xs font-medium rounded-full bg-accent-light text-accent-dark"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Location and Availability */}
          <div className="mt-3 flex items-center gap-2 text-sm text-text-light">
            <MapPinIcon className="h-4 w-4" />
            <span>{city}, {state}</span>
            {is_available_now && (
              <span className="flex items-center text-green-600">
                <ClockIcon className="h-4 w-4 mr-1" />
                Available Now
              </span>
            )}
          </div>

          {/* Price */}
          <div className="mt-2 text-sm">
            <span className="font-medium text-text-dark">
              Starting at {formatCurrency(starting_price)}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      {showActions && (
        <div className="mt-4 flex gap-3 justify-end">
          {email && (
            <button
              onClick={() => window.location.href = `mailto:${email}`}
              className="flex items-center px-3 py-2 text-sm font-medium text-accent-dark hover:bg-accent-light rounded-lg transition-colors"
            >
              <EnvelopeIcon className="h-4 w-4 mr-2" />
              Email
            </button>
          )}
          {phone && (
            <button
              onClick={() => window.location.href = `tel:${phone}`}
              className="flex items-center px-3 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors"
            >
              <PhoneIcon className="h-4 w-4 mr-2" />
              Call Now
            </button>
          )}
        </div>
      )}
    </div>
  );
}