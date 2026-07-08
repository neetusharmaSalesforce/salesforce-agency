import FadeUp from "./FadeUp";

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
      <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl">

        <div className="flex items-center justify-between">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {company}
          </span>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
            {growth}
          </span>
        </div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          {description}
        </p>

        <div className="mt-8 rounded-2xl bg-gray-50 p-5">
          <p className="text-sm text-gray-500">
            Result
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {growth}
          </p>

          <p className="text-gray-700">
            {metric}
          </p>
        </div>

        <button className="mt-8 font-semibold text-blue-600 transition group-hover:translate-x-2">
          Read Case Study →
        </button>

      </div>
    </FadeUp>
  );
}