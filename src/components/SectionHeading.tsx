import Badge from "./Badge";
type SectionHeadingProps = {
  subtitle: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  subtitle,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Badge>
       {subtitle}
      </Badge>

      <h2 className="mt-4 text-4xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        {description}
      </p>
    </div>
  );
}