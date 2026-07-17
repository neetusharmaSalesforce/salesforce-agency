import StatCard from "./StatCard";
import RevenueChart from "./RevenueChart";
import ActivityCard from "./ActivityCard";
import DashboardHeader from "./DashboardHeader";
import RecentDeals from "./RecentDeals";
import LiveActivity from "./LiveActivity";
import {
  stats,
  recentDeals,
  activities,
} from "@/data/dashboard";

export default function Dashboard() {
  return (
      <div className="relative mt-12 w-full max-w-md rounded-3xl border border-white/40 bg-white/90 p-6 shadow-[0_20px_60px_rgba(37,99,235,0.15)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(37,99,235,0.25)] lg:mt-10">
      {/* Monthly Growth */}
      <div className="absolute right-4 -top-10 rounded-2xl border border-white/50 bg-white px-5 py-4 shadow-2xl">        <p className="text-xs text-gray-500">
          Monthly Growth
        </p>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            +24%
          </span>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
            <span className="text-green-600">↑</span>
          </div>
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
          <div className="h-full w-[82%] animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
        </div>

        <RevenueChart />

        <LiveActivity />

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
            <div className="h-full w-[68%] animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
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