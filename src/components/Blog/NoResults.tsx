import { SearchX } from "lucide-react";

export default function NoResults() {
  return (
    <div className="rounded-3xl border border-dashed border-gray-300 bg-white py-20 text-center">

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">

        <SearchX
          size={40}
          className="text-blue-600"
        />

      </div>

      <h3 className="mt-8 text-3xl font-bold text-gray-900">
        No blogs found
      </h3>

      <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-600">
        We couldn't find any articles matching your search or selected
        category. Try another keyword or browse all blogs.
      </p>

    </div>
  );
}