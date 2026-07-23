"use client";

import { Blog } from "@/data/blogs";

type Props = {
  blog: Blog;
};

export default function TableOfContents({
  blog,
}: Props) {
  if (
    !blog.tableOfContents ||
    blog.tableOfContents.length === 0
  ) {
    return null;
  }

  return (
    <aside className="sticky top-28 h-fit rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

      <h3 className="text-2xl font-bold text-gray-900">
        On this page
      </h3>

      <nav className="mt-8">

        <ul className="space-y-5">

          {blog.tableOfContents.map((item) => (

            <li key={item.id}>

              <a
                href={`#${item.id}`}
                className="block border-l-2 border-transparent pl-4 text-gray-600 transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
              >
                {item.title}
              </a>

            </li>

          ))}

        </ul>

      </nav>

    </aside>
  );
}