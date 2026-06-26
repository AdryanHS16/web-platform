import { Container } from "@/components/ui/Container";
import { GridBackground } from "@/components/sections/GridBackground";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Contact - Upreach",
  description: "Let's connect & bring your ideas to life.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-dark text-white pt-32 pb-20 md:pt-40 md:pb-28">
        <GridBackground />
        <Container className="relative z-10 text-center">
          <ScrollReveal>
            <h1 className="mx-auto max-w-[640px] text-[40px] md:text-[56px] font-medium leading-[1.1] tracking-[-0.01em]">
              Let&apos;s connect &amp; bring your{" "}
              <span className="text-primary-1">ideas to life</span>
            </h1>
            <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-relaxed text-white/65">
              We&apos;d love to hear from you! Fill out the form below, and let&apos;s
              discuss how we can help you achieve your goals.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <ScrollReveal delay={0.1}>
            <ContactForm />
          </ScrollReveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
