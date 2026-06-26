import { Container } from "@/components/ui/Container";
import { GridBackground } from "@/components/sections/GridBackground";
import {
  ScrollReveal,
  ScrollRevealGroup,
  ScrollRevealItem,
} from "@/components/ui/ScrollReveal";

const awards = [
  {
    title: "Best Digital Marketing Agency",
    source: "Awarded by Digital Excellence Awards",
    year: "2024",
  },
  {
    title: "Top SEO Innovation Leader",
    source: "Recognized by Search Marketing Hub",
    year: "2023",
  },
  {
    title: "Most Disruptive Strategy",
    source: "Honored at the MarTech Summit",
    year: "2023",
  },
  {
    title: "Excellence in Brand Growth",
    source: "Awarded by Global Brand Forum",
    year: "2022",
  },
];

export function AboutAwards() {
  return (
    <section className="relative overflow-hidden bg-dark text-white py-20 md:py-28">
      <GridBackground />

      <Container className="relative z-10 px-6 lg:px-12">
        <ScrollReveal className="mx-auto max-w-[640px] text-center">
          <h2 className="text-[32px] md:text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
            Awards and Recognitions
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-[16px] leading-relaxed text-white/65">
            Recognized for delivering outstanding digital marketing strategies,
            results, and creative excellence.
          </p>
        </ScrollReveal>

        <ScrollRevealGroup
          className="mx-auto mt-12 flex max-w-[760px] flex-col gap-4"
          stagger={0.1}
        >
          {awards.map((award) => (
            <ScrollRevealItem key={award.title}>
              <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#FFFFFF0A] px-6 py-5 transition-colors duration-300 hover:bg-[#FFFFFF14] md:px-8">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[17px] md:text-[19px] font-semibold tracking-tight text-white">
                    {award.title}
                  </h3>
                  <p className="text-[14px] text-white/55">{award.source}</p>
                </div>
                <span className="shrink-0 text-[15px] font-medium text-primary-1">
                  {award.year}
                </span>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </Container>
    </section>
  );
}
