import Container from "./Container";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business goals, challenges and Salesforce requirements.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We design a scalable Salesforce solution and prepare the implementation roadmap.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Our experts configure, customize and integrate Salesforce for your business.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "We provide continuous optimization, training and long-term Salesforce support.",
  },
];

export default function Process() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Our Process
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            How We Deliver Salesforce Success
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We follow a structured approach to ensure every Salesforce project
            is delivered successfully.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}