import { Container } from "@/components/ui/Container";
import { GridBackground } from "@/components/sections/GridBackground";

export function BlogHero() {
  return (
    <section className="relative bg-dark text-white overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
      <GridBackground />

      <Container className="relative z-10">
        <div className="mx-auto max-w-[720px] text-center px-4">
          <div className="relative mx-auto max-w-[640px] rounded-2xl border border-white/10 px-6 py-10 md:px-10 md:py-12">
            <h1 className="text-[36px] md:text-[48px] lg:text-[52px] font-semibold leading-[1.15] tracking-[-0.02em] text-white">
              Expert insights & strategies for{" "}
              <span className="text-primary-1">growth</span>
            </h1>
          </div>

          <p className="mt-8 text-[16px] md:text-[18px] leading-relaxed text-white/70 max-w-[560px] mx-auto">
            Stay ahead with expert marketing tips, industry trends, and
            actionable insights to scale and grow your business successfully.
          </p>
        </div>
      </Container>
    </section>
  );
}
