import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";

import { Blog } from "@/data/blogs";

type Props = {
  blog: Blog;
};

export default function FeaturedBlog({ blog }: Props) {
  return (
    <section className="overflow-hidden rounded-[36px] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white shadow-2xl">

      <div className="grid items-center lg:grid-cols-2">

        {/* Left */}

        <div className="p-10 lg:p-16">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
            Featured Article
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight lg:text-6xl">
            {blog.title}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-blue-100">
            {blog.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-blue-100">

            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              {blog.publishedAt}
            </div>

            <div className="flex items-center gap-2">
              <Clock size={18} />
              {blog.readingTime}
            </div>

          </div>

          <Link
            href={`/blog/${blog.slug}`}
            className="mt-10 inline-flex items-center rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105 hover:bg-blue-50"
          >
            Read Full Article

            <ArrowRight
              size={20}
              className="ml-2"
            />
          </Link>

        </div>

        {/* Right */}

        <div className="relative h-[350px] lg:h-[600px]">

          <Image
            src={blog.featuredImage}
            alt={blog.title}
            fill
            className="object-cover"
          />

        </div>

      </div>

    </section>
  );
}