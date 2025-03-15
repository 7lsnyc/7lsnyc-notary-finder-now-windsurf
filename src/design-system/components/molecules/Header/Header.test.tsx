import { render, screen } from '@/test';
import { Header } from './Header';

// Only navigation items specified in PRD
const mockNavigation = [
  { label: 'Find a Notary', href: '/notaries' },
  { label: 'Services', href: '/services' },
];

describe('Header', () => {
  it('renders brand name and navigation links', () => {
    render(
      <Header
        navigation={mockNavigation}
        brandName="Notary Finder Now"
      />
    );

    // Check brand name
    expect(screen.getByText('Notary Finder Now')).toBeInTheDocument();

    // Check navigation links
    mockNavigation.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('applies custom className', () => {
    const customClass = 'custom-header';
    const { container } = render(
      <Header
        navigation={mockNavigation}
        brandName="Notary Finder Now"
        className={customClass}
      />
    );

    expect(container.firstChild).toHaveClass(customClass);
  });

  it('applies PRD-specified styles', () => {
    const { container } = render(
      <Header
        navigation={mockNavigation}
        brandName="Notary Finder Now"
      />
    );

    const header = container.firstChild as HTMLElement;
    expect(header).toHaveClass('bg-[#007BFF]');
    expect(header).toHaveClass('shadow-[0_2px_4px_rgba(0,0,0,0.1)]');

    const brandLink = screen.getByText('Notary Finder Now');
    expect(brandLink).toHaveClass('text-[24px]');
    expect(brandLink).toHaveClass('font-poppins');
    expect(brandLink).toHaveClass('font-bold');

    const navLink = screen.getByText('Find a Notary');
    expect(navLink).toHaveClass('text-[14px]');
    expect(navLink).toHaveClass('font-inter');
  });
});
