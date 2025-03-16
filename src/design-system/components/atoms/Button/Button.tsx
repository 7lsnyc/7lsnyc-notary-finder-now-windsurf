import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'cta' | 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const variants = {
  cta: 'bg-accent text-white hover:bg-accent/90',
  primary: 'bg-brand-primary text-white hover:bg-brand-primary/90',
  secondary: 'bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90',
  text: 'text-text-dark hover:text-brand-primary',
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
        // Base styles
        'rounded font-inter transition-colors',
        // Variant styles
        variants[variant],
        // Size styles
        sizes[size],
        // Disabled styles
        disabled && 'opacity-50 cursor-not-allowed',
        // Custom classes
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
