"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Container, Button } from "@/components/ui";
import { Logo } from "../icons";

const navItems = [
  { label: "Services", href: "#services", isAnchor: true },
  { label: "Work", href: "#work", isAnchor: true },
  { label: "Testimonials", href: "#testimonials", isAnchor: true },
  { label: "About", href: "/about", isAnchor: false },
  { label: "Blog", href: "/blog", isAnchor: false },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getHref = (item: typeof navItems[0]) => {
    if (item.isAnchor && pathname !== "/") {
      return `/${item.href}`;
    }
    return item.href;
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#") && pathname !== "/") {
      e.preventDefault();
      const hash = href.replace("/#", "#");
      router.push(`/${hash}`);

      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const headerHeight = 88;
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;

          window.scrollTo({
            top: elementPosition - headerHeight,
            behavior: "smooth",
          });
        }
      }, 300);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark">
      <div className="flex mx-auto max-w-300">
        <nav className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Logo
              width={22}
              height={22}
              className="text-white/80 group-hover:text-white transition-colors duration-300"
            />
            <span className="text-white/80 group-hover:text-white transition-colors duration-300 text-[22px] font-bold leading-[1.4] tracking-[-0.01em]">
              Upreach
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={getHref(item)}
                  className="text-white/70 hover:text-white transition-colors duration-300 text-[16px] font-medium tracking-[0.01em]"
                  onClick={(e) => {
                    const href = getHref(item);
                    if (href.startsWith("/#")) {
                      handleAnchorClick(e, href);
                    }
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button variant="primary" href="/contact-page">Contact us</Button>
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
                    <Link
                      href={getHref(item)}
                      className="block text-white/70 hover:text-white transition-colors duration-300 text-lg font-medium py-3"
                      onClick={(e) => {
                        setIsMobileMenuOpen(false);
                        const href = getHref(item);
                        if (href.startsWith("/#")) {
                          handleAnchorClick(e, href);
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Button variant="primary" href="/contact-page">Contact us</Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
