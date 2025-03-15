import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabase';

// Simple API route for fetching a single notary
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('notaries')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) throw error;
    if (!data) {
      return NextResponse.json(
        { error: 'Notary not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching notary:', error);
    return NextResponse.json(
      { error: 'Failed to fetch notary' },
      { status: 500 }
    );
  }
}
