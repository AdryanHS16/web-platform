import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'

export const metadata = {
  title: 'Contact - Renewed Mindset',
  description: 'Get in touch with us',
}

export default function ContactPage() {
  return (
    <main>
      <section className="pt-24 pb-20 md:pt-32 md:pb-24">
        <Container>
          <Heading as="h1" className="max-w-3xl">
            Get in touch
          </Heading>

          <p className="mt-6 text-base md:text-lg text-neutral-300 max-w-xl">
            Have questions or want to learn more? We'd love to hear from you.
          </p>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="max-w-2xl">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-neutral-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-transparent resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 rounded-lg bg-neutral-100 text-neutral-950 font-medium hover:bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-16 pt-16 border-t border-neutral-800">
            <Heading as="h2" className="max-w-2xl">
              Other ways to connect
            </Heading>

            <div className="mt-8 space-y-4 text-neutral-400">
              <p>
                <strong className="text-neutral-300">Email:</strong>{' '}
                hello@renewedmindset.com
              </p>
              <p>
                <strong className="text-neutral-300">Response time:</strong>{' '}
                We typically respond within 24-48 hours
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
