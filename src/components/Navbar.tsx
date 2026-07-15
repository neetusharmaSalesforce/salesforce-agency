"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import Container from "./Container";
import ConsultationButton from "./Consultation/ConsultationButton";

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
          <nav className="hidden items-center gap-8 lg:flex">
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

          {/* Desktop Consultation Button */}
          <div className="hidden lg:block">
            <ConsultationButton />
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
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-gray-100 py-4 font-medium text-gray-700 transition hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Consultation Button */}
              <div
                className="mt-6"
                onClick={() => setMenuOpen(false)}
              >
                <ConsultationButton />
              </div>

            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}