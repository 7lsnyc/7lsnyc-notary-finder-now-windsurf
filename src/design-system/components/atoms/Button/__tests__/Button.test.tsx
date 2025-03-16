import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../Button';

describe('Button', () => {
  it('renders with default theme-based styles', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    
    // Check base styles
    expect(button).toHaveClass('rounded');
    expect(button).toHaveClass('font-inter');
    expect(button).toHaveClass('transition-colors');

    // Check default variant (primary)
    expect(button).toHaveClass('bg-brand-primary');
    expect(button).toHaveClass('text-white');
    expect(button).toHaveClass('hover:bg-brand-primary/90');

    // Check default size (medium)
    expect(button).toHaveClass('h-10');
    expect(button).toHaveClass('px-4');
    expect(button).toHaveClass('text-base');
  });

  it('renders primary variant correctly', () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass('bg-brand-primary');
    expect(button).toHaveClass('text-white');
    expect(button).toHaveClass('hover:bg-brand-primary/90');
  });

  it('renders secondary variant correctly', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass('bg-brand-secondary');
    expect(button).toHaveClass('text-brand-primary');
    expect(button).toHaveClass('hover:bg-brand-secondary/90');
  });

  it('renders text variant correctly', () => {
    render(<Button variant="text">Text</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass('text-text-dark');
    expect(button).toHaveClass('hover:text-brand-primary');
    expect(button).not.toHaveClass('bg-brand-primary');
  });

  it('renders cta variant correctly', () => {
    render(<Button variant="cta">CTA</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass('bg-brand-accent');
    expect(button).toHaveClass('text-white');
    expect(button).toHaveClass('hover:bg-brand-accent/90');
  });

  it('renders small size correctly', () => {
    render(<Button size="small">Small</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass('h-8');
    expect(button).toHaveClass('px-3');
    expect(button).toHaveClass('text-sm');
  });

  it('renders medium size correctly', () => {
    render(<Button size="medium">Medium</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass('h-10');
    expect(button).toHaveClass('px-4');
    expect(button).toHaveClass('text-base');
  });

  it('renders large size correctly', () => {
    render(<Button size="large">Large</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass('h-12');
    expect(button).toHaveClass('px-6');
    expect(button).toHaveClass('text-lg');
  });

  it('merges custom className with default classes', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('bg-brand-primary'); // Default class should still be present
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles disabled state correctly', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50');
    expect(button).toHaveClass('cursor-not-allowed');
  });
});
