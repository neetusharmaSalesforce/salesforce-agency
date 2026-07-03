import StatCard from "./StatCard";
import RevenueChart from "./RevenueChart";
export default function Dashboard() {
  const stats = [
    {
      title: "Revenue",
      value: "$128K",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Customers",
      value: "2,450",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Opportunities",
      value: "86",
      bgColor: "bg-orange-50",
      textColor: "text-orange-500",
    },
    {
      title: "Closed Deals",
      value: "142",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
  ];

  return (
    <div className="relative w-full max-w-lg rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl">
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
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">
          Salesforce CRM
        </h3>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
          Live
        </span>
      </div>

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
      <div className="mt-8">
  <div className="mb-2 flex justify-between text-sm">
    <span className="text-gray-500">Sales Performance</span>
    <span className="font-semibold text-blue-600">82%</span>
  </div>

  <div className="h-3 overflow-hidden rounded-full bg-gray-200">
    <div className="h-full w-[82%] rounded-full bg-blue-600"></div>
  </div>
  <RevenueChart />
  </div>
    </div>
    
    
  );
}