type TestimonialCardProps = {
  name: string;
  company: string;
  review: string;
};

export default function TestimonialCard({
  name,
  company,
  review,
}: TestimonialCardProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-5 text-yellow-400 text-xl">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="leading-7 text-gray-600">
        "{review}"
      </p>

      <div className="mt-8 flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
          {name.charAt(0)}
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">
            {name}
          </h4>

          <p className="text-sm text-gray-500">
            {company}
          </p>
        </div>

      </div>

    </div>
  );
}