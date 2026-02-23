import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroImage } from "@/components/sections/HeroImage";
import { GridBackground } from "@/components/sections/GridBackground";
import { motion } from "framer-motion";
import { LogoMotion1, LogoMotion2, LogoMotion3, LogoMotion4, LogoMotion5 } from "@/components/icons"

const allLogos = [
  LogoMotion1,
  LogoMotion2,
  LogoMotion3,
  LogoMotion4,
  LogoMotion5,
]

export function Hero() {
  return (
<section className="relative bg-dark text-white overflow-hidden pt-22">      <GridBackground />

      <Container className="relative md:pt-10 md:pb-28">
        <div className="relative flex items-center justify-between gap-12">

          {/* content left */}
          <div className="max-w-155">

            <h1 className="text-[48px] md:text-[60px] mt-0 pt-0 font-semibold leading-[1.05] tracking-[-0.02em]">
              Grow your business,
              <br />
              master every move.
            </h1>

            <p className="mt-3 text-white/70 max-w-130 text-[18px] leading-7">
              Helping businesses thrive with innovative digital strategies,
              creative solutions, and measurable outcomes.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Button variant="primary" href="/contact-page">Book a call</Button>
              <Button variant="secondary" href="#about">Learn more</Button>
            </div>

            {/* Logos row */}
            <div className="mt-24 font-semibold relative w-112.5 h-13.75 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-dark to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-dark to-transparent z-10" />

              <motion.div
                className="flex items-center gap-16"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 35,
                  ease: "linear",
                  repeat: Infinity,
                }}
                style={{ width: "max-content" }}
              >
                {[...allLogos, ...allLogos].map((Logo, index) => (
                  <Logo
                    key={index}
                    width={152}
                    height={38}
                    className="opacity-30 hover:opacity-60 transition-opacity duration-300 text-white"
                  />
                ))}
              </motion.div>
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