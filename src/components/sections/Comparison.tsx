import { Container } from "@/components/ui/Container";
import {
  ScrollReveal,
  ScrollRevealGroup,
  ScrollRevealItem,
} from "@/components/ui/ScrollReveal";
import { GridBackground } from "@/components/sections/GridBackground";
import {
  CompareIconCheck,
  CompareIconClose,
  Logo,
} from "@/components/icons";

const othersAgencies = [
  "Generic, one-size-fits-all strategies",
  "Focus on vanity metrics (likes, shares)",
  "Slow response times and poor communication",
  "Minimal post-launch support or guidance",
  "Use outdated marketing techniques",
];

const upreachPoints = [
  "Custom strategies tailored to your business goals",
  "Focus on real KPIs like leads, conversions, and ROI",
  "Transparent communication and dedicated support",
  "Use the latest tools and data-driven marketing tactics",
  "Provide long-term support and optimization",
];

export function Comparison() {
  return (
    <section className="relative bg-dark text-white py-18 md:py-20 overflow-hidden">
      <GridBackground />

      <Container className="relative z-10">
        <ScrollReveal className="max-w-[700px] mx-auto text-center mb-16 px-4">
          <h2 className="text-[48px] md:text-[46px] font-semibold leading-[1.05] tracking-[-0.02em] text-white mb-6">
            Why Upreach Stands Out
          </h2>
          <p className="mt-3 text-white/70 max-w-130 mx-auto text-[16px] leading-7">
            Here's how Upreach delivers more value, clarity, and results
            compared to typical service providers.
          </p>
        </ScrollReveal>

        <ScrollRevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto px-4" stagger={0.15}>
          <ScrollRevealItem>
            <div className="rounded-[24px] border border-white/10 bg-[#FFFFFF0A] p-8 md:p-10">
              <h3 className="text-center text-[22px] font-semibold tracking-tight text-white/80 mb-8">
                Others Agencies
              </h3>

              <ul className="flex flex-col gap-5">
                {othersAgencies.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="shrink-0 text-white/35">
                      <CompareIconClose width={20} height={20} />
                    </span>
                    <span className="text-[15px] leading-normal text-white/55">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <div className="relative overflow-hidden rounded-[24px] border border-primary-2/40 bg-linear-to-br from-primary-2/25 via-primary-2/5 to-transparent p-8 md:p-10">
              <div
                className="pointer-events-none absolute -top-16 -right-10 w-[260px] h-[260px] bg-primary-2/25 blur-[90px] rounded-full"
                aria-hidden="true"
              />

              <h3 className="relative flex items-center justify-center gap-2 text-[22px] font-semibold tracking-tight text-white mb-8">
                <span className="text-primary-1">
                  <Logo width={20} height={20} />
                </span>
                Upreach
              </h3>

              <ul className="relative flex flex-col gap-5">
                {upreachPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="shrink-0 text-primary-1">
                      <CompareIconCheck width={20} height={20} />
                    </span>
                    <span className="text-[15px] leading-normal text-white/90">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollRevealItem>
        </ScrollRevealGroup>
      </Container>
    </section>
  );
}
