import Container from "./Container";
import Button from "./Button";
import SectionHeading from "./SectionHeading";

export default function CTA() {
  return (
    <section className="bg-blue-600 py-24">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <SectionHeading
            subtitle="Get Started"
            title="Ready to Transform Your Salesforce CRM?"
            description="Let's discuss your business goals and build a Salesforce solution tailored to your needs."
            light
            />
          <div className="mt-10 flex justify-center">

            <Button variant="white">
             Book Free Consultation
            </Button>

          </div>

        </div>

      </Container>
    </section>
  );
}