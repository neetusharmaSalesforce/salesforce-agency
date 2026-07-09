import { liveActivities } from "@/data/activities";

export default function LiveActivity() {
  return (
    <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-5">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-green-500"></span>

        <h4 className="text-sm font-semibold text-gray-900">
          Live Activity
        </h4>
      </div>

      <div className="space-y-4">
        {liveActivities.map((activity) => (
          <div
            key={activity.title}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                ✓
              </div>

              <p className="text-sm text-gray-700">
                {activity.title}
              </p>
            </div>

            <span className="text-xs text-gray-500">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}