export interface SyncRowResult {
  id: string;
  name: string;
  status: 'published' | 'draft';
  missing: string[];
}

export interface SyncReport {
  fetched: number;
  upserted: number;
  drafts: number;
  published: number;
  orphansSoftDeleted: number;
  slugRenames: number;
  errors: string[];
  rows: SyncRowResult[];
  durationMs: number;
}
