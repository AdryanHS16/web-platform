"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const HEADER_OFFSET = 88;

interface AnchorLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onNavigate?: () => void;
}

export function AnchorLink({
  href,
  className = "",
  children,
  onNavigate,
}: AnchorLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  const hashIndex = href.indexOf("#");
  const isHashLink = hashIndex !== -1;
  const hash = isHashLink ? href.slice(hashIndex) : "";

  const scrollToHash = () => {
    const element = document.querySelector(hash);
    if (element) {
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();
    if (!isHashLink) return;

    if (pathname === "/") {
      // Já na home: força a rolagem mesmo que a URL já contenha o hash
      e.preventDefault();
      scrollToHash();
      window.history.replaceState(null, "", hash);
    } else {
      // Em outra página: navega para a home e depois rola até a seção
      e.preventDefault();
      router.push(href);
      setTimeout(scrollToHash, 300);
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
