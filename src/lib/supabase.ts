import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

// Clean and validate Supabase URL
const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseUrl = rawUrl?.trim().replace(/\s+/g, '');
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

// Validate URL format
try {
  new URL(supabaseUrl);
} catch (error) {
  throw new Error(`Invalid Supabase URL format: ${error.message}`);
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false
  }
});

// Simple health check function
export async function checkSupabaseConnection() {
  try {
    const { data, error } = await supabase
      .from('notaries')
      .select('id')
      .limit(1);
    
    if (error) throw error;
    return { ok: true, message: 'Connected to Supabase' };
  } catch (error) {
    console.error('Supabase connection error:', error);
    return { ok: false, message: 'Failed to connect to Supabase' };
  }
}
