import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get('page')) || 1;
    const per_page = Number(searchParams.get('per_page')) || 10;
    const location = searchParams.get('location');
    const service = searchParams.get('service');

    const offset = (page - 1) * per_page;

    let query = supabase
      .from('notaries')
      .select('id, name, city, state, services, rating, review_count, profile_image_url, about', { count: 'exact' })
      .order('rating', { ascending: false })
      .range(offset, offset + per_page - 1);

    // Apply filters based on PRD requirements
    if (location) {
      // Split location into parts to handle "City, State" format
      const parts = location.split(',').map(part => part.trim());
      if (parts.length > 1) {
        // If location includes both city and state
        query = query.eq('city', parts[0]).eq('state', parts[1]);
      } else {
        // If location is just city or state
        query = query.or(`city.ilike.%${parts[0]}%,state.ilike.%${parts[0]}%`);
      }
    }

    if (service) {
      query = query.contains('services', [service]);
    }

    const { data, count, error } = await query;
    
    if (error) {
      console.error('Error fetching notaries:', error);
      return NextResponse.json(
        { error: 'Failed to fetch notaries' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      notaries: data || [],
      total: count || 0
    });
  } catch (error) {
    console.error('Error in notaries API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
