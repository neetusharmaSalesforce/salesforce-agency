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
    <div
      className={`group rounded-2xl border border-white/40 ${bgColor} p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
    >
      <p className="text-sm font-medium text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
        {title}
      </p>

      <h2
        className={`mt-3 text-3xl font-extrabold ${textColor} transition-transform duration-300 group-hover:scale-105`}
      >
        {value}
      </h2>
    </div>
  );
}