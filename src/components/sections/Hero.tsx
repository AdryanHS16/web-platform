import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'

export function Hero() {
  return (
    <section className="pt-32 pb-24">
      <Container>
        <Heading as="h1" className="max-w-3xl">
          Renew your mindset.
        </Heading>

        <p className="mt-6 text-lg text-neutral-300 max-w-xl">
          A space to rethink habits, focus and purpose.
        </p>
      </Container>
    </section>
  )
}
