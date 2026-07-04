import Badge from "./Badge";

type SectionHeadingProps = {
  subtitle: string;
  title: string;
  description: string;
  centered?: boolean;
  light?: boolean;
};

export default function SectionHeading({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      <Badge light={light}>
        {subtitle}
      </Badge>

      <h2
        className={`mt-4 text-4xl font-bold ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mt-6 text-lg leading-8 ${
          light ? "text-blue-100" : "text-gray-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}