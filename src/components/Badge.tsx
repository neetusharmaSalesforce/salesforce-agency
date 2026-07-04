type BadgeProps = {
  children: React.ReactNode;
  light?: boolean;
};

export default function Badge({
  children,
  light = false,
}: BadgeProps) {
  return (
    <p
      className={`mb-4 text-sm font-semibold uppercase tracking-[0.35em] ${
        light ? "text-blue-200" : "text-blue-600"
      }`}
    >
      {children}
    </p>
  );
}