import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 inline-flex rounded-xl bg-blue-50 p-4">
        <Icon size={36} className="text-blue-600" />
      </div>

      <h3 className="text-2xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {description}
      </p>
      <p className="mt-6 font-semibold text-blue-600">
        Learn More →
      </p>
    </div>
  );
}