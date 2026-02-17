import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'

export const metadata = {
  title: 'Blog - Renewed Mindset',
  description: 'Articles about clarity, discipline and intentional growth',
}

export default function BlogPage() {
  return (
    <main>
      <section className="pt-24 pb-20 md:pt-32 md:pb-24">
        <Container>
          <Heading as="h1" className="max-w-3xl">
            Blog the journey
          </Heading>

          <div className="mt-8 space-y-6 text-neutral-300 max-w-2xl">
            <p className="text-lg">
              Renewed Mindset is Blog developing clarity, discipline and a
              healthier relationship with your own thoughts. It's a space to
              rethink habits and create intentional growth.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 border-t border-neutral-800">
        <Container>
          <Heading as="h2" className="max-w-2xl">
            Latest Articles
          </Heading>

          <p className="mt-4 text-neutral-400 max-w-2xl">
            Coming soon - articles about mindset, habits, and personal growth.
          </p>
        </Container>
      </section>
    </main>
  )
}
