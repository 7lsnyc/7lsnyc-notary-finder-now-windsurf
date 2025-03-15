import { NextResponse } from 'next/server';
import { checkHealth } from '@/lib/supabase';

// Simple health check endpoint
export async function GET() {
  const status = await checkHealth();
  return NextResponse.json(status);
}
