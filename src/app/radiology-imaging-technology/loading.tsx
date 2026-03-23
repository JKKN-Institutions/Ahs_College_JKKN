export default function Loading() {
  return (
    <div className="min-h-screen bg-[#fbfbee] animate-pulse">
      {/* Hero skeleton */}
      <div className="h-64 md:h-80 bg-gray-200" />

      {/* Stats skeleton */}
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-20 rounded-xl bg-gray-200" />
        ))}
      </div>

      {/* Content skeleton */}
      <div className="max-w-5xl mx-auto px-4 space-y-4 pb-16">
        <div className="h-6 w-48 rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-100" />
        <div className="h-4 w-5/6 rounded bg-gray-100" />
        <div className="h-4 w-4/5 rounded bg-gray-100" />
      </div>
    </div>
  );
}
