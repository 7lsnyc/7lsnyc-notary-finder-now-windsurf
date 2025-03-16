import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { Logo } from '../../atoms/Logo';
import { Button } from '../../atoms/Button';
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

          {/* Navigation - hidden for MVP */}
          <nav className="hidden absolute left-1/2 -translate-x-1/2 gap-4">
            {navigation.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-text-dark hover:text-brand-primary transition-colors duration-200 text-[14px] font-inter"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="block">
            <Link href="/request-listing">
              <Button variant="cta" size="medium">
                <span className="hidden md:inline">Request Featured Listing</span>
                <span className="md:hidden">Get Featured</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
