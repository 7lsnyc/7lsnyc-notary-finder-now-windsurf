import { render } from '@testing-library/react';
import { Logo } from './Logo';

describe('Logo', () => {
  it('renders logo with correct design elements', () => {
    const { container } = render(<Logo />);

    // Logo container
    const logoContainer = container.firstChild as HTMLElement;
    expect(logoContainer).toHaveClass('flex');
    expect(logoContainer).toHaveClass('items-center');
    expect(logoContainer).toHaveClass('gap-2');

    // Blue square container
    const logoSquare = container.querySelector('[data-testid="logo-square"]');
    expect(logoSquare).toBeInTheDocument();
    expect(logoSquare).toHaveClass('bg-primary');
    expect(logoSquare).toHaveClass('rounded-lg');
    expect(logoSquare).toHaveClass('w-8');
    expect(logoSquare).toHaveClass('h-8');

    // Shield icon
    const shieldIcon = logoSquare?.querySelector('svg');
    expect(shieldIcon).toBeInTheDocument();
    expect(shieldIcon).toHaveClass('text-white');
    expect(shieldIcon).toHaveAttribute('width', '20');
    expect(shieldIcon).toHaveAttribute('height', '20');

    // Brand text
    const brandText = container.querySelector('span');
    expect(brandText).toHaveClass('font-inter');
    expect(brandText).toHaveClass('font-bold');
    expect(brandText).toHaveClass('text-[18px]');
    expect(brandText).toHaveTextContent('Notary Finder Now');
  });

  it('accepts and applies custom className', () => {
    const customClass = 'custom-logo';
    const { container } = render(<Logo className={customClass} />);
    expect(container.firstChild).toHaveClass(customClass);
  });
});
