import robots from './robots';

describe('Robots.txt Configuration', () => {
  it('allows crawling of public routes from PRD', () => {
    const robotsConfig = robots();
    
    expect(robotsConfig.rules.allow).toBe('/');
  });

  it('blocks sensitive routes', () => {
    const robotsConfig = robots();
    const disallowedRoutes = robotsConfig.rules.disallow;

    // Only block routes not in PRD
    expect(disallowedRoutes).toContain('/api/');
    expect(disallowedRoutes).toContain('/admin/');
    expect(disallowedRoutes).toContain('/_next/');
  });

  it('includes sitemap URL', () => {
    const robotsConfig = robots();
    expect(robotsConfig.sitemap).toBe('https://notaryfindernow.com/sitemap.xml');
  });
});
