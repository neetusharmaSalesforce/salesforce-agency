import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "@/data/services";

type Props = {
  currentSlug: string;
  services: Service[];
};

export default function RelatedServices({
  currentSlug,
  services,
}: Props) {
  const relatedServices = services
    .filter((service) => service.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="mt-24">

      <div className="text-center">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Explore More
        </span>

        <h2 className="mt-6 text-5xl font-bold text-gray-900">
          Related Services
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Discover additional Salesforce services that can help your business
          improve efficiency, increase revenue and deliver better customer experiences.
        </p>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {relatedServices.map((service) => {
          const Icon = service.icon;

          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-600 hover:shadow-2xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white transition-transform duration-500 group-hover:rotate-6">

                <Icon className="h-8 w-8" />

              </div>

              <h3 className="mt-8 text-2xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {service.description}
              </p>

              <div className="mt-8 flex items-center font-semibold text-blue-600">

                View Service

                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />

              </div>

            </Link>
          );
        })}

      </div>

    </section>
  );
}