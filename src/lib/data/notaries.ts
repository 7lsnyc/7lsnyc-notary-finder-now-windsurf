/// src/lib/data/notaries.ts
import { supabase } from '@/lib/supabase';
import { Notary } from '@/types/notary';

export async function fetchNotaries(
  filters: {
    id?: string;
    city?: string;
    accepts_online_booking?: boolean;
    is_available_now?: boolean;
    starting_price?: number;
  },
  limit: number = 10,
  offset: number = 0
): Promise<{ data: Notary[]; total: number }> {
  try {
    // Build the base query for data
    let query = supabase
      .from('notaries')
      .select('id, name, address, city, state, zip, phone, email, website, services, rating, review_count, review_summary, latitude, longitude, about, business_hours, certifications, languages, pricing, specialized_services, remote_notary_states, is_available_now, accepts_online_booking, starting_price, price_info, business_type, service_radius_miles, service_areas, profile_image_url, license_number, license_expiry, insurance_verified, background_check_verified, featured')
      .range(offset, offset + limit - 1);

    if (filters.id) query = query.eq('id', filters.id);
    if (filters.city) query = query.eq('city', filters.city);
    if (filters.accepts_online_booking !== undefined) query = query.eq('accepts_online_booking', filters.accepts_online_booking);
    if (filters.is_available_now !== undefined) query = query.eq('is_available_now', filters.is_available_now);
    if (filters.starting_price !== undefined) query = query.eq('starting_price', filters.starting_price);

    const { data, error: dataError } = await query;
    if (dataError) {
      console.error('Supabase data error:', dataError);
      throw new Error(dataError.message);
    }

    // Fetch the total count separately
    let countQuery = supabase
      .from('notaries')
      .select('id', { count: 'exact', head: true });

    if (filters.id) countQuery = countQuery.eq('id', filters.id);
    if (filters.city) countQuery = countQuery.eq('city', filters.city);
    if (filters.accepts_online_booking !== undefined) countQuery = countQuery.eq('accepts_online_booking', filters.accepts_online_booking);
    if (filters.is_available_now !== undefined) countQuery = countQuery.eq('is_available_now', filters.is_available_now);
    if (filters.starting_price !== undefined) countQuery = countQuery.eq('starting_price', filters.starting_price);

    const { count, error: countError } = await countQuery;
    if (countError) {
      console.error('Supabase count error:', countError);
      throw new Error(countError.message);
    }

    console.log('Fetched notaries:', data);
    return { data: data as Notary[] || [], total: count || 0 };
  } catch (error) {
    console.error('fetchNotaries error:', error);
    return { data: [], total: 0 }; // Fallback to prevent undefined
  }
}