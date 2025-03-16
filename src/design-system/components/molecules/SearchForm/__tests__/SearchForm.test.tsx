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
    const input = screen.getByRole('textbox', { name: /search by location/i });
    const select = screen.getByRole('combobox', { name: /select notary service type/i });
    const button = screen.getByRole('button');

    // Form styling
    expect(form).toHaveClass('bg-white', 'rounded', 'shadow-card');
    expect(form).toHaveClass('flex');
    expect(form).toHaveClass('gap-2');

    // Input styling
    expect(input).toHaveClass('flex-1');
    expect(input).toHaveClass('py-2');
    expect(input).toHaveClass('focus:outline-none');
    expect(input).toHaveClass('font-inter');

    // Select styling
    expect(select).toHaveClass('text-text-dark');
    expect(select).toHaveClass('font-inter');

    // Button should be primary variant
    expect(button).toHaveTextContent('Search');
  });

  it('renders all service type options', () => {
    render(<SearchForm onSubmit={mockOnSubmit} />);
    
    const select = screen.getByRole('combobox', { name: /select notary service type/i });
    const options = Array.from(select.getElementsByTagName('option'));
    
    expect(options).toHaveLength(5); // Including default "Select service type"
    expect(options[0]).toHaveValue('');
    expect(options[0]).toHaveTextContent('Select service type');
    expect(options[1]).toHaveValue('mobile');
    expect(options[1]).toHaveTextContent('Mobile');
    expect(options[2]).toHaveValue('remote');
    expect(options[2]).toHaveTextContent('Remote');
    expect(options[3]).toHaveValue('24-7');
    expect(options[3]).toHaveTextContent('24/7 Availability');
    expect(options[4]).toHaveValue('free');
    expect(options[4]).toHaveTextContent('Free Services');
  });

  it('renders with placeholder text', () => {
    const placeholder = 'Search notaries...';
    render(<SearchForm onSubmit={mockOnSubmit} locationPlaceholder={placeholder} />);
    
    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
  });

  it('handles form submission correctly', async () => {
    render(<SearchForm onSubmit={mockOnSubmit} />);
    
    const input = screen.getByRole('textbox', { name: /search by location/i });
    const select = screen.getByRole('combobox', { name: /select notary service type/i });
    const form = screen.getByRole('search');
    
    await userEvent.type(input, 'New York');
    await userEvent.selectOptions(select, 'mobile');
    fireEvent.submit(form);
    
    expect(mockOnSubmit).toHaveBeenCalledWith('New York', 'mobile');
  });

  it('is responsive on mobile screens', () => {
    render(<SearchForm onSubmit={mockOnSubmit} />);
    
    const form = screen.getByRole('search');
    expect(form).toHaveClass('flex-col', 'sm:flex-row');
    expect(form).toHaveClass('items-stretch', 'sm:items-center');
  });

  it('handles loading state correctly', () => {
    render(<SearchForm onSubmit={mockOnSubmit} isLoading />);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Searching...');
  });

  it('shows error state on input when error prop is provided', () => {
    const errorMessage = 'Invalid search term';
    render(<SearchForm onSubmit={mockOnSubmit} error={errorMessage} />);
    
    const input = screen.getByRole('textbox', { name: /search by location/i });
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-describedby', 'search-error');
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveTextContent(errorMessage);
  });
});
