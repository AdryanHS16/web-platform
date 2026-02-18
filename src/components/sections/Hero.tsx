import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { HeroImage } from '@/components/sections/HeroImage'

export function Hero() {
  return (
    <section className="relative bg-dark text-white overflow-hidden">
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[40px_40px]" />

      <Container className="relative pt-40 pb-28 md:pt-48 md:pb-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight max-w-xl">
              Grow your business,
              <br />
              master every move.
            </h1>

            <p className="mt-6 text-neutral-300 max-w-lg leading-relaxed">
              Helping businesses thrive with innovative digital strategies,
              creative solutions, and measurable outcomes.
            </p>

            <div className="mt-10 flex gap-4">
              <Button variant="primary">Book a call</Button>
              <Button variant="secondary">Learn more</Button>
            </div>
          </div>

          {/* Right */}
          <HeroImage />

        </div>
      </Container>
    </section>
  )
}
