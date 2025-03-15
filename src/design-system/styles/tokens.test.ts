import { tokens } from './tokens';

describe('Design System Tokens', () => {
  it('has the correct colors from PRD', () => {
    expect(tokens.colors.primary).toBe('#007BFF');
    expect(tokens.colors.secondary).toBe('#E6F0FA');
    expect(tokens.colors.accent).toBe('#F5A623');
    expect(tokens.colors.text.dark).toBe('#333333');
  });

  it('has the correct typography scales from PRD', () => {
    expect(tokens.typography.sizes.h1).toBe('36px');
    expect(tokens.typography.sizes.h2).toBe('24px');
    expect(tokens.typography.sizes.body).toBe('14px');
  });

  it('has the correct font families', () => {
    expect(tokens.typography.fonts.heading).toBe('var(--font-poppins)');
    expect(tokens.typography.fonts.body).toBe('var(--font-inter)');
  });

  it('has the correct spacing values from PRD', () => {
    expect(tokens.spacing.section).toBe('20px');
    expect(tokens.spacing.component).toBe('10px');
    expect(tokens.spacing.card).toBe('15px');
  });

  it('has the correct border radius from PRD', () => {
    expect(tokens.borderRadius).toBe('8px');
  });

  it('has the correct shadow from PRD', () => {
    expect(tokens.shadows.card).toBe('0 2px 4px rgba(0,0,0,0.1)');
  });

  it('has the correct button sizes from PRD', () => {
    expect(tokens.buttons.height.default).toBe('40px');
    expect(tokens.buttons.height.large).toBe('50px');
  });
});
