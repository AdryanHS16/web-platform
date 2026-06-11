import { AboutHero } from "@/components/sections/AboutHero";
import { AboutClosing } from "@/components/sections/AboutClosing";
import { WhyUs } from "@/components/sections/WhyUs";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "About - Upreach",
  description:
    "Innovation meets strategy, fueling growth. Get to know the team behind Upreach.",
};

export default function AboutPage() {
  return (
    <main className="snap-y snap-mandatory">
      <AboutHero />
      <WhyUs fullHeight />
      <AboutClosing />
      <Footer />
    </main>
  );
}
