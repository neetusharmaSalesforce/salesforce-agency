import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Blog } from "@/data/blogs";

type Props = {
  currentSlug: string;
  blogs: Blog[];
};

export default function BlogNavigation({
  currentSlug,
  blogs,
}: Props) {
  const currentIndex = blogs.findIndex(
    (blog) => blog.slug === currentSlug
  );

  const previous =
    currentIndex > 0
      ? blogs[currentIndex - 1]
      : null;

  const next =
    currentIndex < blogs.length - 1
      ? blogs[currentIndex + 1]
      : null;

  return (
    <section className="mt-20">

      <div className="grid gap-6 md:grid-cols-2">

        {/* Previous */}

        {previous ? (
          <Link
            href={`/blog/${previous.slug}`}
            className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-xl"
          >
            <div className="flex items-center gap-3 text-blue-600">

              <ArrowLeft size={20} />

              <span className="text-sm font-semibold uppercase">
                Previous Article
              </span>

            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900 group-hover:text-blue-600">
              {previous.title}
            </h3>

          </Link>
        ) : (
          <div />
        )}

        {/* Next */}

        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className="group rounded-3xl border border-gray-200 bg-white p-8 text-right transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-xl"
          >
            <div className="flex justify-end gap-3 text-blue-600">

              <span className="text-sm font-semibold uppercase">
                Next Article
              </span>

              <ArrowRight size={20} />

            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900 group-hover:text-blue-600">
              {next.title}
            </h3>

          </Link>
        ) : (
          <div />
        )}

      </div>

    </section>
  );
}