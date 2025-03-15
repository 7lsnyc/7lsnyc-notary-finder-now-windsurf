import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Custom render that includes providers if needed
function render(ui: React.ReactElement, options = {}) {
  return {
    user: userEvent.setup(),
    ...rtlRender(ui, {
      wrapper: ({ children }) => children,
      ...options,
    }),
  };
}

// Re-export everything
export * from '@testing-library/react';
export { render };

// Common test data based on our type definitions
export const mockNotaryProfile = {
  id: '1',
  name: 'Jane Smith',
  rating: 4.8,
  reviewCount: 150,
  services: ['mobile', 'office'] as const,
  location: {
    city: 'Denver',
    state: 'CO',
  },
};
