import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Custom render for components that don't include html/body tags
function customRender(ui: React.ReactElement, options = {}) {
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
export { customRender as render };

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
