import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders all section headings', () => {
    render(<Footer />);
    
    const headings = screen.getAllByRole('heading', { level: 2 });
    expect(headings).toHaveLength(3);
    expect(headings[0]).toHaveTextContent('Quick Links');
    expect(headings[1]).toHaveTextContent('Services');
    expect(headings[2]).toHaveTextContent('Support');
  });

  it('renders logo with correct link', () => {
    render(<Footer />);
    
    const logoLink = screen.getByRole('link', { name: /notary finder now - home/i });
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('renders copyright notice with Now Directories link', () => {
    render(<Footer />);
    
    const copyrightLink = screen.getByRole('link', { name: /now directories/i });
    expect(copyrightLink).toHaveAttribute('href', '/');
    expect(screen.getByText(/©/)).toBeInTheDocument();
    expect(screen.getByText(/2025/)).toBeInTheDocument();
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Footer />);
    
    // Quick Links
    const quickLinksSection = screen.getByRole('heading', { name: /quick links/i }).parentElement;
    expect(quickLinksSection).toBeInTheDocument();
    const quickLinks = quickLinksSection?.querySelectorAll('a');
    expect(quickLinks?.length).toBe(4);
    expect(quickLinks?.[0]).toHaveTextContent(/home/i);
    expect(quickLinks?.[1]).toHaveTextContent(/find a notary/i);
    expect(quickLinks?.[2]).toHaveTextContent(/about us/i);
    expect(quickLinks?.[3]).toHaveTextContent(/contact/i);

    // Services
    const servicesSection = screen.getByRole('heading', { name: /services/i }).parentElement;
    expect(servicesSection).toBeInTheDocument();
    const serviceLinks = servicesSection?.querySelectorAll('a');
    expect(serviceLinks?.length).toBe(4);
    expect(serviceLinks?.[0]).toHaveTextContent(/mobile notaries/i);
    expect(serviceLinks?.[1]).toHaveTextContent(/24-hour availability/i);
    expect(serviceLinks?.[2]).toHaveTextContent(/remote notaries/i);
    expect(serviceLinks?.[3]).toHaveTextContent(/free services/i);

    // Support
    const supportSection = screen.getByRole('heading', { name: /support/i }).parentElement;
    expect(supportSection).toBeInTheDocument();
    const supportLinks = supportSection?.querySelectorAll('a');
    expect(supportLinks?.length).toBe(4);
    expect(supportLinks?.[0]).toHaveTextContent(/faq/i);
    expect(supportLinks?.[1]).toHaveTextContent(/privacy policy/i);
    expect(supportLinks?.[2]).toHaveTextContent(/terms of service/i);
    expect(supportLinks?.[3]).toHaveTextContent(/request featured listing/i);
  });

  it('has correct semantic structure', () => {
    render(<Footer />);
    
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
