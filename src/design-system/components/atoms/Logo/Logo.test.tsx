import { render, screen, cleanup } from '@testing-library/react';
import { Logo } from './Logo';
import { brandConfig } from '../../../config/brand';

describe('Logo', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders with default props', () => {
    render(<Logo />);
    
    const logo = screen.getByTestId('logo');
    expect(logo).toHaveClass('flex', 'items-center', 'gap-2');
    
    const logoSquare = screen.getByTestId('logo-square');
    expect(logoSquare).toHaveClass(
      'w-8',
      'h-8',
      'bg-[#2463EB]',
      'rounded-lg',
      'flex',
      'items-center',
      'justify-center',
      'order-first'
    );
    
    const brandText = screen.getByText('Notary Finder Now');
    expect(brandText).toHaveClass('font-inter', 'font-bold', 'text-[18px]');
  });

  it('accepts custom text', () => {
    render(<Logo text="Custom Brand" />);
    expect(screen.getByText('Custom Brand')).toBeInTheDocument();
  });

  it.each(Object.entries(brandConfig.logo.variants))('renders %s size variant correctly', (variant, config) => {
    render(<Logo variant={variant as keyof typeof brandConfig.logo.variants} />);
    expect(screen.getByTestId('logo-square')).toHaveClass(config.iconSize);
    expect(screen.getByTestId('logo-text')).toHaveClass(config.textSize);
  });

  it.each(Object.entries(brandConfig.logo.layout))('renders %s layout variant correctly', (layout, config) => {
    render(<Logo layout={layout as keyof typeof brandConfig.logo.layout} />);
    expect(screen.getByTestId('logo')).toHaveClass(config.container);
    expect(screen.getByTestId('logo-square')).toHaveClass(config.iconPosition);
  });

  it.each(Object.entries(brandConfig.logo.themes))('renders %s theme variant correctly', (theme, config) => {
    render(<Logo theme={theme as keyof typeof brandConfig.logo.themes} />);
    expect(screen.getByTestId('logo-square')).toHaveClass(config.icon.background);
    expect(screen.getByTestId('logo-icon')).toHaveClass(config.icon.foreground);
    expect(screen.getByTestId('logo-text')).toHaveClass(config.text);
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
