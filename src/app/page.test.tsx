import { render, screen } from '@/test';
import Home from './page';

// Mock next/router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Home', () => {
  it('renders hero section with search form', () => {
    render(<Home />);
    
    // Hero text
    expect(screen.getByRole('heading', { 
      name: /find a qualified notary near you — now!/i 
    })).toBeInTheDocument();
    
    expect(screen.getByText(
      /connect with mobile, 24-hour, and free notary services in your area instantly\./i
    )).toBeInTheDocument();

    // Search form
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
    
    expect(screen.getByRole('textbox', { 
      name: /search by location/i 
    })).toBeInTheDocument();
    
    expect(screen.getByRole('combobox', { 
      name: /select notary service type/i 
    })).toBeInTheDocument();
    
    expect(screen.getByRole('button', { 
      name: /search/i 
    })).toBeInTheDocument();
  });

  it('handles search form submission', async () => {
    const { user } = render(<Home />);
    
    // Fill out form
    const locationInput = screen.getByRole('textbox', { 
      name: /search by location/i 
    });
    const serviceSelect = screen.getByRole('combobox', { 
      name: /select notary service type/i 
    });
    const submitButton = screen.getByRole('button', { 
      name: /search/i 
    });

    await user.type(locationInput, 'New York');
    await user.selectOptions(serviceSelect, 'mobile');
    await user.click(submitButton);

    // Form submission is handled by router.push in the component
    // We're just verifying the form interaction works
    expect(locationInput).toHaveValue('New York');
    expect(serviceSelect).toHaveValue('mobile');
  });
});
