import FadeUp from "./FadeUp";
import { ArrowUpRight, CheckCircle } from "lucide-react";

type CaseStudyCardProps = {
  title: string;
  company: string;
  growth: string;
  metric: string;
  description: string;
  delay?: number;
};

export default function CaseStudyCard({
  title,
  company,
  growth,
  metric,
  description,
  delay = 0,
}: CaseStudyCardProps) {
  return (
    <FadeUp delay={delay}>
      <div className="group overflow-hidden rounded-[30px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              {company}
            </span>
          </div>

          <div className="rounded-full bg-gray-100 p-2 transition duration-300 group-hover:bg-blue-600">

            <ArrowUpRight
              size={18}
              className="text-gray-500 transition duration-300 group-hover:text-white"
            />

          </div>

        </div>

        {/* Title */}

        <h3 className="mt-8 text-2xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          {description}
        </p>

        {/* Highlights */}

        <div className="mt-8 space-y-3">

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle
              size={18}
              className="text-green-500"
            />
            Salesforce CRM Optimization
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle
              size={18}
              className="text-green-500"
            />
            Business Process Automation
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle
              size={18}
              className="text-green-500"
            />
            Measurable ROI Delivered
          </div>

        </div>

        {/* Result */}

        <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">

          <p className="text-sm uppercase tracking-wider text-blue-100">
            Business Result
          </p>

          <h4 className="mt-3 text-4xl font-bold">
            {growth}
          </h4>

          <p className="mt-2 text-blue-100">
            {metric}
          </p>

        </div>

        {/* CTA */}

        <button className="mt-8 inline-flex items-center font-semibold text-blue-600 transition-all duration-300 group-hover:translate-x-2">

          Read Full Case Study

          <ArrowUpRight
            size={18}
            className="ml-2"
          />

        </button>

        {/* Bottom Accent */}

        <div className="mt-8 h-1 w-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full"></div>

      </div>
    </FadeUp>
  );
}