import type { MetadataRoute } from "next";

const BASE_URL = "https://www.sfagency.com";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "SF Agency",
    short_name: "SF Agency",
    description:
      "Salesforce Consulting, CRM Implementation, Custom Development, Integrations and Managed Services.",

    start_url: "/",
    scope: "/",

    display: "standalone",
    orientation: "portrait",

    background_color: "#ffffff",
    theme_color: "#2563eb",

    lang: "en",
    dir: "ltr",

    categories: [
      "business",
      "technology",
      "productivity",
    ],

    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/maskable-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],

    screenshots: [
      {
        src: "/screenshots/home-desktop.png",
        sizes: "1440x900",
        type: "image/png",
        form_factor: "wide",
      },
      {
        src: "/screenshots/home-mobile.png",
        sizes: "390x844",
        type: "image/png",
      },
    ],

    shortcuts: [
      {
        name: "Services",
        short_name: "Services",
        url: "/services",
      },
      {
        name: "Contact",
        short_name: "Contact",
        url: "/contact",
      },
      {
        name: "Blog",
        short_name: "Blog",
        url: "/blog",
      },
    ],
  };
}