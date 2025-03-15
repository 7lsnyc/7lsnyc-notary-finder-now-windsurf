// src/app/notaries/[id]/page.tsx
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import NotaryProfile from '@/components/notaries/NotaryProfile';

// Keep page simple as per PRD requirements
export default async function NotaryPage({ params }: { params: { id: string } }) {
  const { data: notary, error } = await supabase
    .from('notaries')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error || !notary) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <NotaryProfile notary={notary} />
    </main>
  );
}

// Revalidate once per day
export const revalidate = 86400;