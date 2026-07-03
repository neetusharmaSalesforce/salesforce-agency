import Container from "./Container";

const features = [
  {
    icon: "⭐",
    title: "Certified Salesforce Experts",
    description:
      "Our experienced consultants deliver scalable Salesforce solutions tailored to your business.",
  },
  {
    icon: "⚡",
    title: "Fast Project Delivery",
    description:
      "We follow agile development practices to deliver projects on time without compromising quality.",
  },
  {
    icon: "🔒",
    title: "Secure & Scalable Solutions",
    description:
      "Every implementation follows Salesforce best practices with enterprise-grade security.",
  },
  {
    icon: "🤝",
    title: "Long-Term Partnership",
    description:
      "From implementation to ongoing support, we stay with your business as a trusted technology partner.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Your Trusted Salesforce Consulting Partner
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We combine Salesforce expertise with industry experience to help
            businesses streamline operations, improve customer experience and
            accelerate growth.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-5 rounded-2xl border border-gray-200 p-8 transition duration-300 hover:shadow-xl"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}