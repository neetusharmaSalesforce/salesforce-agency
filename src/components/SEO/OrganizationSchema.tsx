export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "SF Agency",

    url: "https://www.sfagency.com",

    logo: "https://www.sfagency.com/android-chrome-512x512.png",

    description:
      "Salesforce Consulting, CRM Implementation, Salesforce Development, Integrations and Managed Support.",

    foundingDate: "2025",

    email: "contact@sfagency.com",

    telephone: "+91-9876543210",

    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },

    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}