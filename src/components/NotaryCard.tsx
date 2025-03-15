'use client';

import { StarIcon, MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { Notary } from '@/types/notary';

interface NotaryCardProps {
  notary: Notary;
}

export default function NotaryCard({ notary }: NotaryCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i}>
      {i < Math.floor(notary.rating) ? (
        <StarIconSolid className="icon-sm text-primary" />
      ) : (
        <StarIcon className="icon-sm text-text-light" />
      )}
    </span>
  ));

  return (
    <div className="card">
      <div className="card-body">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">{notary.name}</h3>
            <div className="flex items-center gap-1 mb-2">
              {stars}
              <span className="text-sm text-text-light ml-2">
                ({notary.reviewCount} reviews)
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {notary.isAvailableNow && (
              <span className="badge-success">
                <ClockIcon className="icon-sm mr-1 inline" />
                Available Now
              </span>
            )}
            {notary.acceptsOnlineBooking && (
              <span className="badge-neutral">Online Booking</span>
            )}
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-text">
            <MapPinIcon className="icon-sm text-text-light" />
            <span>{notary.city}, {notary.state}</span>
          </div>
          {notary.phone && (
            <div className="flex items-center gap-2 text-text">
              <PhoneIcon className="icon-sm text-text-light" />
              <span>{notary.phone}</span>
            </div>
          )}
          {notary.email && (
            <div className="flex items-center gap-2 text-text">
              <EnvelopeIcon className="icon-sm text-text-light" />
              <span>{notary.email}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-text">
            <span className="text-text-light">Starting at ${notary.startingPrice}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {notary.services.map((service) => (
            <span key={service} className="badge-primary">
              {service.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {notary.phone && (
            <a
              href={`tel:${notary.phone}`}
              className="btn-primary flex-1 flex items-center justify-center"
            >
              <PhoneIcon className="icon-sm mr-2" />
              Call
            </a>
          )}
          {notary.email && (
            <a
              href={`mailto:${notary.email}`}
              className="btn-secondary flex-1 flex items-center justify-center"
            >
              <EnvelopeIcon className="icon-sm mr-2" />
              Email
            </a>
          )}
        </div>
      </div>
    </div>
  );
}