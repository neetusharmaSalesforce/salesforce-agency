import { CalendarDays, Clock, Tag } from "lucide-react";
import { Blog } from "@/data/blogs";

type Props = {
  blog: Blog;
};

export default function BlogMeta({
  blog,
}: Props) {
  return (
    <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex flex-wrap items-center gap-6">

        <div className="flex items-center gap-2 text-gray-600">

          <CalendarDays
            size={18}
            className="text-blue-600"
          />

          <span>{blog.publishedAt}</span>

        </div>

        <div className="flex items-center gap-2 text-gray-600">

          <Clock
            size={18}
            className="text-blue-600"
          />

          <span>{blog.readingTime}</span>

        </div>

        <div className="flex items-center gap-2 text-gray-600">

          <Tag
            size={18}
            className="text-blue-600"
          />

          <span>{blog.category}</span>

        </div>

      </div>

      <div className="mt-6 flex flex-wrap gap-3">

        {blog.tags.map((tag) => (

          <span
            key={tag}
            className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-100"
          >
            #{tag}
          </span>

        ))}

      </div>

    </div>
  );
}