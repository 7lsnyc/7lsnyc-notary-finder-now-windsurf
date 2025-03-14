// src/app/notaries/[id]/page.tsx
import { fetchNotaries } from '@/lib/data/notaries';
import NotaryProfile from '@/components/notaries/NotaryProfile';
import { Notary } from '@/types/notary';

export async function generateStaticParams() {
  const limit = 100;
  let offset = 0;
  let allNotaries: Notary[] = [];
  let { data, total } = await fetchNotaries({}, limit, offset);
  allNotaries = allNotaries.concat(data);

  while (offset + limit < total) {
    offset += limit;
    const { data: newData } = await fetchNotaries({}, limit, offset);
    allNotaries = allNotaries.concat(newData);
  }

  return allNotaries.map((notary) => ({
    id: notary.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { data: notaries } = await fetchNotaries({ id: params.id }, 1, 0);
  const notary = notaries[0];
  if (!notary) {
    return {
      title: 'Notary Not Found | Notary Finder Now',
      description: 'The requested notary profile could not be found.',
    };
  }
  return {
    title: `${notary.name} | Notary Finder Now`,
    description: `Find ${notary.name} in ${notary.city}, ${notary.state}. Offering services like ${notary.services?.join(', ') || 'notary services'}.`,
    openGraph: {
      title: notary.name,
      description: `Find ${notary.name} in ${notary.city}, ${notary.state}.`,
      url: `https://notaryfindernow.com/notaries/${notary.id}`,
      images: notary.profile_image_url ? [notary.profile_image_url] : [],
    },
  };
}

export default async function NotaryProfilePage({ params }: { params: { id: string } }) {
  const { data: notaries } = await fetchNotaries({ id: params.id }, 1, 0);
  const notary = notaries[0];
  if (!notary) {
    return <div>Notary not found</div>;
  }
  return <NotaryProfile notary={notary} />;
}

export const revalidate = 86400;
export const revalidate = 86400;