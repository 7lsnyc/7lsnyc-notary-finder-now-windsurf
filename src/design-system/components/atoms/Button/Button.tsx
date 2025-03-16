import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text' | 'cta';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const variants = {
  primary: 'bg-brand-primary text-white hover:bg-brand-primary/90',
  secondary: 'bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90',
  text: 'text-text-dark hover:text-brand-primary',
  cta: 'bg-brand-accent text-white hover:bg-brand-accent/90',
};

const sizes = {
  small: 'h-8 px-3 text-sm',
  medium: 'h-10 px-4 text-base',
  large: 'h-12 px-6 text-lg',
};

export function Button({ 
  variant = 'primary',
  size = 'medium',
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        'rounded font-inter transition-colors',
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
