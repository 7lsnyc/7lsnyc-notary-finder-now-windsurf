import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

let supabase: ReturnType<typeof createClient<Database>> | null = null;

export function getSupabaseClient() {
  if (supabase) return supabase;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables');
  }

  // Remove any whitespace and validate URL
  const cleanUrl = supabaseUrl.replace(/\s+/g, '');
  try {
    new URL(cleanUrl);
  } catch (error) {
    throw new Error(`Invalid Supabase URL format: ${error.message}`);
  }

  supabase = createClient<Database>(cleanUrl, supabaseKey, {
    auth: {
      persistSession: false
    }
  });

  return supabase;
}

// Simple health check function that doesn't require Supabase
export async function checkHealth() {
  return { ok: true, message: 'Service is running' };
}
