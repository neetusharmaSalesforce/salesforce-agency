type ActivityCardProps = {
  company: string;
  action: string;
  time: string;
};

export default function ActivityCard({
  company,
  action,
  time,
}: ActivityCardProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-100 p-4 transition hover:bg-gray-50">
      <div>
        <p className="font-medium text-gray-900">
          {company}
        </p>

        <p className="text-sm text-gray-500">
          {action}
        </p>
      </div>

      <span className="text-xs text-gray-400">
        {time}
      </span>
    </div>
  );
}