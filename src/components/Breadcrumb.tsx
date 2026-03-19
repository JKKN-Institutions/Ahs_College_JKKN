import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('py-3 px-4 sm:px-6', className)}>
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight
                  className="h-3.5 w-3.5 shrink-0 text-gray-400"
                  aria-hidden="true"
                />
              )}

              {isLast ? (
                <span
                  className="font-semibold text-gray-800"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : item.href ? (
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-[#0b6d41] hover:text-[#085231] transition-colors"
                >
                  {index === 0 && (
                    <Home className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  )}
                  {item.label}
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1 text-gray-500">
                  {index === 0 && (
                    <Home className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  )}
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
