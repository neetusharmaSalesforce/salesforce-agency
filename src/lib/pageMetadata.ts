import type { Metadata } from "next";

const BASE_URL = "https://www.sfagency.com";

type MetadataProps = {
  title: string;
  description: string;
  path?: string;
};

export function generatePageMetadata({
  title,
  description,
  path = "",
}: MetadataProps): Metadata {
  const url = `${BASE_URL}${path}`;

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

      images: [
        {
          url: `${BASE_URL}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "SF Agency",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,

      images: [`${BASE_URL}/images/og-image.jpg`],
    },
  };
}