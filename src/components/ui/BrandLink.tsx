"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/icons";

interface BrandLinkProps {
  className?: string;
  logoClassName?: string;
  textClassName?: string;
  onNavigate?: () => void;
}

export function BrandLink({
  className = "",
  logoClassName = "",
  textClassName = "",
  onNavigate,
}: BrandLinkProps) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();
    // Se já estiver na home, rola para o topo mesmo que a URL já contenha o hash
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link href="/#hero" className={className} onClick={handleClick}>
      <Logo width={22} height={22} className={logoClassName} />
      <span className={textClassName}>Upreach</span>
    </Link>
  );
}
