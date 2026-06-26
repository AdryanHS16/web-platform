import { Container } from "@/components/ui/Container";

interface BlogGridProps {
  children: React.ReactNode;
}

export function BlogGrid({ children }: BlogGridProps) {
  return (
    <section className="bg-white pt-16 pb-16 md:pt-20 md:pb-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-y-14">
          {children}
        </div>
      </Container>
    </section>
  );
}
