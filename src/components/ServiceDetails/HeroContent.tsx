import Link from "next/link";
import { Service } from "@/data/services";

type Props = {
  service: Service;
};

export default function HeroContent({
  service,
}: Props) {
  const Icon = service.icon;

  return (
    <div>

      <span className="inline-flex items-center rounded-full bg-white/15 px-5 py-2 text-sm font-semibold backdrop-blur">
        Salesforce Consulting Service
      </span>

      <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur">
        <Icon className="h-10 w-10" />
      </div>

      <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-6xl">
        {service.title}
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-9 text-blue-100">
        {service.description}
      </p>

      {/* CTA */}

      <div className="mt-10 flex flex-wrap gap-5">

        <Link
          href="/contact"
          className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
        >
          Book Free Consultation
        </Link>

        <Link
          href="/contact"
          className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
        >
          Talk to Expert
        </Link>

      </div>

      {/* Stats */}

      <div className="mt-14 grid grid-cols-3 gap-8">

        <div>
          <h3 className="text-4xl font-bold">
            200+
          </h3>

          <p className="mt-2 text-blue-100">
            Projects
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold">
            99%
          </h3>

          <p className="mt-2 text-blue-100">
            Satisfaction
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold">
            24/7
          </h3>

          <p className="mt-2 text-blue-100">
            Support
          </p>
        </div>

      </div>

    </div>
  );
}