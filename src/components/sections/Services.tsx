import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'

const services = [
  {
    title: 'Clarity',
    description: 'Develop a clearer mindset to make better decisions and reduce mental noise.',
  },
  {
    title: 'Discipline',
    description:'Build consistent habits that support long-term personal growth.',
  },
  {
    title: 'Purpose',
    description:'Reconnect with what truly matters and act with intention.',
  },
]

export function Services() {
  return (
    <section className="py-20 md:py-28 border-t border-neutral-800">
      <Container>
        <Heading as="h2" className="max-w-2xl">
          What we focus on
        </Heading>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-neutral-800 bg-neutral-900/20 p-6"
            >
              <h3 className="text-xl font-medium text-neutral-100">
                {service.title}
              </h3>

              <p className="mt-2 text-neutral-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
