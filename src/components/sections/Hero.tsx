import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroImage } from "@/components/sections/HeroImage";
import { GridBackground } from "@/components/sections/GridBackground";
import { motion } from "framer-motion";
import {
  LogoMotion1,
  LogoMotion2,
  LogoMotion3,
  LogoMotion4,
  LogoMotion5,
} from "@/components/icons";

const clientBrands = [
  { Logo: LogoMotion1, name: "NexusTech" },
  { Logo: LogoMotion2, name: "AuraPay" },
  { Logo: LogoMotion3, name: "Vortex Digital" },
  { Logo: LogoMotion4, name: "Nova Concept" },
  { Logo: LogoMotion5, name: "Quantum Labs" },
];

export function Hero() {
  return (
    <section className="relative bg-dark text-white overflow-hidden pt-22">
      {" "}
      <GridBackground />
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
              <Button variant="primary" href="/contact-page">
                Book a call
              </Button>
              <Button variant="secondary" href="#about">
                Learn more
              </Button>
            </div>

            {/* Logos row */}
            <div className="mt-24 relative w-full max-w-5xl overflow-hidden flex items-center h-20">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent z-10" />

              {/* Container animado */}
              <motion.div
                className="flex items-center gap-18 w-max pl-12"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 120,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {[...clientBrands, ...clientBrands].map((brand, index) => {
                  const { Logo, name } = brand;

                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 flex items-center justify-center gap-4 group cursor-pointer"
                    >
                      <Logo
                        width={32}
                        height={32}
                        className="text-white opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <span className="text-white opacity-40 group-hover:opacity-100 transition-opacity duration-300 font-medium text-lg tracking-wide whitespace-nowrap">
                        {name}
                      </span>
                    </div>
                  );
                })}
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
