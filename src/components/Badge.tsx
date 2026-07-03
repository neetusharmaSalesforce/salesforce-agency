type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
      {children}
    </p>
  );
}