// src/lib/data/notaries.ts
import { supabase } from '@/lib/supabase';
import { Notary } from '@/types/notary';

export async function fetchNotaries(
  filters: {
    city?: string;
    accepts_online_booking?: boolean;
    is_available_now?: boolean;
    starting_price?: number;
  },
  limit: number = 10,
  offset: number = 0
): Promise<Notary[]> {
  let query = supabase
    .from('notaries')
    .select('id, name, address, city, state, zip, phone, email, website, services, rating, review_count, review_summary, latitude, longitude, about, business_hours, certifications, languages, pricing, specialized_services, remote_notary_states, is_available_now, accepts_online_booking, starting_price, price_info, business_type, service_radius_miles, service_areas, profile_image_url, license_number, license_expiry, insurance_verified, background_check_verified, featured')
    .range(offset, offset + limit - 1);

  if (filters.city) query = query.eq('city', filters.city);
  if (filters.accepts_online_booking !== undefined) query = query.eq('accepts_online_booking', filters.accepts_online_booking);
  if (filters.is_available_now !== undefined) query = query.eq('is_available_now', filters.is_available_now);
  if (filters.starting_price !== undefined) query = query.eq('starting_price', filters.starting_price);

  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data as Notary[] || [];
}