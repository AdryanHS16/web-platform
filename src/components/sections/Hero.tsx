import { Container } from '@/components/ui/Container'

export function Hero() {
  return (
    <section className="py-24">
      <Container>
        <h1 className="text-5xl font-bold leading-tight max-w-3xl">
          Renew your mindset.
        </h1>

        <p className="mt-6 text-lg text-neutral-400 max-w-xl">
          A journey of self-development, clarity and purpose.
        </p>
      </Container>
    </section>
  )
}
