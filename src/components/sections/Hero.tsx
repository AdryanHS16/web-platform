import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroImage } from "@/components/sections/HeroImage";
import { GridBackground } from "@/components/sections/GridBackground";

export function Hero() {
  return (
    <section className="relative bg-dark text-white overflow-hidden">
      <GridBackground />

      <Container className="relative pt-28 pb-24 md:pt-36 md:pb-28">
        <div className="relative flex items-center justify-between gap-12">

          {/* content left */}
          <div className="max-w-[620px]">

            <h1 className="text-[44px] md:text-[64px] font-semibold leading-[1.05] tracking-[-0.02em]">
              Grow your business,
              <br />
              master every move.
            </h1>

            <p className="mt-6 text-white/70 max-w-[520px] text-[18px] leading-[28px]">
              Helping businesses thrive with innovative digital strategies,
              creative solutions, and measurable outcomes.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Button variant="primary">Book a call</Button>
              <Button variant="secondary">Learn more</Button>
            </div>

            {/* Logos row */}
            <div className="mt-12 flex items-center gap-10 opacity-40">
              <span className="text-[18px] font-semibold tracking-[-0.01em]">
                logoipsum
              </span>
              <span className="text-[18px] font-semibold tracking-[-0.01em]">
                logoipsum
              </span>
              <span className="text-[18px] font-semibold tracking-[-0.01em]">
                logoipsum
              </span>
            </div>

          </div>

          {/* Image Right */}
          <div className="shrink-0">
            <HeroImage />
          </div>

        </div>
      </Container>
    </section>
  );
}