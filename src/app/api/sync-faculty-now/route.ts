import { NextRequest, NextResponse } from 'next/server';
import { syncFacultyFromMyJKKN } from '@/lib/sync/faculty-sync';
import { timingSafeEqual } from 'crypto';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

function safeCompare(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  return timingSafeEqual(Buffer.from(a), Buffer.from(b));
}

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-sync-secret');
  const expected = process.env.FACULTY_SYNC_SECRET;

  if (!expected || !secret || !safeCompare(secret, expected)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const report = await syncFacultyFromMyJKKN();
    return NextResponse.json(report);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[sync-faculty-now]', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
