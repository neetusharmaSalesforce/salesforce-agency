"use client";

import { useMemo, useState } from "react";

import { blogs } from "@/data/blogs";

import BlogCard from "./BlogCard";

export default function BlogFilter() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(blogs.map((blog) => blog.category)),
  ];

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchCategory =
        category === "All" ||
        blog.category === category;

      const matchSearch =
        blog.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        blog.excerpt
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [search, category]);

  return (
    <section className="mt-20">

      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

        <div className="grid gap-6 lg:grid-cols-2">

          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600"
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600"
          >
            {categories.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>

        </div>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {filteredBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
          />
        ))}

      </div>

    </section>
  );
}