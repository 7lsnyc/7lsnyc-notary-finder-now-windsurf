import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { data: notary, error } = await supabase
      .from('notaries')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) throw error;
    if (!notary) {
      return NextResponse.json(
        { error: 'Notary not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(notary);
  } catch (error) {
    console.error('Error fetching notary:', error);
    return NextResponse.json(
      { error: 'Failed to fetch notary' },
      { status: 500 }
    );
  }
}
