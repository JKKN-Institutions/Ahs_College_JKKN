'use client';

import { BottomNavbar } from "@/components/BottomNav";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { usePathname } from "next/navigation";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Mobile-only header with logo */}
      <MobileHeader />

      <div className="min-h-screen bg-background pt-14 pb-20 md:pt-20 md:pb-0">
        {children}
      </div>

      {/* Mobile bottom navigation */}
      <BottomNavbar />
    </>
  );
}
