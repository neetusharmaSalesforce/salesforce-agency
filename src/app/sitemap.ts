import type { MetadataRoute } from "next";

import { services } from "@/data/services";
import { blogs } from "@/data/blogs";

const BASE_URL = "https://www.sfagency.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "",
    "/about",
    "/services",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.9,
  }));

  const servicePages = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = blogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...blogPages,
  ];
}