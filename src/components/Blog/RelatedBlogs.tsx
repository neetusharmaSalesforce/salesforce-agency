import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Blog } from "@/data/blogs";

type Props = {
  currentSlug: string;
  blogs: Blog[];
};

export default function RelatedBlogs({
  currentSlug,
  blogs,
}: Props) {
  const currentBlog = blogs.find(
    (blog) => blog.slug === currentSlug
  );

  const relatedBlogs = blogs
    .filter(
      (blog) =>
        blog.slug !== currentSlug &&
        blog.category === currentBlog?.category
    )
    .slice(0, 3);

  return (
    <section className="mt-24">

      <div className="text-center">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Recommended Articles
        </span>

        <h2 className="mt-6 text-5xl font-bold text-gray-900">
          Related Blogs
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Continue learning with more Salesforce insights,
          implementation guides and CRM best practices.
        </p>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {relatedBlogs.map((blog) => (

          <article
            key={blog.id}
            className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >

            <Link href={`/blog/${blog.slug}`}>

              <div className="relative h-60">

                <Image
                  src={blog.featuredImage}
                  alt={blog.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

            </Link>

            <div className="p-8">

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                {blog.category}
              </span>

              <Link href={`/blog/${blog.slug}`}>

                <h3 className="mt-6 text-2xl font-bold text-gray-900 transition group-hover:text-blue-600">
                  {blog.title}
                </h3>

              </Link>

              <p className="mt-4 leading-8 text-gray-600">
                {blog.excerpt}
              </p>

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

        ))}

      </div>

    </section>
  );
}