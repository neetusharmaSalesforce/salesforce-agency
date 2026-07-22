import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Clock,
  ChevronRight,
} from "lucide-react";

import { Blog } from "@/data/blogs";

type Props = {
  blog: Blog;
};

export default function BlogHero({ blog }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 py-24 text-white">

      {/* Background Blur */}
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Breadcrumb */}

        <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-blue-100">

          <Link
            href="/"
            className="transition hover:text-white"
          >
            Home
          </Link>

          <ChevronRight size={16} />

          <Link
            href="/blog"
            className="transition hover:text-white"
          >
            Blog
          </Link>

          <ChevronRight size={16} />

          <span className="text-white">
            {blog.title}
          </span>

        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold backdrop-blur">
              {blog.category}
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-6xl">
              {blog.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-blue-100">
              {blog.excerpt}
            </p>

            {/* Author */}

            <div className="mt-10 flex flex-wrap items-center gap-6">

              <div className="flex items-center gap-4">

                <Image
                  src={blog.author.image}
                  alt={blog.author.name}
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-white object-cover"
                />

                <div>

                  <h4 className="font-semibold">
                    {blog.author.name}
                  </h4>

                  <p className="text-sm text-blue-100">
                    {blog.author.role}
                  </p>

                </div>

              </div>

            </div>

            {/* Meta */}

            <div className="mt-10 flex flex-wrap gap-8 text-blue-100">

              <div className="flex items-center gap-2">

                <CalendarDays size={18} />

                {blog.publishedAt}

              </div>

              <div className="flex items-center gap-2">

                <Clock size={18} />

                {blog.readingTime}

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="overflow-hidden rounded-[32px] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl">

              <div className="relative h-[520px] w-full">

                <Image
                  src={blog.featuredImage}
                  alt={blog.title}
                  fill
                  priority
                  className="object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}