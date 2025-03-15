import React from 'react';
import { twMerge } from 'tailwind-merge';
import { brandConfig } from '../../../config/brand';

type LogoVariant = keyof typeof brandConfig.logo.variants;
type LogoLayout = keyof typeof brandConfig.logo.layout;
type LogoTheme = keyof typeof brandConfig.logo.themes;

interface LogoProps {
  text?: string;
  icon?: React.ReactNode;
  variant?: LogoVariant;
  layout?: LogoLayout;
  theme?: LogoTheme;
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
  layout = 'horizontal',
  theme = 'light',
  className 
}: LogoProps) {
  const variantConfig = brandConfig.logo.variants[variant];
  const layoutConfig = brandConfig.logo.layout[layout];
  const themeConfig = brandConfig.logo.themes[theme];

  return (
    <div 
      data-testid="logo"
      className={twMerge(layoutConfig.container, className)}
    >
      <div 
        data-testid="logo-square"
        className={twMerge(
          variantConfig.iconSize,
          themeConfig.icon.background,
          layoutConfig.iconPosition,
          'rounded-lg flex items-center justify-center'
        )}
      >
        {icon || <DefaultIcon className={themeConfig.icon.foreground} />}
      </div>
      <span 
        data-testid="logo-text"
        className={twMerge(
          'block font-inter font-bold leading-none',
          variantConfig.textSize,
          themeConfig.text
        )}
      >
        {text}
      </span>
    </div>
  );
}
