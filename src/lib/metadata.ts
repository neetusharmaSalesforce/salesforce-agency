import type { Metadata } from "next";
import { services } from "@/data/services";

const BASE_URL = "https://www.sfagency.com";

export function generateServiceMetadata(
  slug: string
): Metadata {
  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {
      title: "Service Not Found",
      description: "Requested service could not be found.",
    };
  }

  const title = `${service.title} | SF Agency`;

  const description =
    service.heroDescription ??
    service.description;

  const url = `${BASE_URL}/services/${service.slug}`;

  return {
    title,

    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "SF Agency",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}