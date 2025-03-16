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

const mockNavigation = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

describe('Header', () => {
  it('renders with correct layout configuration', () => {
    render(<Header navigation={mockNavigation} />);
    const header = screen.getByRole('banner');
    const container = header.querySelector('div');
    
    // Per memory fc54e17b - header height should be 70px
    expect(container?.querySelector('div')).toHaveClass('h-[70px]');
    // Should use container class for consistent layout
    expect(container).toHaveClass('container');
  });

  it('renders navigation links with correct styling', () => {
    render(<Header navigation={mockNavigation} />);
    
    mockNavigation.forEach(({ label, href }) => {
      const link = screen.getByRole('link', { name: label });
      expect(link).toHaveAttribute('href', href);
      
      // Theme-based colors (per memory ef3afadf)
      expect(link.className).toContain('text-text-dark');
      expect(link.className).toContain('hover:text-primary');
      
      // Utility classes (per memory e69200b3)
      expect(link.className).toContain('font-inter');
      expect(link.className).toContain('text-[14px]');
      expect(link.className).toContain('transition-colors');
      expect(link.className).toContain('duration-200');
    });
  });

  it('renders CTA button with correct styling', () => {
    render(<Header navigation={mockNavigation} />);
    const cta = screen.getByRole('link', { name: 'Request Featured Listing' });
    
    // Theme-based colors (per memories ef3afadf and fc54e17b)
    expect(cta.className).toContain('bg-accent');
    expect(cta.className).toContain('text-white');
    expect(cta.className).toContain('hover:bg-accent/90');
    
    // Utility classes (per memory e69200b3)
    expect(cta.className).toContain('px-4');
    expect(cta.className).toContain('py-2');
    expect(cta.className).toContain('rounded');
    expect(cta.className).toContain('font-inter');
    expect(cta.className).toContain('text-[14px]');
    expect(cta.className).toContain('transition-colors');
  });

  it('renders mobile menu button with correct theme colors', () => {
    render(<Header navigation={mockNavigation} />);
    const menuButton = screen.getByRole('button', { name: 'Open menu' });
    
    // Per memory ef3afadf - mobile menu should use text-text-dark
    expect(menuButton).toHaveClass('text-text-dark');
    expect(menuButton).toHaveClass('md:hidden');
  });

  it('preserves existing background and shadow styles', () => {
    render(<Header navigation={mockNavigation} />);
    const header = screen.getByRole('banner');
    
    // Per memory ef3afadf - preserve existing header styles
    expect(header).toHaveClass('bg-white');
    expect(header).toHaveClass('shadow-[0_2px_4px_rgba(0,0,0,0.1)]');
  });

  it('applies custom className while maintaining base styles', () => {
    const customClass = 'custom-header';
    render(<Header navigation={mockNavigation} className={customClass} />);
    const header = screen.getByRole('banner');
    
    expect(header).toHaveClass(customClass);
    expect(header).toHaveClass('bg-white');
  });
});
