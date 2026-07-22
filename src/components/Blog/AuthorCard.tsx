import Image from "next/image";
import { Blog } from "@/data/blogs";

type Props = {
  blog: Blog;
};

export default function AuthorCard({ blog }: Props) {
  return (
    <section className="mt-16">

      <div className="rounded-[32px] border border-gray-200 bg-gradient-to-br from-white to-blue-50 p-10 shadow-sm">

        <div className="flex flex-col items-center gap-8 md:flex-row">

          {/* Image */}

          <Image
            src={blog.author.image}
            alt={blog.author.name}
            width={120}
            height={120}
            className="rounded-full border-4 border-blue-100 object-cover shadow-lg"
          />

          {/* Content */}

          <div className="flex-1">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Article Author
            </span>

            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              {blog.author.name}
            </h2>

            <p className="mt-2 font-medium text-blue-600">
              {blog.author.role}
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              Our Salesforce experts have years of experience delivering
              enterprise CRM implementations, Lightning development,
              integrations, automation and consulting services for
              businesses worldwide. Every article is written using
              real-world Salesforce experience and industry best practices.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}