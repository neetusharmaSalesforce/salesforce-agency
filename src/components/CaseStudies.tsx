import Container from "./Container";
import SectionHeading from "./SectionHeading";
import CaseStudyCard from "./CaseStudyCard";

import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="bg-gradient-to-b from-blue-50 via-white to-white py-24"
    >
      <Container>

        <SectionHeading
          subtitle="SUCCESS STORIES"
          title="Real Salesforce Success Stories"
          description="Discover how our Salesforce experts helped organizations increase revenue, automate operations and deliver exceptional customer experiences."
        />

        {/* Stats */}

        <div className="mt-14 grid gap-6 sm:grid-cols-4">

          <div className="rounded-3xl border border-blue-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-4xl font-bold text-blue-600">
              500+
            </h3>

            <p className="mt-3 text-gray-600">
              Projects Delivered
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-4xl font-bold text-blue-600">
              99%
            </h3>

            <p className="mt-3 text-gray-600">
              Client Satisfaction
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-4xl font-bold text-blue-600">
              35+
            </h3>

            <p className="mt-3 text-gray-600">
              Industries Served
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-4xl font-bold text-blue-600">
              24/7
            </h3>

            <p className="mt-3 text-gray-600">
              Expert Support
            </p>
          </div>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.title}
              title={study.title}
              company={study.company}
              growth={study.growth}
              metric={study.metric}
              description={study.description}
              delay={index * 0.15}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}