import { render, screen } from '@/test';
import { Image } from './Image';

describe('Image', () => {
  const defaultProps = {
    src: '/test-image.jpg',
    alt: 'Test image',
    width: 200,
    height: 200,
  };

  it('renders with PRD-specified styles', () => {
    const { container } = render(<Image {...defaultProps} />);
    const wrapper = container.firstChild as HTMLElement;
    
    // Check PRD style requirements
    expect(wrapper).toHaveClass('rounded-[8px]'); // PRD border radius
    expect(wrapper).toHaveClass('shadow-[0_2px_4px_rgba(0,0,0,0.1)]'); // PRD shadow
  });

  it('applies custom className', () => {
    const customClass = 'custom-image';
    const { container } = render(
      <Image {...defaultProps} className={customClass} />
    );
    expect(container.firstChild).toHaveClass(customClass);
  });

  it('handles image load event', () => {
    const { container } = render(<Image {...defaultProps} />);
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    
    // Simulate image load
    if (img) {
      img.dispatchEvent(new Event('load'));
      expect(img).not.toHaveClass('opacity-0');
    }
  });
});
