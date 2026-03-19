export default function () {
  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        {/* Category badge + meta row */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <div className="h-6 w-36 rounded-full bg-gray-200 animate-pulse" />
          <div className="h-4 w-24 rounded bg-gray-200 animate-pulse" />
          <div className="h-4 w-20 rounded bg-gray-200 animate-pulse" />
        </div>

        {/* Title — 2 lines */}
        <div className="space-y-3 mb-6">
          <div className="h-10 w-full rounded bg-gray-200 animate-pulse" />
          <div className="h-10 w-4/5 rounded bg-gray-200 animate-pulse" />
        </div>

        {/* Author row */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse flex-shrink-0" />
          <div className="space-y-1.5">
            <div className="h-3.5 w-40 rounded bg-gray-200 animate-pulse" />
            <div className="h-3 w-56 rounded bg-gray-100 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Featured image placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="w-full h-[400px] rounded-2xl bg-gray-200 animate-pulse" />
      </div>

      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">

          {/* Main content area */}
          <div className="min-w-0 space-y-4">
            {/* Quick-answer box */}
            <div className="h-28 w-full rounded-xl bg-gray-100 animate-pulse mb-6" />

            {/* Body text lines — varying widths */}
            <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-11/12 rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-4/5 rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-11/12 rounded bg-gray-200 animate-pulse" />

            {/* Sub-heading */}
            <div className="h-7 w-2/3 rounded bg-gray-200 animate-pulse mt-6 mb-2" />

            <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-10/12 rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse" />
          </div>

          {/* Sidebar */}
          <div className="space-y-4 lg:block hidden">
            <div className="h-6 w-32 rounded bg-gray-200 animate-pulse" />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex gap-3">
                <div className="h-4 w-full rounded bg-gray-100 animate-pulse" />
              </div>
            ))}
            <div className="mt-6 h-6 w-28 rounded bg-gray-200 animate-pulse" />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex gap-3">
                <div className="h-4 w-full rounded bg-gray-100 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
