import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface NotaryCardProps {
  name: string;
  imageUrl: string;
  rating: number;
  specialties: string[];
  className?: string;
}

export function NotaryCard({
  name,
  imageUrl,
  rating,
  specialties,
  className,
}: NotaryCardProps) {
  return (
    <div className={twMerge('rounded-[8px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] p-[10px] m-[15px] bg-white', className)}>
      <div className="flex items-center gap-[10px]">
        <Image
          src={imageUrl}
          alt={name}
          width={80}
          height={80}
          className="rounded-[8px]"
        />
        <div>
          <h2 className="font-poppins font-bold text-[18px] text-[#333333]">{name}</h2>
          <div className="text-[14px] font-inter text-[#333333]">
            <p>Rating: {rating}/5</p>
            <p>Specialties: {specialties.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
