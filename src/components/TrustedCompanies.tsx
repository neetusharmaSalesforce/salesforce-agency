import Container from "./Container";
import { trustedCompanies } from "@/data/trustedCompanies";

export default function TrustedCompanies() {
  const companies = [...trustedCompanies, ...trustedCompanies];

  return (
    <section className="overflow-hidden border-y border-gray-200 bg-white py-20">

      <Container>

        <div className="mb-14 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            TRUSTED WORLDWIDE
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Trusted by Leading Businesses
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We help startups, SMBs and enterprises transform their customer
            relationships with Salesforce consulting, implementation and
            managed services.
          </p>

        </div>

      </Container>

      {/* Logo Slider */}

      <div className="group relative">

        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent"></div>

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent"></div>

        <div className="flex w-max animate-[scroll_30s_linear_infinite] gap-8 group-hover:[animation-play-state:paused]">

          {companies.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex h-24 min-w-[220px] items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 px-10 text-xl font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 hover:shadow-xl"
            >
              {company}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}