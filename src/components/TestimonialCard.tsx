import { Quote } from "lucide-react";
type TestimonialCardProps = {
  name: string;
  company: string;
  position: string;
  rating: number;
  review: string;
};

export default function TestimonialCard({
  name,
  company,
  position,
  rating,
  review,
}: TestimonialCardProps) {
  return (
        <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl">
    <div className="absolute right-6 top-6 text-blue-100 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
      <Quote size={42} />
    </div>
      <div className="mb-5 text-xl text-yellow-400">
      {"⭐".repeat(rating)}
    </div>

      <p className="relative z-10 leading-7 text-gray-600">
        "{review}"
      </p>

      <div className="mt-8 flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-lg font-bold text-white shadow-lg">          {name.charAt(0)}
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">
            {name}
          </h4>

          <p className="text-sm text-gray-500">
            {position}
          </p>

          <p className="text-xs text-blue-600 font-medium">
            {company}
          </p>
          <div className="mt-2 inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
            ✔ Verified Client
          </div>
        </div>

      </div>

    </div>
  );
}