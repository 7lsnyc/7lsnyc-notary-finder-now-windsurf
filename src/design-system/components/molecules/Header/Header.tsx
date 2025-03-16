import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { Logo } from '../../atoms/Logo';
import { siteConfig } from '../../../config/siteConfig';

interface HeaderProps {
  navigation: Array<{
    label: string;
    href: string;
  }>;
  className?: string;
}

export function Header({
  navigation,
  className,
}: HeaderProps) {
  return (
    <header className={twMerge('bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]', className)}>
      <div className="container">
        <div className="flex items-center h-[70px] justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label={siteConfig.site.name}>
            <Logo variant="default" layout="horizontal" theme="light" />
          </Link>

          {/* Navigation - centered */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-4">
            {navigation.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-text-dark hover:text-primary transition-colors duration-200 font-inter text-[14px]"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="/request-listing"
            className="hidden md:block bg-accent text-white px-4 py-2 rounded font-inter text-[14px] transition-colors hover:bg-accent/90"
          >
            Request Featured Listing
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden rounded text-text-dark"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
