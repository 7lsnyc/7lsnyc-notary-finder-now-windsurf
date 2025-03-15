import React from 'react';
import { twMerge } from 'tailwind-merge';
import { brandConfig } from '../../../config/brand';

type LogoVariant = keyof typeof brandConfig.logo.variants;

interface LogoProps {
  text?: string;
  icon?: React.ReactNode;
  variant?: LogoVariant;
  textColor?: string;
  iconColor?: string;
  className?: string;
}

const DefaultIcon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    data-testid="logo-icon"
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
);

export function Logo({ 
  text = brandConfig.name,
  icon,
  variant = 'default',
  textColor = brandConfig.logo.colors.text,
  iconColor = brandConfig.logo.colors.icon.foreground,
  className 
}: LogoProps) {
  const variantConfig = brandConfig.logo.variants[variant];

  return (
    <div 
      data-testid="logo"
      className={twMerge('flex items-center gap-2', className)}
    >
      <div 
        data-testid="logo-square"
        className={twMerge(
          variantConfig.iconSize,
          brandConfig.logo.colors.icon.background,
          'rounded-lg flex items-center justify-center'
        )}
      >
        {icon || <DefaultIcon className={iconColor} />}
      </div>
      <span 
        data-testid="logo-text"
        className={twMerge(
          'block font-inter font-bold leading-none',
          variantConfig.textSize,
          textColor
        )}
      >
        {text}
      </span>
    </div>
  );
}
