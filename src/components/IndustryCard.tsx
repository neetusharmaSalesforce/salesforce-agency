import { LucideIcon } from "lucide-react";
import FadeUp from "./FadeUp";

type IndustryCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
};

export default function IndustryCard({
  title,
  description,
  icon: Icon,
  delay = 0,
}: IndustryCardProps) {
  return (
    <FadeUp delay={delay}>
      <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
        <div className="mb-6 inline-flex rounded-2xl bg-blue-50 p-4 transition group-hover:bg-blue-600">
          <Icon
            size={36}
            className="text-blue-600 transition group-hover:text-white"
          />
        </div>

        <h3 className="text-2xl font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          {description}
        </p>
      </div>
    </FadeUp>
  );
}