import StatCard from "./StatCard";
import RevenueChart from "./RevenueChart";
import ActivityCard from "./ActivityCard";
import DashboardHeader from "./DashboardHeader";
import RecentDeals from "./RecentDeals";

import {
  stats,
  recentDeals,
  activities,
} from "@/data/dashboard";

export default function Dashboard() {
  return (
    <div className="relative w-full max-w-md rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl lg:mt-4">

      {/* Monthly Growth */}
      <div className="absolute -top-6 -right-6 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl">
        <p className="text-xs text-gray-500">
          Monthly Growth
        </p>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-2xl font-bold text-green-600">
            +24%
          </span>

          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
            ↑
          </span>
        </div>
      </div>

      <DashboardHeader />

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            bgColor={stat.bgColor}
            textColor={stat.textColor}
          />
        ))}
      </div>

      {/* Sales Performance */}
      <div className="mt-8">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-gray-500">
            Sales Performance
          </span>

          <span className="font-semibold text-blue-600">
            82%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-[82%] rounded-full bg-blue-600"></div>
        </div>

        <RevenueChart />

        {/* Sales Pipeline */}
        <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-5">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-sm font-semibold text-gray-900">
              Sales Pipeline
            </h4>

            <span className="text-sm font-bold text-blue-600">
              68%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          </div>

          <div className="mt-4 flex justify-between text-xs text-gray-500">
            <span>Qualified Leads</span>
            <span>124 Deals</span>
          </div>
        </div>

        {/* Recent Deals */}
        <RecentDeals deals={recentDeals} />

        {/* Recent Activity */}
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-sm font-semibold text-gray-900">
              Recent Activity
            </h4>

            <span className="text-xs text-blue-600">
              Live Updates
            </span>
          </div>

          <div className="space-y-3">
            {activities.map((activity) => (
              <ActivityCard
                key={activity.company}
                company={activity.company}
                action={activity.action}
                time={activity.time}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}