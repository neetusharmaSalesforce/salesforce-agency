export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-100">

      <div className="relative">
        <div className="h-20 w-20 animate-spin rounded-full border-[6px] border-blue-600 border-t-transparent"></div>

        <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-blue-700">
          SF
        </div>
      </div>

      <h2 className="mt-8 text-2xl font-bold text-gray-900">
        Loading...
      </h2>

      <p className="mt-2 text-gray-500">
        Preparing your Salesforce experience.
      </p>

    </div>
  );
}