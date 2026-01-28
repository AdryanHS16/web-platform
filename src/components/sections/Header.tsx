"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Container } from "../ui/Container";
import { Logo } from "@/assets/img/Logo";
import Button from "./buttons";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Previne scroll do body quando menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-dark">
      <Container>
        <nav className="flex items-center justify-between h-17.25">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 z-50 h-7.75"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Logo width={22} height={22} />
            <span className="text-white font-semibold text-xl">Upreach</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-neutral-200 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button>Contact us</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden fixed inset-0 bg-dark transition-all duration-300 ${
              isMobileMenuOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
            style={{ top: "0" }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              <ul className="flex flex-col items-center gap-6 w-full">
                {navItems.map((item) => (
                  <li key={item.href} className="w-full text-center">
                    <Link
                      href={item.href}
                      className="block text-neutral-200 hover:text-white transition-colors duration-200 text-lg font-medium py-3"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button>Contact us</Button>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
