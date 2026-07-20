"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import Container from "./Container";
import ConsultationButton from "./Consultation/ConsultationButton";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Sales Cloud",
        href: "/services/sales-cloud",
      },
      {
        label: "Service Cloud",
        href: "/services/service-cloud",
      },
      {
        label: "Marketing Cloud",
        href: "/services/marketing-cloud",
      },
      {
        label: "Experience Cloud",
        href: "/services/experience-cloud",
      },
      {
        label: "Commerce Cloud",
        href: "/services/commerce-cloud",
      },
      {
        label: "Salesforce Development",
        href: "/services/salesforce-development",
      },
      {
        label: "CRM Integration",
        href: "/services/crm-integration",
      },
      {
        label: "Managed Support",
        href: "/services/managed-support",
      },
    ],
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
<header className="sticky top-0 z-50 border-b border-white/30 bg-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300">      <Container>
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
  <div
    key={item.label}
    className="group relative"
  >
    <Link
      href={item.href}
      className={`flex items-center gap-1 relative px-1 py-2 font-medium transition-all duration-300 ${
        pathname === item.href
          ? "text-blue-600"
          : "text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-600"
      }`}
    >
      {item.label}

      {item.children && (
        <ChevronDown
          size={16}
          className="transition-transform duration-300 group-hover:rotate-180"
        />
      )}

      {pathname === item.href && (
        <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"></span>
      )}
    </Link>
    {item.children && (
  <div className="invisible absolute left-0 top-full z-50 mt-4 w-[650px] translate-y-2 rounded-3xl border border-gray-200 bg-white p-6 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

    {/* Header */}
    <div className="mb-6 border-b border-gray-100 pb-4">
      <h3 className="text-xl font-bold text-gray-900">
        Salesforce Services
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        End-to-end Salesforce consulting, implementation and support services.
      </p>
    </div>

    {/* Two Column Grid */}
    <div className="grid grid-cols-2 gap-3">

      {item.children.map((child) => (
        <Link
          key={child.href}
          href={child.href}
          className="rounded-2xl p-4 transition-all duration-300 hover:bg-blue-50"
        >
          <h4 className="font-semibold text-gray-900">
            {child.label}
          </h4>

          <p className="mt-1 text-sm text-gray-500">
            Salesforce Consulting Service
          </p>
        </Link>
      ))}

    </div>

    {/* Featured CTA */}

<div className="mt-6 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">

  <h4 className="text-xl font-bold">
    Need help choosing the right Salesforce solution?
  </h4>

  <p className="mt-2 text-blue-100">
    Talk to our certified Salesforce consultants and get a personalized CRM strategy for your business.
  </p>

  <button className="mt-5 rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 transition hover:scale-105">
    Book Free Consultation
  </button>

</div>

    {/* Footer */}
    
    <div className="mt-6 border-t border-gray-100 pt-5">
      <Link
        href="/services"
        className="font-semibold text-blue-600 transition hover:text-blue-700"
      >
        View All Services →
      </Link>
    </div>

  </div>
)}
  </div>
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