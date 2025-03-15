import { render, screen } from '@testing-library/react';
import { Logo } from './Logo';

describe('Logo', () => {
  it('renders with correct styles', () => {
    render(<Logo />);
    
    const logo = screen.getByTestId('logo');
    expect(logo).toHaveClass('flex', 'items-center', 'gap-2');
    
    const logoSquare = screen.getByTestId('logo-square');
    expect(logoSquare).toHaveClass(
      'w-8',
      'h-8',
      'bg-primary',
      'rounded-lg',
      'flex',
      'items-center',
      'justify-center'
    );
    
    const brandText = screen.getByText('Notary Finder Now');
    expect(brandText).toHaveClass('font-inter');
    expect(brandText).toHaveClass('font-bold');
    expect(brandText).toHaveClass('text-[20px]');
  });

  it('accepts and applies additional className', () => {
    const testClass = 'test-class';
    render(<Logo className={testClass} />);
    
    const logo = screen.getByTestId('logo');
    expect(logo).toHaveClass(testClass);
  });
});
