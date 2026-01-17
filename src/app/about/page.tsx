import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'

export const metadata = {
  title: 'About - Renewed Mindset',
  description: 'Learn more about our journey and mission',
}

export default function AboutPage() {
  return (
    <main>
      <section className="pt-24 pb-20 md:pt-32 md:pb-24">
        <Container>
          <Heading as="h1" className="max-w-3xl">
            About Renewed Mindset
          </Heading>

          <div className="mt-8 space-y-6 text-neutral-300 max-w-2xl">
            <p className="text-lg">
              Renewed Mindset was created to help people develop clarity,
              discipline and a healthier relationship with their own thoughts.
            </p>

            <p>
              We believe that personal growth starts with intentional habits
              and a clear mindset. Our approach is simple, practical and
              focused on long-term transformation.
            </p>

            <p>
              Whether you're looking to reduce mental noise, build better
              habits, or reconnect with your purpose, we're here to support
              your journey.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 border-t border-neutral-800">
        <Container>
          <Heading as="h2" className="max-w-2xl">
            Our Mission
          </Heading>

          <p className="mt-4 text-neutral-400 max-w-2xl">
            To empower individuals to rethink their habits, focus on what
            truly matters, and create lasting change through clarity and
            intentional action.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28 border-t border-neutral-800">
        <Container>
          <Heading as="h2" className="max-w-2xl">
            Our Values
          </Heading>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/20 p-6">
              <h3 className="text-xl font-medium text-neutral-100">
                Clarity
              </h3>
              <p className="mt-2 text-neutral-400">
                Clear thinking leads to better decisions and a more peaceful mind.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/20 p-6">
              <h3 className="text-xl font-medium text-neutral-100">
                Discipline
              </h3>
              <p className="mt-2 text-neutral-400">
                Consistent action creates lasting transformation.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/20 p-6">
              <h3 className="text-xl font-medium text-neutral-100">
                Intentionality
              </h3>
              <p className="mt-2 text-neutral-400">
                Every choice matters when made with purpose.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/20 p-6">
              <h3 className="text-xl font-medium text-neutral-100">
                Growth
              </h3>
              <p className="mt-2 text-neutral-400">
                Continuous improvement is the path to a better life.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
