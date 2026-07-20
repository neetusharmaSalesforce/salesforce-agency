import Container from "./Container";
import SectionHeading from "./SectionHeading";
import IndustryCard from "./IndustryCard";

import { industries } from "@/data/industries";

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-gradient-to-b from-blue-50 via-white to-white py-24"
    >
      <Container>

        <SectionHeading
          subtitle="INDUSTRIES WE SERVE"
          title="Salesforce Solutions Built for Every Industry"
          description="From startups to global enterprises, we help organizations transform customer experiences with industry-specific Salesforce solutions."
        />

        {/* Stats */}

        <div className="mt-14 grid gap-6 sm:grid-cols-3">

          <div className="rounded-3xl border border-blue-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-4xl font-bold text-blue-600">
              20+
            </h3>

            <p className="mt-3 text-gray-600">
              Industries Served
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-4xl font-bold text-blue-600">
              500+
            </h3>

            <p className="mt-3 text-gray-600">
              Successful CRM Projects
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

        </div>

        {/* Industry Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              title={industry.title}
              description={industry.description}
              icon={industry.icon}
              delay={index * 0.15}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}