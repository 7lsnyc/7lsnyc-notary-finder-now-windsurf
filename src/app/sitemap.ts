import { MetadataRoute } from 'next';

// This will be replaced with actual data fetching from Supabase
async function getAllNotaryIds(): Promise<string[]> {
  return []; // Placeholder until Supabase integration
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://notaryfindernow.com';
  
  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/notaries`,
      lastModified: new Date(),
      changeFrequency: 'hourly' as const,
      priority: 0.9,
    },
  ];

  // Dynamic notary profile routes
  const notaryIds = await getAllNotaryIds();
  const dynamicRoutes = notaryIds.map((id) => ({
    url: `${baseUrl}/notaries/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
