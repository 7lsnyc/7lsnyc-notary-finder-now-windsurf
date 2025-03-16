import { render, screen } from '@testing-library/react';
import { Logo } from '../Logo';
import { brandConfig } from '../../../config/brand';
import { siteConfig } from '../../../config/siteConfig';

describe('Logo', () => {
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

    const logoText = screen.getByTestId('logo-text');
    expect(logoText).toHaveClass('font-inter', 'font-bold', 'text-[18px]');
    expect(logoText).toHaveTextContent(siteConfig.site.name);
  });

  it('renders custom text', () => {
    const customText = 'Custom Logo Text';
    render(<Logo text={customText} />);
    expect(screen.getByTestId('logo-text')).toHaveTextContent(customText);
  });

  it('renders custom icon', () => {
    const CustomIcon = () => <div data-testid="custom-icon">Custom Icon</div>;
    render(<Logo icon={<CustomIcon />} />);
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it.each(Object.entries(brandConfig.logo.variants))('renders %s variant correctly', (variant, config) => {
    render(<Logo variant={variant as keyof typeof brandConfig.logo.variants} />);
    const { iconSize, textSize } = config as { iconSize: string; textSize: string };
    expect(screen.getByTestId('logo-square')).toHaveClass(iconSize);
    expect(screen.getByTestId('logo-text')).toHaveClass(textSize);
  });

  it.each(Object.entries(brandConfig.logo.layout))('renders %s layout correctly', (layout, config) => {
    render(<Logo layout={layout as keyof typeof brandConfig.logo.layout} />);
    const { container, iconPosition } = config as { container: string; iconPosition: string };
    expect(screen.getByTestId('logo')).toHaveClass(container);
    expect(screen.getByTestId('logo-square')).toHaveClass(iconPosition);
  });

  it.each(Object.entries(brandConfig.logo.themes))('renders %s theme variant correctly', (theme, config) => {
    render(<Logo theme={theme as keyof typeof brandConfig.logo.themes} />);
    expect(screen.getByTestId('logo-square')).toHaveClass('bg-[#2463EB]');
    const { icon, text } = config as { icon: { foreground: string }; text: string };
    expect(screen.getByTestId('logo-icon')).toHaveClass(icon.foreground);
    expect(screen.getByTestId('logo-text')).toHaveClass(text);
  });

  it('applies custom className', () => {
    const customClass = 'custom-logo';
    render(<Logo className={customClass} />);
    expect(screen.getByTestId('logo')).toHaveClass(customClass);
  });
});
