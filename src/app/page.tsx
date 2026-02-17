"use client";

import { useEffect } from "react";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  useEffect(() => {
    // Função para fazer scroll até a seção quando houver hash na URL
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const headerHeight = 70; // altura aproximada do header fixo
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementPosition - headerHeight,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    };

    // Executar quando o componente montar ou quando a URL mudar
    handleHashScroll();
    
    // Também escutar mudanças no hash
    window.addEventListener("hashchange", handleHashScroll);
    
    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
