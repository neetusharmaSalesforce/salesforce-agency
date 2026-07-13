import { Service } from "@/data/services";

type Props = {
  service: Service;
};

export default function ServiceHero({ service }: Props) {
  const Icon = service.icon;

  return (
    <section className="rounded-3xl bg-blue-600 px-10 py-16 text-white">

      <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20">
        <Icon className="h-10 w-10" />
      </div>

      <h1 className="text-5xl font-bold">
        {service.title}
      </h1>

      <p className="mt-6 max-w-3xl text-xl leading-8 text-blue-100">
        {service.description}
      </p>

    </section>
  );
}