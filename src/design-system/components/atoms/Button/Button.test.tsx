import { render, screen } from '@/test';
import { Button } from './Button';

describe('Button', () => {
  it('renders with PRD-specified styles', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    
    // Check PRD style requirements
    expect(button).toHaveClass('h-[40px]'); // PRD button height
    expect(button).toHaveClass('rounded-[8px]'); // PRD border radius
    expect(button).toHaveClass('bg-[#007BFF]'); // PRD primary color
    expect(button).toHaveClass('text-[14px]'); // PRD body text size
    expect(button).toHaveClass('font-inter'); // PRD body font
  });

  it('applies custom className', () => {
    const customClass = 'custom-button';
    render(<Button className={customClass}>Click me</Button>);
    expect(screen.getByRole('button')).toHaveClass(customClass);
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    screen.getByRole('button').click();
    expect(handleClick).toHaveBeenCalled();
  });
});
