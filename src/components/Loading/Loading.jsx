

const Loading = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Title Skeleton */}
      <div className="flex justify-center mb-10">
        <div className="h-8 w-64 rounded-lg bg-gray-300 animate-pulse"></div>
      </div>

      {/* Card Skeletons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="rounded-xl border shadow-md overflow-hidden"
          >
            <div className="h-52 bg-gray-300 animate-pulse"></div>

            <div className="p-4 space-y-3">
              <div className="h-5 w-3/4 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>

              <div className="pt-3">
                <div className="h-10 w-full bg-gray-300 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;