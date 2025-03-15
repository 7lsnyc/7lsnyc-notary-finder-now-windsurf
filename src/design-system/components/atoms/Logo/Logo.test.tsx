import { render, screen } from '@testing-library/react';
import { Logo } from './Logo';

describe('Logo', () => {
  it('renders with default props', () => {
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
    expect(brandText).toHaveClass('font-inter', 'font-bold', 'text-[20px]');
  });

  it('accepts custom text', () => {
    render(<Logo text="Custom Brand" />);
    expect(screen.getByText('Custom Brand')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Logo variant="small" />);
    expect(screen.getByTestId('logo-square')).toHaveClass('w-6', 'h-6');
    expect(screen.getByTestId('logo-text')).toHaveClass('text-[16px]');

    rerender(<Logo variant="large" />);
    expect(screen.getByTestId('logo-square')).toHaveClass('w-10', 'h-10');
    expect(screen.getByTestId('logo-text')).toHaveClass('text-[24px]');
  });

  it('applies custom colors', () => {
    render(<Logo textColor="text-blue-500" iconColor="text-red-500" />);
    expect(screen.getByTestId('logo-text')).toHaveClass('text-blue-500');
    expect(screen.getByTestId('logo-icon')).toHaveClass('text-red-500');
  });

  it('accepts custom icon component', () => {
    const CustomIcon = () => <div data-testid="custom-icon">Custom</div>;
    render(<Logo icon={<CustomIcon />} />);
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('accepts and merges additional className', () => {
    const testClass = 'test-class';
    render(<Logo className={testClass} />);
    expect(screen.getByTestId('logo')).toHaveClass(testClass, 'flex', 'items-center');
  });
});
