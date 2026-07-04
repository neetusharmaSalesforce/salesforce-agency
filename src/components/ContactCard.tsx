import { LucideIcon } from "lucide-react";

type ContactCardProps = {
  title: string;
  value: string;
  icon: LucideIcon;
};

export default function ContactCard({
  title,
  value,
  icon: Icon,
}: ContactCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
        <Icon
          size={24}
          className="text-blue-600"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-gray-600">
        {value}
      </p>
    </div>
  );
}