import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'

export function Hero() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-24 lg:pt-44">
      <Container>
        <Heading as="h1" className="max-w-xl md:max-w-3xl">
          Renew your mindset.
        </Heading>

        <p className="mt-6 text-base md:text-lg leading-relaxed text-neutral-400 max-w-md md:max-w-xl">
          A space to rethink habits, focus and purpose.
        </p>
      </Container>
    </section>
  )
}
