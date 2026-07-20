import Container from "./Container";
import SectionHeading from "./SectionHeading";

const timeline = [
  {
    year: "2019",
    title: "Company Founded",
    description:
      "SF Agency was established with a vision to help businesses maximize Salesforce CRM through consulting and implementation.",
  },
  {
    year: "2021",
    title: "100+ Projects Delivered",
    description:
      "Successfully delivered Salesforce implementations, custom development and enterprise CRM solutions.",
  },
  {
    year: "2023",
    title: "Global Client Expansion",
    description:
      "Expanded our Salesforce consulting services to clients across multiple countries and industries.",
  },
  {
    year: "2026",
    title: "Trusted Salesforce Partner",
    description:
      "Continuing to build long-term partnerships by delivering secure, scalable and innovative Salesforce solutions.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <Container>

        <SectionHeading
          subtitle="OUR JOURNEY"
          title="Growing Together With Our Clients"
          description="Every milestone represents our commitment to innovation, customer success and Salesforce excellence."
        />

        <div className="relative mx-auto mt-24 max-w-5xl">

          {/* Center Line */}

          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 rounded-full bg-blue-100 lg:block"></div>

          <div className="space-y-16">

            {timeline.map((item, index) => (

              <div
                key={item.year}
                className={`relative flex flex-col items-center lg:flex-row ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                }`}
              >

                {/* Card */}

                <div className="w-full lg:w-5/12">

                  <div className="rounded-[30px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl">

                    <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                      {item.year}
                    </span>

                    <h3 className="mt-6 text-3xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-8 text-gray-600">
                      {item.description}
                    </p>

                  </div>

                </div>

                {/* Center Circle */}

                <div className="relative z-10 my-8 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-xl font-bold text-white shadow-xl lg:my-0">
                  {index + 1}
                </div>

                {/* Empty Side */}

                <div className="hidden lg:block lg:w-5/12"></div>

              </div>

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}