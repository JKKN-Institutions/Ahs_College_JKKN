import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-gray-50 border-b border-gray-200 py-3 px-4"
    >
      <ol className="max-w-7xl mx-auto flex items-center gap-1.5 text-sm flex-wrap">
        <li>
          <Link
            href="/"
            className="text-gray-500 hover:text-[#0b6d41] transition-colors flex items-center gap-1"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="text-gray-500 hover:text-[#0b6d41] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#0b6d41] font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
