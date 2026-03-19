export default function () {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 lg:py-14">

        {/* Category badge */}
        <div className="h-6 w-28 rounded-full bg-gray-200 animate-pulse mb-5" />

        {/* Title — 2 lines */}
        <div className="space-y-3 mb-6">
          <div className="h-9 w-full rounded bg-gray-200 animate-pulse" />
          <div className="h-9 w-4/5 rounded bg-gray-200 animate-pulse" />
        </div>

        {/* Meta row: avatar + author + date + read time */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse flex-shrink-0" />
            <div className="h-3.5 w-28 rounded bg-gray-200 animate-pulse" />
          </div>
          <div className="h-3.5 w-24 rounded bg-gray-200 animate-pulse" />
          <div className="h-3.5 w-20 rounded bg-gray-200 animate-pulse" />
        </div>

        {/* Cover image placeholder */}
        <div className="mb-10 rounded-2xl overflow-hidden w-[600px] h-[420px] max-w-full mx-auto bg-gray-200 animate-pulse" />

        {/* Body text lines — varying widths */}
        <div className="space-y-3">
          <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
          <div className="h-4 w-11/12 rounded bg-gray-200 animate-pulse" />
          <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
          <div className="h-4 w-4/5 rounded bg-gray-200 animate-pulse" />
          <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
          <div className="h-4 w-10/12 rounded bg-gray-200 animate-pulse" />

          {/* Sub-heading */}
          <div className="h-7 w-1/2 rounded bg-gray-200 animate-pulse mt-6 mb-2" />

          <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
          <div className="h-4 w-11/12 rounded bg-gray-200 animate-pulse" />
          <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse" />
          <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
        </div>
      </main>
    </div>
  );
}
