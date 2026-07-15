import Container from "./Container";
import SectionHeading from "./SectionHeading";

const timeline = [
  {
    year: "2019",
    title: "Company Founded",
    description:
      "SF Agency was established with a vision to help businesses maximize Salesforce CRM.",
  },
  {
    year: "2021",
    title: "100+ Projects Delivered",
    description:
      "Successfully delivered Salesforce implementations and custom solutions across industries.",
  },
  {
    year: "2023",
    title: "Global Client Expansion",
    description:
      "Expanded our consulting services to serve clients across multiple countries.",
  },
  {
    year: "2026",
    title: "Trusted Salesforce Partner",
    description:
      "Continuing to deliver scalable CRM solutions with long-term customer success.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-white py-24">
      <Container>

        <SectionHeading
          subtitle="OUR JOURNEY"
          title="Growing With Our Clients"
          description="Every milestone reflects our commitment to delivering exceptional Salesforce solutions."
        />

        <div className="relative mx-auto mt-20 max-w-4xl">

          <div className="absolute left-5 top-0 h-full w-1 rounded bg-blue-200"></div>

          <div className="space-y-12">

            {timeline.map((item) => (
              <div
                key={item.year}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg">
                  ✓
                </div>

                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  {item.year}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}