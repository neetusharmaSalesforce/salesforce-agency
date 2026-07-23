import Link from "next/link";

import { blogs } from "@/data/blogs";
import { Blog } from "@/data/blogs";

type Props = {
  currentBlog: Blog;
};

export default function BlogSidebar({
  currentBlog,
}: Props) {
  const recentBlogs = blogs
    .filter((blog) => blog.id !== currentBlog.id)
    .slice(0, 3);

  const categories = [
    ...new Set(blogs.map((blog) => blog.category)),
  ];

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
              className="block rounded-xl border border-gray-100 p-4 transition hover:border-blue-500 hover:bg-blue-50"
            >
              <h4 className="font-semibold text-gray-900">
                {blog.title}
              </h4>

              <p className="mt-2 text-sm text-gray-500">
                {blog.publishedAt}
              </p>

            </Link>

          ))}

        </div>

      </div>

      {/* Categories */}

      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

        <h3 className="mb-6 text-2xl font-bold text-gray-900">
          Categories
        </h3>

        <div className="flex flex-wrap gap-3">

          {categories.map((category) => (

            <span
              key={category}
              className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
            >
              {category}
            </span>

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

            <span
              key={tag}
              className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              #{tag}
            </span>

          ))}

        </div>

      </div>

    </aside>
  );
}