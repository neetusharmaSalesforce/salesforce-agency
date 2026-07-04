"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

const menuItems = [
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Industries",
    href: "#",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Case Studies",
    href: "#",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
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
              key={item.label}
              href={item.href}
              className="font-medium text-gray-600 transition hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
          </nav>

          {/* Button */}
          <div className="hidden lg:block">
            <Button>
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </Container>
              {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-gray-200 bg-white lg:hidden">
            <Container>
              <nav className="flex flex-col py-6">

                {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="border-b border-gray-100 py-4 font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

                <div className="mt-6">
                  <div onClick={() => setMenuOpen(false)}>
                <Button>
                  Book Free Consultation
                </Button>
              </div>
                </div>

              </nav>
            </Container>
          </div>
        )}
    </header>
  );
}