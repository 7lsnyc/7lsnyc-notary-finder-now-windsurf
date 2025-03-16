'use client';

import Link from 'next/link';
import { Logo } from '../../atoms/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer-bg text-footer-text" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description Column */}
          <div className="space-y-4">
            <Link href="/" aria-label="Notary Finder Now - Home">
              <Logo variant="small" layout="horizontal" theme="dark" />
            </Link>
            <p className="text-sm">
              Find qualified notaries in your area offering mobile, 24-hour, and free services.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h2 className="text-white font-semibold mb-4 text-[16px]">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/find-a-notary" className="hover:text-white transition-colors">Find a Notary</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h2 className="text-white font-semibold mb-4 text-[16px]">Services</h2>
            <ul className="space-y-2">
              <li><Link href="/mobile-notaries" className="hover:text-white transition-colors">Mobile Notaries</Link></li>
              <li><Link href="/24-hour-availability" className="hover:text-white transition-colors">24-Hour Availability</Link></li>
              <li><Link href="/free-services" className="hover:text-white transition-colors">Free Services</Link></li>
              <li><Link href="/loan-signing" className="hover:text-white transition-colors">Loan Signing</Link></li>
              <li><Link href="/real-estate" className="hover:text-white transition-colors">Real Estate</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h2 className="text-white font-semibold mb-4 text-[16px]">Support</h2>
            <ul className="space-y-2">
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/for-notaries" className="hover:text-white transition-colors">For Notaries</Link></li>
              <li><Link href="/help-center" className="hover:text-white transition-colors">Help Center</Link></li>
            </ul>
          </div>
        </nav>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-sm text-center">
            {currentYear} Notary Finder Now. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
