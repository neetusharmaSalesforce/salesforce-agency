export default function DashboardHeader() {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h3 className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-xl font-bold text-transparent">
        Salesforce CRM
      </h3>

       <span className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
        <span className="h-2 w-2 shrink-0 rounded-full bg-green-500"></span>
        Live
      </span>
    </div>
  );
}