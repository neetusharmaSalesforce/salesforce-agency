import Container from "./Container";

type Props = {
  title: string;
  overview: string;
};

export default function ServiceOverview({
  title,
  overview,
}: Props) {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-4xl">

          <h2 className="text-4xl font-bold text-gray-900">
            Why {title}?
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {overview}
          </p>

        </div>
      </Container>
    </section>
  );
}