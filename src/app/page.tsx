import { About } from '@/components/sections/About'
import { Footer } from '@/components/sections/Footer'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Testimonials } from '@/components/sections/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </>
  )
}
