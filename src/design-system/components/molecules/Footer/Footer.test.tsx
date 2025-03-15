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

  it('renders current year in copyright notice', () => {
    render(<Footer />);
    
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Footer />);
    
    // Quick Links
    const quickLinksSection = screen.getByRole('heading', { name: /quick links/i }).parentElement;
    expect(quickLinksSection).toBeInTheDocument();
    const quickLinks = quickLinksSection?.querySelectorAll('a');
    expect(quickLinks?.length).toBe(5);
    expect(quickLinks?.[0]).toHaveTextContent(/home/i);
    expect(quickLinks?.[1]).toHaveTextContent(/find a notary/i);
    expect(quickLinks?.[2]).toHaveTextContent(/services/i);
    expect(quickLinks?.[3]).toHaveTextContent(/about us/i);
    expect(quickLinks?.[4]).toHaveTextContent(/contact/i);

    // Services
    const servicesSection = screen.getByRole('heading', { name: /services/i }).parentElement;
    expect(servicesSection).toBeInTheDocument();
    const serviceLinks = servicesSection?.querySelectorAll('a');
    expect(serviceLinks?.length).toBe(5);
    expect(serviceLinks?.[0]).toHaveTextContent(/mobile notaries/i);
    expect(serviceLinks?.[1]).toHaveTextContent(/24-hour availability/i);
    expect(serviceLinks?.[2]).toHaveTextContent(/free services/i);
    expect(serviceLinks?.[3]).toHaveTextContent(/loan signing/i);
    expect(serviceLinks?.[4]).toHaveTextContent(/real estate/i);

    // Support
    const supportSection = screen.getByRole('heading', { name: /support/i }).parentElement;
    expect(supportSection).toBeInTheDocument();
    const supportLinks = supportSection?.querySelectorAll('a');
    expect(supportLinks?.length).toBe(5);
    expect(supportLinks?.[0]).toHaveTextContent(/faq/i);
    expect(supportLinks?.[1]).toHaveTextContent(/privacy policy/i);
    expect(supportLinks?.[2]).toHaveTextContent(/terms of service/i);
    expect(supportLinks?.[3]).toHaveTextContent(/for notaries/i);
    expect(supportLinks?.[4]).toHaveTextContent(/help center/i);
  });

  it('has correct semantic structure', () => {
    render(<Footer />);
    
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
