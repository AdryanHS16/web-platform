import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="bg-dark pb-20 md:pb-28">
      <Container>
        <div className="mx-auto max-w-[900px] rounded-[32px] border border-white/10 bg-[#001a1f] px-6 py-14 md:px-16 md:py-16 text-center">
          <h2 className="text-[28px] md:text-[36px] font-semibold leading-[1.2] tracking-[-0.02em] text-white">
            Ready to elevate your brand and unlock new growth?
          </h2>

          <p className="mt-4 mx-auto max-w-[540px] text-[16px] leading-relaxed text-white/65">
            With years of experience, our mission is to provide you with the
            tools and strategies to scale and grow your business successfully.
          </p>

          <div className="mt-8">
            <Button variant="primary" href="/contact-page">
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
