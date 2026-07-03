import Container from "./Container";

const services = [
  {
    title: "Sales Cloud",
    description:
      "Boost your sales process with customized Salesforce Sales Cloud solutions.",
    icon: "☁️",
  },
  {
    title: "Service Cloud",
    description:
      "Deliver exceptional customer support using Salesforce Service Cloud.",
    icon: "☎️",
  },
  {
    title: "Salesforce Implementation",
    description:
      "Complete Salesforce setup, customization and deployment.",
    icon: "⚙️",
  },
  {
    title: "CRM Consulting",
    description:
      "Expert consulting to improve CRM strategy and business growth.",
    icon: "📊",
  },
  {
    title: "Integration",
    description:
      "Connect Salesforce with ERP, websites and third-party systems.",
    icon: "🔗",
  },
  {
    title: "Managed Services",
    description:
      "Ongoing Salesforce support, optimization and maintenance.",
    icon: "🚀",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Salesforce Solutions That Grow Your Business
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We provide complete Salesforce consulting, implementation,
            customization and managed services to help businesses achieve
            digital transformation.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 text-5xl">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}