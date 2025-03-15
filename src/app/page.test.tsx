import { render, screen } from '@/test';
import Home from './page';

// Mock next/router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Home', () => {
  it('renders search form and featured sections', () => {
    render(<Home />);

    // Check PRD-specified sections are present
    expect(screen.getByRole('search')).toBeInTheDocument();
    expect(screen.getByText(/specialized services/i)).toBeInTheDocument();
    expect(screen.getByText(/top-rated notaries/i)).toBeInTheDocument();
  });

  it('applies PRD-specified styles', () => {
    const { container } = render(<Home />);
    
    // Check PRD style requirements
    const sections = container.querySelectorAll('section');
    sections.forEach(section => {
      expect(section).toHaveClass('p-[20px]'); // PRD section padding
    });
  });
});
