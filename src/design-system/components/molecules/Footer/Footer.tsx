'use client';

import Link from 'next/link';
import { Logo } from '../../atoms/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container py-12">
        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description Column */}
          <div className="space-y-4">
            <Link href="/" aria-label="Notary Finder Now - Home">
              <Logo variant="default" layout="horizontal" theme="dark" />
            </Link>
            <p className="text-sm text-text-secondary">
              Find qualified notaries in your area offering mobile, 24-hour, and free services.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h2 className="footer-heading">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/find-a-notary" className="footer-link">Find a Notary</Link></li>
              <li><Link href="/services" className="footer-link">Services</Link></li>
              <li><Link href="/about-us" className="footer-link">About Us</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h2 className="footer-heading">Services</h2>
            <ul className="space-y-2">
              <li><Link href="/mobile-notaries" className="footer-link">Mobile Notaries</Link></li>
              <li><Link href="/24-hour-availability" className="footer-link">24-Hour Availability</Link></li>
              <li><Link href="/free-services" className="footer-link">Free Services</Link></li>
              <li><Link href="/loan-signing" className="footer-link">Loan Signing</Link></li>
              <li><Link href="/real-estate" className="footer-link">Real Estate</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h2 className="footer-heading">Support</h2>
            <ul className="space-y-2">
              <li><Link href="/faq" className="footer-link">FAQ</Link></li>
              <li><Link href="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="footer-link">Terms of Service</Link></li>
              <li><Link href="/for-notaries" className="footer-link">For Notaries</Link></li>
              <li><Link href="/help-center" className="footer-link">Help Center</Link></li>
            </ul>
          </div>
        </nav>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-text-secondary/20">
          <p className="text-sm text-center text-text-secondary">
            {currentYear} Notary Finder Now. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
