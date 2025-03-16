import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchForm } from '../SearchForm';

describe('SearchForm', () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  it('renders with theme-based styling', () => {
    render(<SearchForm onSubmit={mockOnSubmit} />);
    
    const form = screen.getByRole('search');
    const input = screen.getByRole('searchbox');
    const button = screen.getByRole('button');

    // Form styling
    expect(form).toHaveClass('w-full');
    expect(form).toHaveClass('flex');
    expect(form).toHaveClass('gap-4');

    // Input styling
    expect(input).toHaveClass('w-full');
    expect(input).toHaveClass('px-4');
    expect(input).toHaveClass('py-2');
    expect(input).toHaveClass('rounded');
    expect(input).toHaveClass('border');
    expect(input).toHaveClass('border-text-secondary');
    expect(input).toHaveClass('focus:border-primary');
    expect(input).toHaveClass('focus:ring-2');
    expect(input).toHaveClass('focus:ring-primary/20');
    expect(input).toHaveClass('font-inter');

    // Button styling (should use our Button component's primary variant)
    expect(button).toHaveClass('bg-brand-primary');
    expect(button).toHaveClass('text-white');
  });

  it('renders with placeholder text', () => {
    render(<SearchForm onSubmit={mockOnSubmit} placeholder="Search notaries..." />);
    
    const input = screen.getByPlaceholderText('Search notaries...');
    expect(input).toBeInTheDocument();
  });

  it('handles form submission correctly', async () => {
    render(<SearchForm onSubmit={mockOnSubmit} />);
    
    const input = screen.getByRole('searchbox');
    const form = screen.getByRole('search');
    
    await userEvent.type(input, 'mobile notary');
    fireEvent.submit(form);
    
    expect(mockOnSubmit).toHaveBeenCalledWith('mobile notary');
  });

  it('is responsive on mobile screens', () => {
    render(<SearchForm onSubmit={mockOnSubmit} />);
    
    const form = screen.getByRole('search');
    
    // Should stack vertically on mobile
    expect(form).toHaveClass('flex-col md:flex-row');
    expect(form).toHaveClass('items-stretch md:items-start');
  });

  it('maintains consistent spacing across breakpoints', () => {
    render(<SearchForm onSubmit={mockOnSubmit} />);
    
    const form = screen.getByRole('search');
    
    // Gap should be consistent
    expect(form).toHaveClass('gap-4');
    // Padding should adjust for mobile
    expect(form).toHaveClass('px-4 md:px-0');
  });

  it('handles loading state correctly', () => {
    render(<SearchForm onSubmit={mockOnSubmit} isLoading />);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50');
  });

  it('shows error state on input when error prop is provided', () => {
    render(<SearchForm onSubmit={mockOnSubmit} error="Invalid search term" />);
    
    const input = screen.getByRole('searchbox');
    expect(input).toHaveClass('border-red-500');
    expect(screen.getByText('Invalid search term')).toBeInTheDocument();
  });
});
