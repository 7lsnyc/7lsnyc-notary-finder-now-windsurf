import React from 'react';
import { render } from '@testing-library/react';

export function renderWithinApp(ui: React.ReactElement) {
  return render(ui, {
    container: document.documentElement
  });
}

// Mock Next.js navigation hooks
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
    };
  },
  usePathname() {
    return '/';
  },
  useSearchParams() {
    return new URLSearchParams();
  }
}));
