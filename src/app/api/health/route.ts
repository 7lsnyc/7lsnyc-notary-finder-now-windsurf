import { NextResponse } from 'next/server';

// Simple health check endpoint
export async function GET() {
  return NextResponse.json({ ok: true, message: 'Service is running' });
}
