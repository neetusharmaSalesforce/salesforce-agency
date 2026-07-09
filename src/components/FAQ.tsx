import Container from "./Container";
import SectionHeading from "./SectionHeading";
import FaqItem from "./FaqItem";

import { faqs } from "@/data/faqs";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-gray-50 py-24"
    >
      <Container>

        <SectionHeading
          subtitle="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to the most common questions about our Salesforce consulting services."
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-5">
          {faqs.map((faq) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}