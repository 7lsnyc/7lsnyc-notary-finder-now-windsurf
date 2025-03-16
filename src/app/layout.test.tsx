/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import RootLayout from './layout';

// Mock Next.js font loading
jest.mock('next/font/google', () => ({
  Inter: () => ({
    className: 'font-inter',
    variable: '--font-inter'
  }),
  Poppins: () => ({
    className: 'font-poppins',
    variable: '--font-poppins'
  })
}));

// Mock components
jest.mock('../design-system/components/molecules/Header', () => ({
  Header: () => <header data-testid="mock-header">Header</header>
}));

jest.mock('../design-system/components/molecules/Footer', () => ({
  Footer: () => <footer data-testid="mock-footer">Footer</footer>
}));

describe('RootLayout', () => {
  it('renders layout structure correctly', () => {
    const testContent = 'Test Content';
    render(<RootLayout>{testContent}</RootLayout>);

    // Verify header and footer are present
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();

    // Verify main content area
    const main = screen.getByRole('main');
    expect(main).toHaveClass('flex-grow');
    expect(main).toHaveTextContent(testContent);
  });
});
