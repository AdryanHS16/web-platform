import { Container } from "@/components/ui/Container";
import { BrandLink } from "@/components/ui/BrandLink";
import { AnchorLink } from "@/components/ui/AnchorLink";

const sections = [
  { label: "Services", href: "/#services" },
  { label: "Team", href: "/about" },
  { label: "Testimonials", href: "/#testimonials" },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container className="py-16 px-6 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Brand + newsletter */}
          <div className="max-w-[420px]">
            <BrandLink
              className="flex items-center gap-2 group w-fit"
              logoClassName="text-primary-1"
              textClassName="text-[22px] font-bold leading-[1.4] tracking-[-0.01em] text-white"
            />

            <h3 className="mt-8 text-[18px] font-semibold text-white">
              Stay Connected &amp; Informed
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/60">
              Subscribe to our newsletter for the marketing insights, trends, &amp;
              growth strategies to scale your business.
            </p>

            <form className="mt-6 flex items-center gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="h-11 w-full max-w-[240px] rounded-full border border-white/10 bg-white/5 px-5 text-[15px] text-white placeholder:text-white/40 focus:outline-none focus:border-primary-2/60 transition-colors"
              />
              <button
                type="submit"
                className="h-11 shrink-0 rounded-full bg-primary-2 px-6 text-[15px] font-medium text-dark hover:bg-primary-1 transition-colors cursor-pointer"
              >
                Get Notified
              </button>
            </form>
          </div>

          {/* Link column */}
          <div className="flex flex-col gap-4">
            <span className="text-[15px] font-semibold text-white">
              Sections
            </span>
            <ul className="flex flex-col gap-3">
              {sections.map((item) => (
                <li key={item.label}>
                  <AnchorLink
                    href={item.href}
                    className="text-[15px] text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[14px] text-white/50">
            Copyright &copy; {new Date().getFullYear()} &mdash; All Right Reserved
          </span>
          <span className="text-[14px] text-white/50">Created by Adryan</span>
        </div>
      </Container>
    </footer>
  );
}
