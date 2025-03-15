import { render, screen } from '@/test';
import RootLayout from './layout';

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  // Extract body content from layout for testing
  const layout = RootLayout({ children });
  const body = (layout as any).props.children;
  return body;
};

describe('RootLayout', () => {
  it('renders header with PRD-specified navigation', () => {
    render(
      <LayoutContent>
        <div>Test content</div>
      </LayoutContent>
    );

    // Check brand name
    expect(screen.getByText('Notary Finder Now')).toBeInTheDocument();

    // Check only navigation items specified in PRD
    expect(screen.getByText('Find a Notary')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();

    // Verify non-PRD items are not present
    expect(screen.queryByText('About')).not.toBeInTheDocument();
    expect(screen.queryByText('Contact')).not.toBeInTheDocument();
    expect(screen.queryByText('Request Featured Listing')).not.toBeInTheDocument();

    // Check children are rendered
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies PRD-specified styles', () => {
    const { container } = render(
      <LayoutContent>
        <div>Test content</div>
      </LayoutContent>
    );

    const body = container.firstChild;
    expect(body).toHaveClass('text-[#333333]');
    expect(body).toHaveClass('text-[14px]');
  });
});
