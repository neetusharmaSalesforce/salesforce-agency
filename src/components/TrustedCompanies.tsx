import Container from "./Container";

const companies = [
  "TechNova",
  "CloudSync",
  "GlobalSoft",
  "DataFlow",
  "VisionX",
];

export default function TrustedCompanies() {
  return (
    <section className="border-y border-gray-200 bg-white py-12">
      <Container>
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
          Trusted by Growing Businesses
        </p>

        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-3 lg:grid-cols-5">
          {companies.map((company) => (
            <div
              key={company}
              className="rounded-xl border border-gray-200 bg-gray-50 py-5 text-lg font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              {company}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}