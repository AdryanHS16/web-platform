import { Container } from '@/components/ui/Container'

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-12">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Renewed Mindset
          </span>

          <span className="text-sm text-neutral-600">
            All rights reserved.
          </span>
        </div>
      </Container>
    </footer>
  )
}
