import Container from "./Container";
import SectionHeading from "./SectionHeading";
import {
  ShieldCheck,
  Zap,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certified Salesforce Experts",
    description:
      "Our experienced consultants deliver scalable Salesforce solutions tailored to your business.",
  },
  {
    icon: Zap,
    title: "Fast Project Delivery",
    description:
      "We follow agile development practices to deliver projects on time without compromising quality.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Scalable Solutions",
    description:
      "Every implementation follows Salesforce best practices with enterprise-grade security.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description:
      "From implementation to ongoing support, we stay with your business as a trusted technology partner.",
  },
];

const stats = [
  {
    value: "200+",
    label: "Happy Clients",
  },
  {
    value: "500+",
    label: "Projects Delivered",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-50 to-white py-24"
    >
      <Container>
        <SectionHeading
          subtitle="Why Choose Us"
          title="Your Trusted Salesforce Consulting Partner"
          description="We combine Salesforce expertise with industry experience to help businesses streamline operations, improve customer experience and accelerate growth."
        />

        {/* Stats */}

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-4xl font-bold text-blue-600">
                {stat.value}
              </h3>

              <p className="mt-2 text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

        {/* Features */}

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-100 to-cyan-100 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Icon
                    size={34}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>

                <div className="mt-6 space-y-2">

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle
                      size={18}
                      className="text-green-500"
                    />
                    Salesforce Best Practices
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle
                      size={18}
                      className="text-green-500"
                    />
                    Enterprise Ready Solutions
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle
                      size={18}
                      className="text-green-500"
                    />
                    Ongoing Expert Support
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