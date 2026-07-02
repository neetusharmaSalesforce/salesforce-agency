import StatCard from "./StatCard";

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
    <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
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
    </div>
  );
}