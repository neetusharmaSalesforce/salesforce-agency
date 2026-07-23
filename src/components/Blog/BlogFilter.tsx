"use client";

import { useMemo, useState } from "react";
import { SearchIcon, X } from "lucide-react";

import { blogs } from "@/data/blogs";

import FeaturedBlog from "./FeaturedBlog";
import BlogCard from "./BlogCard";
import NoResults from "./NoResults";

export default function BlogFilter() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const featuredBlog = blogs.find((blog) => blog.featured);

  const categories = [
    "All",
    ...new Set(blogs.map((blog) => blog.category)),
  ];

  const showFeatured = true;

  const filteredBlogs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return blogs.filter((blog) => {
      // Featured card ko grid me duplicate mat dikhao
      if (
        featuredBlog &&
        blog.id === featuredBlog.id
      ) {
        return false;
      }

      const matchCategory =
        category === "All" ||
        blog.category === category;

      const matchSearch =
        query === "" ||
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query) ||
        blog.tags.some((tag) =>
          tag.toLowerCase().includes(query)
        );

      return matchCategory && matchSearch;
    });
  }, [
    search,
    category,
    featuredBlog,
    showFeatured,
  ]);

  return (
    <section className="mt-20">

      {/* Featured Blog */}

      {featuredBlog && (
        <div className="mb-16">
          <FeaturedBlog blog={featuredBlog} />
        </div>
      )}

      {/* Search & Category */}

      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

        <div className="grid gap-6 lg:grid-cols-2">

          {/* Search */}

          <div className="relative">

            <SearchIcon
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search Salesforce articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-300 py-4 pl-12 pr-12 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

            {search.length > 0 && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full transition hover:bg-gray-100"
              >
                <X
                  size={18}
                  className="text-gray-500 hover:text-red-500"
                />
              </button>
            )}

          </div>

          {/* Category */}

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
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

      {/* Results */}

      {filteredBlogs.length === 0 ? (
        <div className="mt-16">
          <NoResults />
        </div>
      ) : (
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>
      )}

    </section>
  );
}