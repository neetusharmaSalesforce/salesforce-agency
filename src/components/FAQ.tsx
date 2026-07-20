import Container from "./Container";
import SectionHeading from "./SectionHeading";
import FaqItem from "./FaqItem";

import { faqs as defaultFaqs } from "@/data/faqs";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  faqs?: FAQItem[];
};

export default function FAQ({
  title = "Frequently Asked Questions",
  subtitle = "FAQ",
  description = "Find answers to the most common questions about our Salesforce consulting services.",
  faqs = defaultFaqs,
}: FAQProps) {
  return (
    <section
      id="faq"
      className="bg-gray-50 py-24"
    >
      <Container>
        <SectionHeading
          subtitle={subtitle}
          title={title}
          description={description}
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