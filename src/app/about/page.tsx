import { AboutHero } from "@/components/sections/AboutHero";
import { WhyUs } from "@/components/sections/WhyUs";
import { Team } from "@/components/sections/Team";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "About - Upreach",
  description:
    "Innovation meets strategy, fueling growth. Get to know the team behind Upreach.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <WhyUs />
      <Team />
      <CTASection />
      <Footer />
    </main>
  );
}
