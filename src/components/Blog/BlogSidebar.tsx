import Link from "next/link";
import {
  ArrowRight,
  Clock,
} from "lucide-react";

import { blogs, Blog } from "@/data/blogs";

type Props = {
  currentBlog: Blog;
};

export default function BlogSidebar({
  currentBlog,
}: Props) {
  const recentBlogs = blogs
    .filter((blog) => blog.id !== currentBlog.id)
    .slice(0, 3);

  const categories = Array.from(
    new Set(blogs.map((blog) => blog.category))
  ).map((category) => ({
    name: category,
    count: blogs.filter(
      (blog) => blog.category === category
    ).length,
  }));

  const tags = [
    ...new Set(
      blogs.flatMap((blog) => blog.tags)
    ),
  ].slice(0, 10);

  return (
    <aside className="space-y-8 lg:sticky lg:top-28">

      {/* Recent Posts */}

      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

        <h3 className="mb-6 text-2xl font-bold text-gray-900">
          Recent Posts
        </h3>

        <div className="space-y-5">

          {recentBlogs.map((blog) => (

            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="block rounded-2xl border border-gray-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg"
            >

              <h4 className="font-semibold leading-7 text-gray-900 transition hover:text-blue-700">
                {blog.title}
              </h4>

              <p className="mt-2 text-sm text-gray-500">
                {blog.publishedAt}
              </p>

              <div className="mt-3 flex items-center gap-2 text-sm text-blue-600">

                <Clock size={15} />

                {blog.readingTime}

              </div>

            </Link>

          ))}

        </div>

      </div>

      {/* Categories */}

      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

        <h3 className="mb-6 text-2xl font-bold text-gray-900">
          Categories
        </h3>

        <div className="space-y-3">

          {categories.map((category) => (

            <div
              key={category.name}
              className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3 transition hover:border-blue-500 hover:bg-blue-50"
            >

              <span className="font-medium text-gray-800">
                {category.name}
              </span>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                {category.count}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Popular Tags */}

      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

        <h3 className="mb-6 text-2xl font-bold text-gray-900">
          Popular Tags
        </h3>

        <div className="flex flex-wrap gap-3">

          {tags.map((tag) => (

            <Link
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              #{tag}
            </Link>

          ))}

        </div>

      </div>

      {/* CTA */}

      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-8 text-white shadow-xl">

        <h3 className="text-3xl font-bold leading-tight">
          Need Salesforce Experts?
        </h3>

        <p className="mt-5 leading-8 text-blue-100">
          Our certified Salesforce consultants help businesses
          implement, customize, integrate and optimize Salesforce
          solutions to accelerate growth.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Book Free Consultation

          <ArrowRight
            size={18}
            className="ml-2"
          />

        </Link>

      </div>

    </aside>
  );
}