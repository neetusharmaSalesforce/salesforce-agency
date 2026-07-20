import Link from "next/link";

export default function ServiceCTA() {
  return (
    <section className="relative mt-28 overflow-hidden rounded-[36px] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 px-8 py-20 text-center text-white shadow-2xl lg:px-16">

      {/* Background Blur */}

      <div className="absolute -left-24 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"></div>

      <div className="relative z-10">

        <span className="rounded-full bg-white/15 px-5 py-2 text-sm font-semibold backdrop-blur">
          Let's Build Something Amazing
        </span>

        <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-bold leading-tight lg:text-6xl">
          Ready To Transform Your Business With Salesforce?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">
          Whether you're implementing Salesforce for the first time or
          optimizing an existing CRM, our certified consultants are ready
          to help you achieve measurable business results.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/contact"
            className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:scale-105 hover:bg-blue-50"
          >
            Book Free Consultation
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition-all duration-300 hover:bg-white/20"
          >
            Contact Our Team
          </Link>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          <div>
            <h3 className="text-4xl font-bold">
              250+
            </h3>

            <p className="mt-2 text-blue-100">
              Successful Projects
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">
              99%
            </h3>

            <p className="mt-2 text-blue-100">
              Client Satisfaction
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">
              24/7
            </h3>

            <p className="mt-2 text-blue-100">
              Expert Support
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}