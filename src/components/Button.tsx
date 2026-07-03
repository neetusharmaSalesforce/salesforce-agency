type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const baseClasses =
    "rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:scale-105";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",

    secondary:
      "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
}