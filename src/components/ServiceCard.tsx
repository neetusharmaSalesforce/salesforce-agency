import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

import FadeUp from "./FadeUp";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
  features?: string[];
  delay?: number;
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  slug,
  features = [],
  delay = 0,
}: ServiceCardProps) {
  return (
    <FadeUp delay={delay}>
      <div className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl">

        {/* Icon */}
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-100 to-cyan-100 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
          <Icon size={34} className="text-blue-600" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-gray-600">
          {description}
        </p>

        {/* Features */}
        <div className="mt-6 space-y-3">

          {features.slice(0, 3).map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 text-sm text-gray-600"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-600">
                ✓
              </span>

              <span>{feature}</span>
            </div>
          ))}

        </div>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Button */}
        <Link
          href={`/services/${slug}`}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3"
        >
          Learn More

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

      </div>
    </FadeUp>
  );
}