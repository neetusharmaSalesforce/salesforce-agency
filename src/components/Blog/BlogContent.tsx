import { Blog } from "@/data/blogs";
import TableOfContents from "./TableOfContents";

type Props = {
  blog: Blog;
};

export default function BlogContent({ blog }: Props) {
  return (
    <section className="py-24">

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-3">

        {/* Content */}

        <article className="prose prose-lg max-w-none lg:col-span-2">

          {blog.content.split("\n").map((paragraph, index) => {
            if (!paragraph.trim()) return null;

            if (paragraph.trim().endsWith(":")) {
              return (
                <h2
                  key={index}
                  className="mt-12 text-3xl font-bold text-gray-900"
                >
                  {paragraph.replace(":", "")}
                </h2>
              );
            }

            if (paragraph.trim().startsWith("•")) {
              return (
                <li
                  key={index}
                  className="ml-6 mt-3 text-lg leading-8 text-gray-700"
                >
                  {paragraph.replace("•", "").trim()}
                </li>
              );
            }

            return (
              <p
                key={index}
                className="mt-6 text-lg leading-9 text-gray-700"
              >
                {paragraph}
              </p>
            );
          })}

        </article>

        {/* Sidebar */}

        <TableOfContents blog={blog} />

      </div>

    </section>
  );
}