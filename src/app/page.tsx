"use client";

import { useEffect } from "react";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Work } from "@/components/sections/Work";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const headerHeight = 70;
            const elementPosition =
              element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementPosition - headerHeight,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    };

    handleHashScroll();

    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Work />
      <Testimonials />
      <Footer />
    </>
  );
}
