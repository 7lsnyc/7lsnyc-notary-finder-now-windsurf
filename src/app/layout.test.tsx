import { render, screen } from '@testing-library/react';
import RootLayout from './layout';

describe('RootLayout', () => {
  it('renders header with navigation items from design', () => {
    render(
      <RootLayout>
        <div>Test content</div>
      </RootLayout>
    );

    // Logo
    expect(screen.getByText('Notary Finder Now')).toBeInTheDocument();

    // Navigation items
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Find a Notary')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();

    // CTA Button
    expect(screen.getByText('Request Featured Listing')).toBeInTheDocument();
  });

  it('applies design-specified styles', () => {
    render(
      <RootLayout>
        <div>Test content</div>
      </RootLayout>
    );

    // Header styles
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('bg-white');

    // Navigation links
    const navLinks = screen.getAllByRole('link');
    navLinks.forEach(link => {
      if (!link.textContent?.includes('Request Featured Listing') && !link.textContent?.includes('Notary Finder Now')) {
        expect(link).toHaveClass('text-text-dark');
        expect(link).toHaveClass('hover:text-primary');
      }
    });

    // CTA button
    const ctaButton = screen.getByText('Request Featured Listing');
    expect(ctaButton).toHaveClass('bg-accent');
    expect(ctaButton).toHaveClass('text-white');
  });
});
