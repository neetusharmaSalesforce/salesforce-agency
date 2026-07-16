export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: "SF Agency",

    url: "https://www.sfagency.com",

    description:
      "Salesforce Consulting, CRM Implementation, Salesforce Development, Integrations and Managed Support.",

    publisher: {
      "@type": "Organization",
      name: "SF Agency",
    },
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