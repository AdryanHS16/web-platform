import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface CTASectionProps {
  fullHeight?: boolean;
  embedded?: boolean;
  withTopSpacing?: boolean;
}

function CTACard({ large = false }: { large?: boolean }) {
  return (
    <ScrollReveal amount={0.25}>
      <div
        className={`relative mx-auto max-w-[1040px] overflow-hidden rounded-[32px] border border-white/10 bg-dark px-6 text-center md:px-16 ${
          large ? "py-20 md:py-28" : "py-16 md:py-20"
        }`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10">
          <h2 className="text-[32px] md:text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
            Ready to elevate your brand <br className="hidden sm:block" />
            and unlock new growth?
          </h2>

          <p className="mx-auto mt-5 max-w-[460px] text-[16px] leading-relaxed text-white/65">
            With years of experience, we've helped businesses generate
            millions. Partner with us to scale confidently.
          </p>

          <div className="mt-8">
            <Button variant="primary" href="/contact-page">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function CTASection({
  fullHeight = false,
  embedded = false,
  withTopSpacing = false,
}: CTASectionProps) {
  if (embedded) {
    return (
      <Container className="px-6 pb-10 md:pb-14">
        <CTACard large />
      </Container>
    );
  }

  const sectionPadding = withTopSpacing
    ? "py-20 md:py-24"
    : "pb-20 md:pb-24";

  return (
    <section
      className={`bg-white ${
        fullHeight
          ? "flex min-h-dvh snap-start snap-always flex-col justify-end py-12 md:py-16"
          : sectionPadding
      }`}
    >
      <Container className="px-6 lg:px-12">
        <CTACard />
      </Container>
    </section>
  );
}
