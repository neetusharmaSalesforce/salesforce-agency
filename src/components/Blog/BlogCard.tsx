import Link from "next/link";
import Image from "next/image";
import {
  CalendarDays,
  Clock,
  ArrowRight,
  User,
} from "lucide-react";

import { Blog } from "@/data/blogs";

type Props = {
  blog: Blog;
};

export default function BlogCard({ blog }: Props) {
  return (
<article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">
      {/* Image */}

      <Link href={`/blog/${blog.slug}`}>
        <div className="relative h-64 overflow-hidden bg-gray-100">

          <Image
            src={blog.featuredImage}
            alt={blog.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />

        </div>
      </Link>

      {/* Content */}

      <div className="flex flex-1 flex-col p-8">

        {/* Category */}

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          {blog.category}
        </span>

        {/* Title */}

        <Link href={`/blog/${blog.slug}`}>
          <h2 className="mt-6 text-2xl font-bold text-gray-900 transition group-hover:text-blue-600">
            {blog.title}
          </h2>
        </Link>

        {/* Excerpt */}

        <p className="mt-4 flex-1 leading-8 text-gray-600">
          {blog.excerpt}
        </p>

        {/* Meta */}

        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-500">

          <div className="flex items-center gap-2">
            <CalendarDays size={18} />
            {blog.publishedAt}
          </div>

          <div className="flex items-center gap-2">
            <Clock size={18} />
            {blog.readingTime}
          </div>

        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-6">

  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">

    <User
      size={18}
      className="text-blue-600"
    />

  </div>

  <div>

    <p className="font-semibold text-gray-900">
      {blog.author.name}
    </p>

    <p className="text-sm text-gray-500">
      {blog.author.role}
    </p>

  </div>

</div>

        {/* Read More */}

        <Link
          href={`/blog/${blog.slug}`}
          className="mt-8 inline-flex items-center font-semibold text-blue-600"
        >
          Read Article

          <ArrowRight
            size={18}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
          />
        </Link>

      </div>

    </article>
  );
}