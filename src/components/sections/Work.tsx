import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

const works = [
  {
    name: "Alex Morgan",
    text: "Renewed Mindset helped me gain clarity and rebuild my daily habits. The process feels natural and intentional.",
  },
  {
    name: "Jordan Lee",
    text: "The simplicity of the approach made a huge difference. It changed the way I think and act every day.",
  },
  {
    name: "Taylor Smith",
    text: "More focus, more discipline and a stronger sense of purpose. That’s what I gained from this journey.",
  },
];

export function Work() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 border-t border-neutral-800"
    >
      <Container>
        <Heading as="h2" className="max-w-2xl">
          What people are saying
        </Heading>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {works.map((work) => (
            <div
              key={work.name}
              className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6"
            >
              <p className="text-sm md:text-base text-neutral-200">
                “{work.text}”
              </p>

              <span className="mt-4 block text-sm text-neutral-500">
                — {work.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
