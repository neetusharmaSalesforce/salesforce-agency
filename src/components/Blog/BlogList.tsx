import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

import BlogFilter from "./BlogFilter";
import Pagination from "./Pagination";
export default function BlogList() {
  return (
    <section className="bg-gray-50 py-24">

      <Container>

        <SectionHeading
          subtitle="OUR BLOG"
          title="Latest Salesforce Insights"
          description="Explore Salesforce best practices, CRM strategies, implementation guides and industry insights from our experts."
        />

        <BlogFilter />
        <div className="mt-16">
        <Pagination
          currentPage={1}
          totalPages={5}
        />
      </div>

      </Container>

    </section>
  );
}