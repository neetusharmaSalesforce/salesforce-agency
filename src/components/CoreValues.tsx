import Container from "./Container";
import SectionHeading from "./SectionHeading";
import {
  ShieldCheck,
  Lightbulb,
  Users,
  Award,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We build long-term relationships through transparency, honesty and trust in every project.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We leverage the latest Salesforce capabilities to deliver future-ready CRM solutions.",
  },
  {
    icon: Users,
    title: "Customer Success",
    description:
      "Our clients' growth is our priority. Every solution is designed to maximize business value.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain high standards in consulting, implementation and ongoing Salesforce support.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>

        <SectionHeading
          subtitle="OUR VALUES"
          title="What Drives Everything We Do"
          description="Our values define how we work, collaborate and deliver exceptional Salesforce solutions."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon
                    size={32}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {value.description}
                </p>
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}