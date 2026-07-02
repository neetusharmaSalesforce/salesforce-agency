import { siteConfig } from "../constants/site";
import Container from "./Container";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <Container>
        <nav className="flex h-20 items-center justify-between">

          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-blue-600">
              {siteConfig.companyName}
            </h1>
          </div>

          {/* Menu */}
          <ul className="hidden gap-8 font-medium text-gray-700 lg:flex">
            <li className="cursor-pointer hover:text-blue-600 transition">
              Home
            </li>

            <li className="cursor-pointer hover:text-blue-600 transition">
              Services
            </li>

            <li className="cursor-pointer hover:text-blue-600 transition">
              Industries
            </li>

            <li className="cursor-pointer hover:text-blue-600 transition">
              About
            </li>

            <li className="cursor-pointer hover:text-blue-600 transition">
              Contact
            </li>
          </ul>

          {/* Button */}
          <Button>
           Book a Call
          </Button>

        </nav>
      </Container>
    </header>
  );
}