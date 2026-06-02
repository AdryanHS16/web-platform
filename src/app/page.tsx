import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Work } from "@/components/sections/Work";
import { Comparison } from "@/components/sections/Comparison";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Work />
      <Comparison />
      <Testimonials />
      <Footer />
    </>
  );
}
