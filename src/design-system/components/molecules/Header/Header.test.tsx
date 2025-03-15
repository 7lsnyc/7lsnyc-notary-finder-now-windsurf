import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  const mockNavigation = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ];

  it('renders navigation items correctly', () => {
    render(<Header navigation={mockNavigation} />);
    
    mockNavigation.forEach(item => {
      const link = screen.getByText(item.label);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', item.href);
    });
  });

  it('applies design-specified styles', () => {
    const { container } = render(<Header navigation={mockNavigation} />);

    const header = container.firstChild as HTMLElement;
    expect(header).toHaveClass('bg-white');
    expect(header).toHaveClass('shadow-[0_2px_4px_rgba(0,0,0,0.1)]');

    const brandLink = screen.getByText('Notary Finder Now').closest('a');
    expect(brandLink).toHaveClass('shrink-0');

    const navLinks = screen.getAllByRole('link');
    navLinks.forEach(link => {
      if (mockNavigation.some(item => item.label === link.textContent)) {
        expect(link).toHaveClass('text-text-dark');
        expect(link).toHaveClass('hover:text-primary');
      }
    });

    const ctaButton = screen.getByText('Request Featured Listing');
    expect(ctaButton).toHaveClass('bg-accent');
    expect(ctaButton).toHaveClass('text-white');
  });

  it('is responsive', () => {
    render(<Header navigation={mockNavigation} />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('hidden');
    expect(nav).toHaveClass('md:flex');

    const menuButton = screen.getByLabelText('Open menu');
    expect(menuButton).toHaveClass('md:hidden');
  });
});
