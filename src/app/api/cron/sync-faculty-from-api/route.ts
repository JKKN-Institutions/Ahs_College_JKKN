import { NextRequest, NextResponse } from 'next/server';
import { syncFacultyFromMyJKKN } from '@/lib/sync/faculty-sync';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const expected = `Bearer ${process.env.CRON_SECRET}`;

  if (!process.env.CRON_SECRET || authHeader !== expected) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const report = await syncFacultyFromMyJKKN();
    return NextResponse.json(report);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[cron/sync-faculty]', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
