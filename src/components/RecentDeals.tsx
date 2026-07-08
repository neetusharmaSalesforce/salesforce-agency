type RecentDeal = {
  company: string;
  amount: string;
};

type RecentDealsProps = {
  deals: RecentDeal[];
};

export default function RecentDeals({
  deals,
}: RecentDealsProps) {
  return (
    <div className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-gray-900">
          Recent Deals
        </h4>

        <span className="text-xs text-blue-600">
          View All
        </span>
      </div>

      <div className="space-y-3">
        {deals.map((deal) => (
          <div
            key={deal.company}
            className="flex items-center justify-between rounded-xl border border-gray-100 p-3 transition hover:bg-gray-50"
          >
            <div>
              <p className="font-medium text-gray-900">
                {deal.company}
              </p>

              <p className="text-sm text-gray-500">
                Closed Deal
              </p>
            </div>

            <span className="font-semibold text-green-600">
              {deal.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}