import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

import { blogs } from "@/data/blogs";

import FeaturedBlog from "./FeaturedBlog";
import BlogCard from "./BlogCard";
import BlogFilter from "./BlogFilter";
export default function BlogList() {
  const featuredBlog = blogs.find((blog) => blog.featured);

  const latestBlogs = blogs.filter((blog) => !blog.featured);

  return (
    <section className="bg-gray-50 py-24">
      <Container>

        <SectionHeading
          subtitle="OUR BLOG"
          title="Latest Salesforce Insights"
          description="Explore Salesforce best practices, CRM strategies, implementation guides and industry insights from our experts."
        />

        {/* Featured Blog */}

        {featuredBlog && (
          <div className="mt-16">
            <FeaturedBlog blog={featuredBlog} />
          </div>
        )}

        {/* Latest Articles */}

        <BlogFilter />

      </Container>
    </section>
  );
}