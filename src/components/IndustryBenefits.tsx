import Container from "./Container";
import SectionHeading from "./SectionHeading";
import {
  TrendingUp,
  ShieldCheck,
  Workflow,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Accelerate Business Growth",
    description:
      "Optimize your sales, marketing and customer service processes with industry-focused Salesforce solutions.",
  },
  {
    icon: Workflow,
    title: "Automate Business Operations",
    description:
      "Reduce manual work through intelligent workflows, approvals and process automation.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Secure customer data with Salesforce best practices, governance and compliance.",
  },
  {
    icon: Users,
    title: "Better Customer Experience",
    description:
      "Deliver personalized experiences that increase customer satisfaction and long-term loyalty.",
  },
];

export default function IndustryBenefits() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>

        <SectionHeading
          subtitle="WHY INDUSTRY EXPERTISE MATTERS"
          title="Solutions Designed Around Your Business"
          description="Every industry has unique challenges. We build Salesforce solutions tailored to your business processes, customers and growth goals."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[30px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 transition duration-500 group-hover:rotate-6 group-hover:scale-110">

                  <Icon
                    size={32}
                    className="text-blue-600"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}