import Container from "./Container";
import SectionHeading from "./SectionHeading";
import {
  Shield,
  Clock3,
  Users,
  TrendingUp,
  Headphones,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Certified Salesforce Experts",
    description:
      "Our experienced consultants deliver scalable Salesforce solutions following industry best practices.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "We follow structured implementation processes to deliver projects within agreed timelines.",
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    description:
      "Every solution is tailored to your business goals and long-term success.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "We help businesses automate processes, improve sales and maximize ROI with Salesforce.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "From implementation to optimization, we provide reliable long-term Salesforce support.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "We focus on delivering secure, scalable and future-ready CRM solutions with the highest quality standards.",
  },
];

export default function WhyChooseAgency() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>

        <SectionHeading
          subtitle="WHY CHOOSE US"
          title="Why Businesses Choose SF Agency"
          description="We combine Salesforce expertise with a customer-first approach to deliver solutions that create measurable business value."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon
                    size={30}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}