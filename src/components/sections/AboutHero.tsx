import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GridBackground } from "@/components/sections/GridBackground";
import { WhyUsIconPlay } from "@/components/icons";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutHero() {
  return (
    <section
      id="about-hero"
      className="relative overflow-hidden bg-dark text-white pt-28 pb-12 md:pt-32 md:pb-16"
    >
      <GridBackground />

      <Container className="relative z-10">
        <ScrollReveal className="mx-auto max-w-[680px] text-center">
          <h1 className="text-[34px] md:text-[52px] font-semibold leading-[1.05] tracking-[-0.02em]">
            Innovation meets <br className="hidden sm:block" />
            strategy, <span className="text-primary-1">fueling growth.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-[480px] text-[15px] md:text-[17px] leading-relaxed text-white/65">
            Helping businesses thrive with innovative digital strategies,
            creative solutions, and measurable outcomes.
          </p>
        </ScrollReveal>

        <ScrollReveal className="relative mx-auto mt-8 md:mt-10 w-full max-w-[960px] rounded-[32px] border border-white/10 bg-white/4 p-2" delay={0.15}>
          <div className="relative aspect-3/2 sm:aspect-7/3 w-full overflow-hidden rounded-[24px]">
            <Image
              src="/img/about-hero.png"
              alt="The Upreach team collaborating"
              fill
              priority
              sizes="(max-width: 1040px) 100vw, 1040px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
          </div>

          <button
            type="button"
            className="group absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-3 rounded-full bg-black/40 px-3 py-2 pr-5 text-white backdrop-blur-lg border border-white/15 shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-colors hover:bg-black/55 cursor-pointer"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-1 text-dark">
              <WhyUsIconPlay width={12} height={12} className="ml-0.5" />
            </span>
            <span className="text-[15px] font-medium tracking-tight whitespace-nowrap">
              Know our story
            </span>
          </button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
