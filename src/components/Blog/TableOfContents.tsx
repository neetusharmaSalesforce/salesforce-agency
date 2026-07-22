import { Blog } from "@/data/blogs";

type Props = {
  blog: Blog;
};

export default function TableOfContents({ blog }: Props) {
  const headings = blog.content
    .split("\n")
    .filter(
      (line) =>
        line.trim().endsWith(":") ||
        line.trim().startsWith("•")
    );

  return (
    <aside className="sticky top-28 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

      <h3 className="text-2xl font-bold text-gray-900">
        Table of Contents
      </h3>

      <div className="mt-8 space-y-4">

        {headings.length > 0 ? (
          headings.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>

              <p className="leading-7 text-gray-700">
                {item.replace(":", "")}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            No headings available.
          </p>
        )}

      </div>

    </aside>
  );
}