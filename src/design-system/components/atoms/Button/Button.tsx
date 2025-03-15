import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'h-[40px]', // PRD button height
        'rounded-[8px]', // PRD border radius
        'bg-[#007BFF]', // PRD primary color
        'text-[14px]', // PRD body text size
        'font-inter', // PRD body font
        'text-white',
        'px-[10px]', // PRD component padding
        'hover:bg-[#007BFF]/90',
        'transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
