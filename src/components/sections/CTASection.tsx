import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="bg-white pb-20 md:pb-24">
      <Container>
        <div className="relative mx-auto max-w-[1040px] overflow-hidden rounded-[32px] border border-white/10 bg-dark px-6 py-16 md:px-16 md:py-20 text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative z-10">
            <h2 className="text-[32px] md:text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
              Ready to elevate your brand <br className="hidden sm:block" />
              and unlock new growth?
            </h2>

            <p className="mt-5 mx-auto max-w-[460px] text-[16px] leading-relaxed text-white/65">
              With years of experience, we've helped businesses generate
              millions. Partner with us to scale confidently.
            </p>

            <div className="mt-8">
              <Button variant="primary" href="/contact-page">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
