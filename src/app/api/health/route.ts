import { NextResponse } from 'next/server';
import { checkHealth } from '@/lib/supabase';

// Simple health check endpoint
export async function GET() {
  try {
    const health = checkHealth();
    return NextResponse.json(health);
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: 'Service error' },
      { status: 500 }
    );
  }
}
