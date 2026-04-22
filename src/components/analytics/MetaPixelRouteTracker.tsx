"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function Tracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname, searchParams]);

  return null;
}

export function MetaPixelRouteTracker() {
  return (
    <Suspense fallback={null}>
      <Tracker />
    </Suspense>
  );
}
