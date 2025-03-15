import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

let supabase: ReturnType<typeof createClient<Database>> | null = null;

export function getSupabaseClient() {
  if (supabase) return supabase;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables');
  }

  // Clean URL by removing any whitespace
  const cleanUrl = supabaseUrl.replace(/\s+/g, '');

  supabase = createClient<Database>(cleanUrl, supabaseKey, {
    auth: {
      persistSession: false
    }
  });

  return supabase;
}

// Simple health check that doesn't require database access
export function checkHealth() {
  return { ok: true, message: 'Service is running' };
}
