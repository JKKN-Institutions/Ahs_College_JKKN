import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { syncFacultyFromMyJKKN } from '@/lib/sync/faculty-sync';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export async function POST() {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.user?.email?.endsWith('@jkkn.ac.in')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const report = await syncFacultyFromMyJKKN();
    return NextResponse.json(report);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[admin/trigger-sync]', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
