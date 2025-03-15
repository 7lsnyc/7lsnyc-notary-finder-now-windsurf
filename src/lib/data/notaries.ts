/// src/lib/data/notaries.ts
import { supabase } from '@/lib/supabase';
import { Notary, NotaryFilters } from '@/types/notary';

export async function fetchNotaries(
  filters: NotaryFilters,
  limit: number = 10,
  offset: number = 0
): Promise<{ data: Notary[]; total: number }> {
  try {
    // Build the base query with only essential fields from PRD
    let query = supabase
      .from('notaries')
      .select('*', { count: 'exact' })
      .range(offset, offset + limit - 1)
      .order('rating', { ascending: false });

    // Apply filters based on PRD requirements
    if (filters.location) {
      query = query.ilike('city', `%${filters.location}%`);
    }
    if (filters.service) {
      query = query.contains('services', [filters.service]);
    }

    // Execute query
    const { data, count, error } = await query;
    
    if (error) {
      console.error('Error fetching notaries:', error);
      throw error;
    }

    return {
      data: data as Notary[],
      total: count || 0,
    };
  } catch (error) {
    console.error('fetchNotaries error:', error);
    throw error;
  }
}