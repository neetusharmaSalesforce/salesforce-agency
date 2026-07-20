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
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 py-28 text-white">

      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

      <Container>

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
            Salesforce Consulting
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            {description}
          </p>

          <div className="mt-12 flex justify-center">
            <ConsultationButton />
          </div>

        </div>

      </Container>
    </section>
  );
}