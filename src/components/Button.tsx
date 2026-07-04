type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "white";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const baseClasses =
    "rounded-xl px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-1";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",

    secondary:
      "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100",

    white:
      "bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
}