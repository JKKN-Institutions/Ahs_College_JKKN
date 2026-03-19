export default function () {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      {/* Hero gradient bar skeleton */}
      <section className="bg-gradient-to-br from-[#006837] to-[#004d29] py-16 px-8 md:px-16 lg:px-24">
        <div className="container mx-auto max-w-4xl">
          {/* Title */}
          <div className="space-y-3 mb-6">
            <div className="h-10 w-full rounded bg-white/20 animate-pulse" />
            <div className="h-10 w-3/4 rounded bg-white/20 animate-pulse" />
          </div>
          {/* Date / time / venue bar */}
          <div className="flex flex-wrap gap-6">
            <div className="h-5 w-36 rounded bg-white/20 animate-pulse" />
            <div className="h-5 w-28 rounded bg-white/20 animate-pulse" />
            <div className="h-5 w-44 rounded bg-white/20 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Content area */}
      <section className="py-16 px-8 md:px-16 lg:px-24">
        <div className="container mx-auto max-w-4xl">
          {/* Image placeholder */}
          <div className="w-full h-72 md:h-96 rounded-3xl bg-gray-200 animate-pulse mb-8" />

          {/* Description card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-4">
            {/* Card heading */}
            <div className="h-7 w-52 rounded bg-gray-200 animate-pulse mb-2" />

            {/* Description lines */}
            <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-11/12 rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-4/5 rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-10/12 rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  );
}
