"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import Container from "./Container";
import Button from "./Button";

const menuItems = [
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <h2 className="cursor-pointer text-2xl font-bold text-blue-600">
              SF Agency
            </h2>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden gap-8 lg:flex">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-medium text-gray-600 transition hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button>
                Book Free Consultation
              </Button>
            </Link>
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
                <Link
                  key={item.label}
                  href={item.href}
                  className="border-b border-gray-100 py-4 font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-6">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                >
                  <Button>
                    Book Free Consultation
                  </Button>
                </Link>
              </div>

            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}