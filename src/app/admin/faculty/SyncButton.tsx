'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RefreshCw, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';
import type { SyncReport } from '@/lib/types/sync';

export default function SyncButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<SyncReport | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSync() {
    setLoading(true);
    setError(null);
    setReport(null);

    try {
      const res = await fetch('/api/admin/trigger-sync', { method: 'POST' });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Sync failed: ${res.status}`);
      }
      const data: SyncReport = await res.json();
      setReport(data);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sync failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleSync}
        disabled={loading}
        className="flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
      >
        <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
        {loading ? 'Syncing…' : 'Sync from MyJKKN'}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 flex items-start gap-2">
          <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          {error}
        </div>
      )}

      {report && (
        <div className="mt-4 bg-white border border-gray-200 rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            Sync completed in {(report.durationMs / 1000).toFixed(1)}s
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="text-lg font-bold text-gray-900">{report.fetched}</p>
              <p className="text-xs text-gray-500">Fetched</p>
            </div>
            <div className="bg-green-50 rounded-lg p-2">
              <p className="text-lg font-bold text-green-700">{report.published}</p>
              <p className="text-xs text-gray-500">Published</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-2">
              <p className="text-lg font-bold text-yellow-700">{report.drafts}</p>
              <p className="text-xs text-gray-500">Drafts</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="text-lg font-bold text-gray-600">{report.orphansSoftDeleted}</p>
              <p className="text-xs text-gray-500">Orphaned</p>
            </div>
          </div>

          {report.errors.length > 0 && (
            <div className="space-y-1">
              <p className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                Errors ({report.errors.length})
              </p>
              {report.errors.map((e, i) => (
                <p key={i} className="text-xs text-red-600 bg-red-50 rounded px-2 py-1">
                  {e}
                </p>
              ))}
            </div>
          )}

          {report.rows.some((r) => r.missing.length > 0) && (
            <div className="space-y-1">
              <p className="text-xs font-semibold text-yellow-600 uppercase tracking-wide flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                Incomplete profiles (fix in MyJKKN)
              </p>
              {report.rows
                .filter((r) => r.missing.length > 0)
                .map((r) => (
                  <div
                    key={r.id}
                    className="text-xs bg-yellow-50 rounded px-2 py-1 flex items-center justify-between"
                  >
                    <span className="font-medium text-gray-700">{r.name}</span>
                    <span className="text-yellow-600">
                      Missing: {r.missing.join(', ')}
                    </span>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
