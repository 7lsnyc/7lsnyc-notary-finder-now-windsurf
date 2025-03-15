import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

let supabase: ReturnType<typeof createClient<Database>> | null = null;

export function getSupabaseClient() {
  if (supabase) return supabase;

  // Only initialize client on the server side or in production
  if (typeof window === 'undefined' || process.env.NODE_ENV === 'production') {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !key) {
      throw new Error('Missing Supabase environment variables');
    }

    // Clean URL by removing any whitespace
    const cleanUrl = url.trim().replace(/\s+/g, '');

    supabase = createClient<Database>(cleanUrl, key.trim(), {
      auth: { persistSession: false }
    });
  }

  return supabase;
}

// Simple health check that doesn't require database access
export function checkHealth() {
  return { ok: true, message: 'Service is running' };
}
