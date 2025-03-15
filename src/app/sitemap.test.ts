import sitemap from './sitemap';

describe('Sitemap Generation', () => {
  it('includes core routes from PRD', async () => {
    const sitemapData = await sitemap();
    const urls = sitemapData.map(entry => entry.url);

    // Check core routes from PRD
    expect(urls).toContain('https://notaryfindernow.com');
    expect(urls).toContain('https://notaryfindernow.com/notaries');
  });

  it('sets correct priorities based on PRD structure', async () => {
    const sitemapData = await sitemap();
    
    // Homepage should have highest priority
    const homepage = sitemapData.find(entry => entry.url === 'https://notaryfindernow.com');
    expect(homepage?.priority).toBe(1);
    
    // Search results page should have high priority
    const searchPage = sitemapData.find(entry => entry.url === 'https://notaryfindernow.com/notaries');
    expect(searchPage?.priority).toBe(0.9);
  });

  it('sets appropriate change frequencies', async () => {
    const sitemapData = await sitemap();
    
    // Homepage updates daily (new top-rated notaries)
    const homepage = sitemapData.find(entry => entry.url === 'https://notaryfindernow.com');
    expect(homepage?.changeFrequency).toBe('daily');
    
    // Search results update frequently
    const searchPage = sitemapData.find(entry => entry.url === 'https://notaryfindernow.com/notaries');
    expect(searchPage?.changeFrequency).toBe('hourly');
  });
});
