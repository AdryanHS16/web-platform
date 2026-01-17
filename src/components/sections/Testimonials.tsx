import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'

const testimonials = [
  {
    name: 'Alex Morgan',
    text:
      'Renewed Mindset helped me gain clarity and rebuild my daily habits. The process feels natural and intentional.',
  },
  {
    name: 'Jordan Lee',
    text:
      'The simplicity of the approach made a huge difference. It changed the way I think and act every day.',
  },
  {
    name: 'Taylor Smith',
    text:
      'More focus, more discipline and a stronger sense of purpose. That’s what I gained from this journey.',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 border-t border-neutral-800">
      <Container>
        <Heading as="h2" className="max-w-2xl">
          What people are saying
        </Heading>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-lg border border-neutral-800 p-6"
            >
              <p className="text-neutral-300">
                “{testimonial.text}”
              </p>

              <span className="mt-4 block text-sm text-neutral-500">
                — {testimonial.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
