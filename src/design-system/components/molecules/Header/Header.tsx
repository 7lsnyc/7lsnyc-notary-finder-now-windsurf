import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface HeaderProps {
  navigation: Array<{
    label: string;
    href: string;
  }>;
  brandName: string;
  className?: string;
}

export function Header({
  navigation,
  brandName,
  className,
}: HeaderProps) {
  return (
    <header className={twMerge('bg-[#007BFF] shadow-[0_2px_4px_rgba(0,0,0,0.1)]', className)}>
      <div className="max-w-7xl mx-auto px-[20px]"> {/* PRD section padding */}
        <div className="flex justify-between h-[50px] items-center"> {/* PRD button height */}
          {/* Brand */}
          <Link 
            href="/" 
            className="text-white font-poppins font-bold text-[24px]" /* PRD H1 size */
          >
            {brandName}
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-[20px]"> {/* PRD section padding */}
            {navigation.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-white hover:text-[#E6F0FA] transition-colors duration-200 font-inter text-[14px]" /* PRD body text */
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-[10px] rounded-[8px] text-white" /* PRD component padding and border radius */
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
