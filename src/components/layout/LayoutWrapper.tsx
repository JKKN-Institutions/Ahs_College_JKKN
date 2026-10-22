'use client';

import { BottomNavbar } from "@/components/BottomNav";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { ScrollToTop } from "@/components/ScrollToTop";
import { EnquiryModalProvider } from "@/components/lead/EnquiryModal";
import { usePathname } from "next/navigation";

// The enquiry modal provider wraps every visitor page (user's choice 2026-10-22, the Dental
// pattern), so the header "Enquire Now" and every jkkn.ai apply link open the same 3-box form
// everywhere, not only on the homepage. The homepage popup uses this same provider. The admin
// (CMS) pages above stay outside it.
export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <EnquiryModalProvider>
      {/* Mobile-only header with logo */}
      <MobileHeader />

      <div className="min-h-screen bg-background pt-14 pb-20 md:pt-20 md:pb-0">
        {children}
      </div>

      {/* Mobile bottom navigation */}
      <BottomNavbar />

      {/* Scroll to top button */}
      <ScrollToTop />
    </EnquiryModalProvider>
  );
}
