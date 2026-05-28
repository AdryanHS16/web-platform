import { Container } from "@/components/ui/Container";

interface BlogGridProps {
  children: React.ReactNode;
}

export function BlogGrid({ children }: BlogGridProps) {
  return (
    <section className="bg-dark pb-20 md:pb-28">
      <Container className="px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-y-14">
          {children}
        </div>
      </Container>
    </section>
  );
}
