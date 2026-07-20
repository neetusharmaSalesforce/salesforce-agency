import { LucideIcon, ArrowUpRight, CheckCircle } from "lucide-react";
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
      <div className="group overflow-hidden rounded-[30px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl">

        {/* Top */}

        <div className="flex items-center justify-between">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 transition duration-500 group-hover:rotate-6 group-hover:scale-110">

            <Icon
              size={32}
              className="text-blue-600"
            />

          </div>

          <div className="rounded-full bg-gray-100 p-2 transition duration-300 group-hover:bg-blue-600">

            <ArrowUpRight
              size={18}
              className="text-gray-500 transition duration-300 group-hover:text-white"
            />

          </div>

        </div>

        {/* Content */}

        <h3 className="mt-8 text-2xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          {description}
        </p>

        {/* Features */}

        <div className="mt-8 space-y-3">

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle
              size={18}
              className="text-green-500"
            />
            Industry-Specific CRM Solutions
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle
              size={18}
              className="text-green-500"
            />
            Salesforce Best Practices
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle
              size={18}
              className="text-green-500"
            />
            Scalable Digital Transformation
          </div>

        </div>

        {/* Bottom Accent */}

        <div className="mt-8 h-1 w-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full"></div>

      </div>
    </FadeUp>
  );
}