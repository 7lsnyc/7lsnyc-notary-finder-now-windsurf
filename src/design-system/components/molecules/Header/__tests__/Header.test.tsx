import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../Header';
import { siteConfig } from '../../../../config/siteConfig';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) => (
    <a href={href} className={className}>{children}</a>
  );
});

describe('Header', () => {
  const mockNavigation = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ];

  it('renders with theme-based styling', () => {
    render(<Header navigation={mockNavigation} />);
    
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('bg-white');
    expect(header).toHaveClass('shadow-[0_2px_4px_rgba(0,0,0,0.1)]');
  });

  it('renders logo with link to homepage', () => {
    render(<Header navigation={mockNavigation} />);
    
    const logoLink = screen.getByRole('link', { name: /notary finder now/i });
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('renders CTA button with correct styling and link', () => {
    render(<Header navigation={mockNavigation} />);
    
    const ctaButton = screen.getByRole('button');
    const ctaLink = screen.getByRole('link', { name: /get featured|request featured listing/i });
    
    expect(ctaButton).toHaveClass('bg-brand-accent');
    expect(ctaButton).toHaveClass('text-white');
    expect(ctaLink).toHaveAttribute('href', '/request-listing');
  });

  it('renders responsive CTA text', () => {
    render(<Header navigation={mockNavigation} />);
    
    const mobileText = screen.getByText('Get Featured');
    const desktopText = screen.getByText('Request Featured Listing');
    
    expect(mobileText).toHaveClass('md:hidden');
    expect(desktopText).toHaveClass('hidden');
    expect(desktopText).toHaveClass('md:inline');
  });

  it('keeps navigation structure but hides it for MVP', () => {
    render(<Header navigation={mockNavigation} />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('hidden');
  });

  it('renders navigation links with correct hover styles', () => {
    render(<Header navigation={mockNavigation} />);
    
    mockNavigation.forEach(({ label, href }) => {
      const link = screen.getByRole('link', { name: label });
      expect(link).toHaveAttribute('href', href);
      expect(link).toHaveClass('text-text-dark');
      expect(link).toHaveClass('hover:text-brand-primary');
      expect(link).toHaveClass('transition-colors');
    });
  });

  it('accepts and applies custom className', () => {
    const customClass = 'custom-header';
    render(<Header navigation={mockNavigation} className={customClass} />);
    
    const header = screen.getByRole('banner');
    expect(header).toHaveClass(customClass);
  });

  it('shows CTA button on all screen sizes', () => {
    render(<Header navigation={mockNavigation} />);
    
    const ctaContainer = screen.getByRole('button').parentElement?.parentElement;
    expect(ctaContainer).toHaveClass('block');
    expect(ctaContainer).not.toHaveClass('md:block');
    expect(ctaContainer).not.toHaveClass('hidden');
  });
});
