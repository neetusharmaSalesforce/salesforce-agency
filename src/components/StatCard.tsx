type StatCardProps = {
  title: string;
  value: string;
  bgColor: string;
  textColor: string;
};

export default function StatCard({
  title,
  value,
  bgColor,
  textColor,
}: StatCardProps) {
  return (
    <div className={`rounded-xl p-4 ${bgColor}`}>
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h2 className={`mt-2 text-2xl font-bold ${textColor}`}>
        {value}
      </h2>
    </div>
  );
}