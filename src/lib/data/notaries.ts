/// src/lib/data/notaries.ts
import { getSupabaseClient } from '@/lib/supabase';

// Core types based on PRD requirements
interface Notary {
  id: string;
  name: string;
  city: string;
  state: string;
  services: string[];
  rating: number;
  review_count: number;
}

interface NotaryFilters {
  city?: string;
  state?: string;
  services?: string[];
}

interface NotarySearchResult {
  notaries: Notary[];
  total: number;
  page: number;
  totalPages: number;
}

export async function fetchNotaries(
  filters: NotaryFilters,
  page: number = 1,
  limit: number = 10
): Promise<NotarySearchResult> {
  try {
    const offset = (page - 1) * limit;
    const supabase = getSupabaseClient();

    // Build query with essential fields per PRD
    let query = supabase
      .from('notaries')
      .select('*', { count: 'exact' })
      .range(offset, offset + limit - 1)
      .order('rating', { ascending: false });

    // Apply filters based on PRD requirements
    if (filters.city) {
      query = query.ilike('city', `%${filters.city}%`);
    }
    if (filters.state) {
      query = query.eq('state', filters.state);
    }
    if (filters.services?.length) {
      query = query.contains('services', filters.services);
    }

    const { data, count, error } = await query;
    
    if (error) throw error;

    return {
      notaries: data || [],
      total: count || 0,
      page,
      totalPages: Math.ceil((count || 0) / limit)
    };
  } catch (error) {
    console.error('Error fetching notaries:', error);
    throw error;
  }
}