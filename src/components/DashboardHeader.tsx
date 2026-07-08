export default function DashboardHeader() {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h3 className="text-xl font-bold text-gray-900">
        Salesforce CRM
      </h3>

      <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
        Live
      </span>
    </div>
  );
}