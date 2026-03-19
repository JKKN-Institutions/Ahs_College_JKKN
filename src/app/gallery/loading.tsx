export default function () {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBEE]">
      <main className="flex-grow pt-4 md:pt-20 lg:pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Page heading */}
          <div className="h-10 w-40 rounded bg-gray-200 animate-pulse mb-2" />
          {/* Sub-heading line */}
          <div className="h-4 w-72 rounded bg-gray-200 animate-pulse mb-10" />

          {/* Album skeleton — 3 rows of albums */}
          {Array.from({ length: 3 }).map((_, albumIdx) => (
            <div key={albumIdx} className="mb-12">
              {/* Album title */}
              <div className="h-6 w-36 rounded bg-gray-200 animate-pulse mb-4" />

              {/* Image grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="aspect-square rounded-xl bg-gray-200 animate-pulse"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
