export default function RevenueChart() {
  return (
    <div className="mt-8 rounded-2xl bg-gray-50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="font-semibold text-gray-900">
          Revenue Trend
        </h4>

        <span className="text-sm text-green-600 font-medium">
          +18%
        </span>
      </div>

      <div className="flex h-28 items-end justify-between gap-2">
        {[35, 55, 45, 70, 60, 90, 75].map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-t-xl bg-blue-500"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      <div className="mt-3 flex justify-between text-xs text-gray-500">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  );
}