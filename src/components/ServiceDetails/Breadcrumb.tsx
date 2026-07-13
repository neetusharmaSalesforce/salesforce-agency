type Props = {
  title: string;
};

export default function Breadcrumb({ title }: Props) {
  return (
    <nav className="mb-10 text-sm text-gray-500">
      <ol className="flex items-center gap-2">
        <li>
          <a href="/" className="hover:text-blue-600">
            Home
          </a>
        </li>

        <li>/</li>

        <li>
          <a href="/services" className="hover:text-blue-600">
            Services
          </a>
        </li>

        <li>/</li>

        <li className="font-semibold text-gray-900">
          {title}
        </li>
      </ol>
    </nav>
  );
}