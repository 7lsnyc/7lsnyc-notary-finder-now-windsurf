// src/components/NotaryCard.tsx
import { Notary } from '@/types/notary';

export default function NotaryCard({ notary }: { notary: Notary }) {
  return (
    <div className="p-4 bg-accent rounded-lg shadow">
      <h3 className="font-semibold text-text-dark">{notary.name}</h3>
      <p className="text-text-dark">{notary.city}, {notary.state}</p>
      <p className="text-text-dark">{notary.phone ?? 'No phone available'}</p>
    </div>
  );
}