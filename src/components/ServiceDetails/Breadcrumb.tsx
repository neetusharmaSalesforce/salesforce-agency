import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type Props = {
  title: string;
};

export default function Breadcrumb({ title }: Props) {
  return (
    <nav className="mb-12 flex items-center gap-2 text-sm">

      <Link
        href="/"
        className="flex items-center gap-2 text-gray-500 transition hover:text-blue-600"
      >
        <Home size={16} />
        Home
      </Link>

      <ChevronRight
        size={16}
        className="text-gray-400"
      />

      <Link
        href="/services"
        className="text-gray-500 transition hover:text-blue-600"
      >
        Services
      </Link>

      <ChevronRight
        size={16}
        className="text-gray-400"
      />

      <span className="font-semibold text-blue-600">
        {title}
      </span>

    </nav>
  );
}