"use client";

import { useState, useEffect } from "react";
import { Container, Button } from "@/components/ui";
import { BrandLink } from "@/components/ui/BrandLink";
import { AnchorLink } from "@/components/ui/AnchorLink";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark">
      <div className="flex mx-auto max-w-300 px-5 sm:px-6 lg:px-0">
        <nav className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <BrandLink
            className="flex items-center gap-2 group"
            logoClassName="text-white/80 group-hover:text-white transition-colors duration-300"
            textClassName="text-white/80 group-hover:text-white transition-colors duration-300 text-[22px] font-bold leading-[1.4] tracking-[-0.01em]"
            onNavigate={() => setIsMobileMenuOpen(false)}
          />

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <AnchorLink
                  href={item.href}
                  className="text-white/70 hover:text-white transition-colors duration-300 text-[16px] font-medium tracking-[0.01em]"
                >
                  {item.label}
                </AnchorLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button variant="primary" href="/contact-page">
              Contact us
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
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
          >
            <div className="flex flex-col items-center justify-center h-full gap-10 px-6">
              <ul className="flex flex-col items-center gap-8 w-full">
                {navItems.map((item) => (
                  <li key={item.href} className="w-full text-center">
                    <AnchorLink
                      href={item.href}
                      className="block text-white/70 hover:text-white transition-colors duration-300 text-lg font-medium py-3"
                      onNavigate={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </AnchorLink>
                  </li>
                ))}
              </ul>

              <Button variant="primary" href="/contact-page">
                Contact us
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
