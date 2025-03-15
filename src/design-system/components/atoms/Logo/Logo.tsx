import React from 'react';
import { twMerge } from 'tailwind-merge';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div 
      data-testid="logo"
      className={twMerge('flex items-center gap-2', className)}
    >
      <div 
        data-testid="logo-square"
        className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 12L11 15L16 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="block font-inter font-bold text-[20px] leading-none text-text-dark">
        Notary Finder Now
      </span>
    </div>
  );
}
