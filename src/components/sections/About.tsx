import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'

export function About() {
  return (
    <section className="py-24 border-t border-neutral-800">
      <Container>
        <Heading as="h2" className="max-w-2xl">
          About the journey
        </Heading>

        <p className="mt-4 text-neutral-400 max-w-2xl">
          Renewed Mindset is about developing clarity, discipline and a
          healthier relationship with your own thoughts. It’s a space to
          rethink habits and create intentional growth.
        </p>
      </Container>
    </section>
  )
}
