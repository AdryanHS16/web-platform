import { Team } from "@/components/sections/Team";
import { CTASection } from "@/components/sections/CTASection";

export function AboutClosing() {
  return (
    <section className="flex min-h-dvh snap-start snap-always flex-col overflow-hidden bg-white">
      <Team embedded />
      <div className="mt-auto w-full">
        <CTASection embedded />
      </div>
    </section>
  );
}
