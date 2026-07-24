import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { blogs } from "@/data/blogs";

import BlogHero from "@/components/Blog/BlogHero";
import BlogContent from "@/components/Blog/BlogContent";
import RelatedBlogs from "@/components/Blog/RelatedBlogs";
import AuthorCard from "@/components/Blog/AuthorCard";
import Newsletter from "@/components/Blog/Newsletter";
import BlogShare from "@/components/Blog/BlogShare";
import ReadingProgress from "@/components/Blog/ReadingProgress";
import BlogNavigation from "@/components/Blog/BlogNavigation";
import FAQ from "@/components/Blog/FAQ";

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

    openGraph: {
      title: blog.seoTitle,
      description: blog.seoDescription,
      images: [blog.featuredImage],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: blog.seoTitle,
      description: blog.seoDescription,
      images: [blog.featuredImage],
    },
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
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: blog.title,
              description: blog.seoDescription,
              image: blog.featuredImage,
              datePublished: blog.publishedAt,
              dateModified: blog.updatedAt,

              author: {
                "@type": "Person",
                name: blog.author.name,
              },

              publisher: {
                "@type": "Organization",
                name: "SF Agency",
              },
            },

            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: blog.faqs.map(
                (faq) => ({
                  "@type": "Question",

                  name: faq.question,

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })
              ),
            },
          ]),
        }}
      />

      <Navbar />

      <main>

        <BlogHero blog={blog} />

        <AuthorCard blog={blog} />

        <BlogContent blog={blog} />

        <BlogShare title={blog.title} />

        <FAQ faqs={blog.faqs} />

        <Newsletter />

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