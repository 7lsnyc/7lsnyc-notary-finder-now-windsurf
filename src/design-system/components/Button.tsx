import { ReactNode } from 'react';
import { tokens } from '../tokens';

type ButtonVariant = 'primary' | 'accent' | 'ghost';
type ButtonSize = 'default' | 'large';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  'aria-label'?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-poppins transition-colors rounded';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    accent: 'bg-accent text-white hover:bg-accent/90',
    ghost: 'bg-gray text-text-dark hover:bg-gray/90',
  };

  const sizeStyles = {
    default: 'h-10 px-6 text-body',
    large: 'h-[50px] px-8 text-h3',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
