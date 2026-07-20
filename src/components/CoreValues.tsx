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
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We leverage the latest Salesforce capabilities to deliver future-ready CRM solutions.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Customer Success",
    description:
      "Our clients' growth is our priority. Every solution is designed to maximize business value.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain high standards in consulting, implementation and ongoing Salesforce support.",
    color: "from-purple-600 to-indigo-600",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <Container>

        <SectionHeading
          subtitle="OUR VALUES"
          title="What Drives Everything We Do"
          description="Our values define how we collaborate, innovate and deliver world-class Salesforce solutions for every client."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group rounded-[30px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-600 hover:shadow-2xl"
              >

                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${value.color} shadow-lg transition-transform duration-500 group-hover:scale-110`}
                >
                  <Icon
                    size={38}
                    className="text-white"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {value.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {value.description}
                </p>

                <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500 group-hover:w-full"></div>

              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}