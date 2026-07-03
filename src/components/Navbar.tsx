import Container from "./Container";
import Button from "./Button";

const menuItems = [
  "Services",
  "Industries",
  "About",
  "Case Studies",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600">
              SF Agency
            </h2>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden gap-8 lg:flex">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="font-medium text-gray-600 transition hover:text-blue-600"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Button */}
          <div className="hidden lg:block">
            <Button>
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Icon */}
          <button className="text-3xl lg:hidden">
            ☰
          </button>

        </div>
      </Container>
    </header>
  );
}