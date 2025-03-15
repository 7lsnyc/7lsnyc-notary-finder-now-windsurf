import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabase';

// Mark route as dynamic since it uses search params
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city');
    const state = searchParams.get('state');
    const services = searchParams.get('services');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = 10;
    const offset = (page - 1) * limit;

    const supabase = getSupabaseClient();

    // Build query with filters
    let query = supabase
      .from('notaries')
      .select('*', { count: 'exact' });

    if (city) query = query.ilike('city', `%${city}%`);
    if (state) query = query.eq('state', state);
    if (services) {
      const servicesList = services.split(',');
      query = query.contains('services', servicesList);
    }

    // Add pagination
    const { data, count, error } = await query
      .range(offset, offset + limit - 1)
      .order('rating', { ascending: false });

    if (error) throw error;

    return NextResponse.json({
      notaries: data || [],
      total: count || 0,
      page,
      totalPages: Math.ceil((count || 0) / limit)
    });
  } catch (error) {
    console.error('Error fetching notaries:', error);
    return NextResponse.json(
      { error: 'Failed to fetch notaries' },
      { status: 500 }
    );
  }
}
