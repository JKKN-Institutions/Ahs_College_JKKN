export default function () {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Page title skeleton */}
        <div className="mb-10 space-y-3">
          <div className="h-9 w-48 rounded-lg bg-gray-200 animate-pulse" />
          <div className="h-4 w-72 rounded bg-gray-200 animate-pulse" />
        </div>

        {/* Card grid skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white overflow-hidden shadow-sm"
            >
              {/* Image placeholder */}
              <div className="h-[13rem] w-full bg-gray-200 animate-pulse" />

              {/* Content placeholder */}
              <div className="p-5 space-y-3">
                {/* Title lines */}
                <div className="h-5 w-full rounded bg-gray-200 animate-pulse" />
                <div className="h-5 w-3/4 rounded bg-gray-200 animate-pulse" />

                {/* Meta line */}
                <div className="flex items-center gap-3 pt-1">
                  <div className="h-3 w-20 rounded bg-gray-100 animate-pulse" />
                  <div className="h-3 w-24 rounded bg-gray-100 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
