import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-6xl px-6">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 px-10 py-20 text-white shadow-2xl lg:px-20">

          {/* Background Blur */}

          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative z-10 text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur">

              <Mail size={36} />

            </div>

            <h2 className="mt-8 text-5xl font-bold">
              Stay Updated with Salesforce Insights
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-blue-100">
              Get expert Salesforce tutorials, CRM best practices,
              implementation guides and industry insights delivered
              directly to your inbox.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

              <Link
                href="/contact"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition duration-300 hover:scale-105"
              >
                Contact Our Experts
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition duration-300 hover:bg-white/20"
              >
                Explore Services

                <ArrowRight
                  size={20}
                  className="ml-2"
                />

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}