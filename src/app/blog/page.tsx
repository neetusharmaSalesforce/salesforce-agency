import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

import BlogList from "@/components/Blog/BlogList";
import RelatedBlogs from "@/components/Blog/RelatedBlogs";

export const metadata: Metadata = {
  title: "Salesforce Blog | SF Agency",
  description:
    "Read Salesforce tutorials, CRM best practices, implementation guides and expert insights from SF Agency.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main>
        <BlogList />
        <CTA />
      </main>

      <Footer />
    </>
  );
}