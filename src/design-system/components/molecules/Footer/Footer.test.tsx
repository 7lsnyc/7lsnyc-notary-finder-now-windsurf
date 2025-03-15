import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders all section headings', () => {
    render(<Footer />);
    
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Support')).toBeInTheDocument();
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
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /find a notary/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about us/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();

    // Services
    expect(screen.getByRole('link', { name: /mobile notaries/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /24-hour availability/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /free services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /loan signing/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /real estate/i })).toBeInTheDocument();

    // Support
    expect(screen.getByRole('link', { name: /faq/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /privacy policy/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /terms of service/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /for notaries/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /help center/i })).toBeInTheDocument();
  });

  it('has correct semantic structure', () => {
    render(<Footer />);
    
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
