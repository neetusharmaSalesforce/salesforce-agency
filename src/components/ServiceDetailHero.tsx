import Container from "./Container";
import ConsultationButton from "./Consultation/ConsultationButton";

type Props = {
  title: string;
  description: string;
};

export default function ServiceDetailHero({
  title,
  description,
}: Props) {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Salesforce Service
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            {description}
          </p>

          <div className="mt-10 flex justify-center">
            <ConsultationButton />
          </div>

        </div>
      </Container>
    </section>
  );
}