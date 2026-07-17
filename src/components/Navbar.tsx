"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import Container from "./Container";
import ConsultationButton from "./Consultation/ConsultationButton";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 shadow-sm backdrop-blur-xl transition-all duration-300">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <h2 className="cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent transition hover:scale-105">
            SF Agency
          </h2>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 lg:flex">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-1 py-2 font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                
              >
                {item.label}

                {pathname === item.href && (
                <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"></span>                )}
                
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
            className="rounded-xl p-2 transition hover:bg-blue-50 hover:text-blue-600 lg:hidden"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </Container>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white/95 backdrop-blur-xl lg:hidden">
          <Container>
            <nav className="flex flex-col py-6">

              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg border-b border-gray-100 px-2 py-4 font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
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