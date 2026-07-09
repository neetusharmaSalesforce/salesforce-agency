import Container from "./Container";
import Badge from "./Badge";

export default function ServicesHero() {
  return (
    <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 py-28 text-white">
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <Badge>
            Salesforce Consulting Services
          </Badge>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
            Salesforce Solutions That Drive Business Growth
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-blue-100">
            From CRM implementation to custom development, integrations,
            automation and long-term support — we deliver complete Salesforce
            solutions tailored to your business.
          </p>

        </div>

      </Container>
    </section>
  );
}