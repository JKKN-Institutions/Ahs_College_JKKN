import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import AdminSidebar from './AdminSidebar';
import ToastProvider from './ToastProvider';
import { AdminCollegeProvider } from './AdminCollegeContext';

import type { Metadata } from 'next';

// The CMS admin panel must never be indexed, by ANY crawler.
// robots.txt blocks /admin/ for `User-agent: *` and Googlebot, but a bot that
// declares its own group never reads the * group - measured 2026-09-02, 61 of 87
// groups in public/robots.txt were Allow-only, so GPTBot, ClaudeBot, PerplexityBot
// and CCBot were all free to crawl /admin/login, which served `index, follow`.
// This metadata is user-agent independent and covers every crawler, including any
// added to robots.txt after today. It is inherited by /admin/login (no metadata of
// its own) and by every nested admin route.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  let user = null;
  let isSuperAdmin = false;
  let userRole = '';
  let colleges: { id: string; name: string }[] = [];
  let currentCollegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  try {
    // getSession reads from the cookie — no network round-trip to Supabase auth server.
    const { data: { session } } = await supabase.auth.getSession();
    user = session?.user ?? null;

    if (user) {
      const { data: profile } = await supabase
        .from('staff_profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      userRole = profile?.role ?? '';
      isSuperAdmin = userRole === 'super_admin';
      const canSwitchCollege = isSuperAdmin || userRole === 'seo';

      if (canSwitchCollege) {
        const { data } = await supabase
          .from('colleges')
          .select('id, name')
          .eq('is_active', true)
          .order('name');
        colleges = data ?? [];
        currentCollegeId = await getAdminCollegeId();
      }
    }
  } catch (error) {
    // Cookie parse error — render layout without sidebar
    console.error('[Admin layout] Auth check failed:', error);
  }

  return (
    <AdminCollegeProvider collegeId={currentCollegeId}>
      <div className="min-h-screen bg-gray-50 flex">
        <ToastProvider />
        {user && (
          <AdminSidebar
            userEmail={user.email ?? ''}
            isSuperAdmin={isSuperAdmin}
            userRole={userRole}
            colleges={colleges}
            currentCollegeId={currentCollegeId}
            canSwitchCollege={isSuperAdmin || colleges.length > 0}
          />
        )}
        <main className={`flex-1 ${user ? 'lg:ml-64' : ''} min-h-screen`}>{children}</main>
      </div>
    </AdminCollegeProvider>
  );
}
