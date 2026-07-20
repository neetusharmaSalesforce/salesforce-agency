import Container from "./Container";
import SectionHeading from "./SectionHeading";
import {
  Shield,
  Clock3,
  Users,
  TrendingUp,
  Headphones,
  Award,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Certified Salesforce Experts",
    description:
      "Our certified consultants deliver enterprise-grade Salesforce solutions using industry best practices.",
  },
  {
    icon: Clock3,
    title: "Fast Project Delivery",
    description:
      "Agile delivery process ensures projects are completed on schedule with exceptional quality.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Every implementation is tailored around your business goals and future growth.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "Increase productivity, improve sales and maximize ROI with scalable Salesforce solutions.",
  },
  {
    icon: Headphones,
    title: "Long-Term Support",
    description:
      "Implementation is just the beginning. We provide continuous optimization and support.",
  },
  {
    icon: Award,
    title: "Enterprise Quality",
    description:
      "Secure, scalable and future-ready CRM solutions built for long-term success.",
  },
];

export default function WhyChooseAgency() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <Container>

        <SectionHeading
          subtitle="WHY CHOOSE SF AGENCY"
          title="Trusted Salesforce Consulting Partner"
          description="We combine deep Salesforce expertise with business understanding to deliver measurable digital transformation."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="group rounded-[30px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-100 to-cyan-100 transition duration-500 group-hover:rotate-6 group-hover:scale-110">

                  <Icon
                    size={30}
                    className="text-blue-600"
                  />

                </div>

                <h3 className="mt-7 text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {feature.description}
                </p>

                <div className="mt-8 space-y-3">

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle
                      size={18}
                      className="text-green-500"
                    />
                    Certified Salesforce Professionals
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle
                      size={18}
                      className="text-green-500"
                    />
                    Enterprise CRM Best Practices
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle
                      size={18}
                      className="text-green-500"
                    />
                    Dedicated Long-Term Partnership
                  </div>

                </div>

              </div>

            );
          })}

        </div>

      </Container>
    </section>
  );
}