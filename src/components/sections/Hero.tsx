import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'

export function Hero() {
  return (
    <section className="py-24">
      <Container>
        <Heading as="h1" className="max-w-2xl">
          Renew your mindset.
        </Heading>

        <p className="mt-4 text-neutral-400 max-w-xl">
          A space to rethink habits, focus and purpose.
        </p>
      </Container>
    </section>
  )
}
