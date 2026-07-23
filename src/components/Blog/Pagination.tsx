"use client";

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({
  currentPage,
  totalPages,
}: Props) {
  return (
    <div className="mt-20 flex items-center justify-center gap-3">

      <button
        disabled={currentPage === 1}
        className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold transition hover:border-blue-600 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          className={`h-12 w-12 rounded-xl font-semibold transition ${
            currentPage === index + 1
              ? "bg-blue-600 text-white"
              : "border border-gray-300 hover:border-blue-600 hover:text-blue-600"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold transition hover:border-blue-600 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
      </button>

    </div>
  );
}