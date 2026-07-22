import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { blogs } from "@/data/blogs";

import BlogHero from "@/components/Blog/BlogHero";
import BlogContent from "@/components/Blog/BlogList";
import RelatedBlogs from "@/components/Blog/RelatedBlogs";
import AuthorCard from "@/components/Blog/AuthorCard";
import Newsletter from "@/components/Blog/Newsletter";
import BlogShare from "@/components/Blog/BlogShare";
import ReadingProgress from "@/components/Blog/ReadingProgress";
import BlogNavigation from "@/components/Blog/BlogNavigation";
import Script from "next/script";
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.seoTitle,
    description: blog.seoDescription,
  };
}

export default async function BlogDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    notFound();
  }

  return (
    <>
    <ReadingProgress />
    <Script
  id="blog-jsonld"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.seoDescription,
      image: blog.featuredImage,
      datePublished: blog.publishedAt,
      author: {
        "@type": "Person",
        name: blog.author.name,
      },
      publisher: {
        "@type": "Organization",
        name: "SF Agency",
      },
    }),
  }}
/>
      <Navbar />

      <main>

        <BlogHero blog={blog} />
        <AuthorCard blog={blog} />


        <BlogContent blog={blog} />
        <Newsletter />
        <BlogShare title={blog.title} />
        <BlogNavigation
          currentSlug={blog.slug}
          blogs={blogs}
        />
        <RelatedBlogs
          currentSlug={blog.slug}
          blogs={blogs}
        />

      </main>

      <Footer />
    </>
  );
}