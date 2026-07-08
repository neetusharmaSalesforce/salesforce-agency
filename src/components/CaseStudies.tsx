import Container from "./Container";
import SectionHeading from "./SectionHeading";
import CaseStudyCard from "./CaseStudyCard";

import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="bg-gray-50 py-24"
    >
      <Container>

        <SectionHeading
          subtitle="SUCCESS STORIES"
          title="Real Results for Real Businesses"
          description="Explore how our Salesforce solutions helped companies increase revenue, automate operations and improve customer relationships."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
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