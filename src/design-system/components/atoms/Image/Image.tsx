import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { twMerge } from 'tailwind-merge';

interface ImageProps extends Omit<NextImageProps, 'className'> {
  className?: string;
}

export function Image({ className, ...props }: ImageProps) {
  return (
    <div className={twMerge(
      'rounded-[8px]', // PRD border radius
      'shadow-[0_2px_4px_rgba(0,0,0,0.1)]', // PRD shadow
      className
    )}>
      <NextImage
        {...props}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
