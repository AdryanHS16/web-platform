import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CompareIconCheck } from "@/components/icons";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Feature {
  title: string;
  description: string;
  points: string[];
  image: string;
  alt: string;
  reverse?: boolean;
}

const features: Feature[] = [
  {
    title: "Inspiring trust through results and integrity",
    description:
      "Our marketing team is expert in creating smart strategies that help you grow and connect with audiences.",
    points: [
      "Strategic consulting from top experts",
      "Trusted by startups and global brands",
      "End-to-end marketing solutions",
    ],
    image: "/img/whyus-image.avif",
    alt: "Marketing team collaborating",
  },
  {
    title: "Driving brands forward with strategy & results",
    description:
      "Our team designs hyper-targeted strategies that don't just reach audiences, but move them to act and engage.",
    points: ["Precision targeting", "Audience-first messaging"],
    image: "/img/work-image1.avif",
    alt: "Strategist presenting performance results",
    reverse: true,
  },
];

function FeatureRow({ feature }: { feature: Feature }) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
      <ScrollReveal
        direction={feature.reverse ? "left" : "right"}
        className={feature.reverse ? "md:order-2" : ""}
      >
        <h2 className="text-[30px] md:text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0A0A0A]">
          {feature.title}
        </h2>

        <p className="mt-5 max-w-[460px] text-[16px] leading-relaxed text-[#555555]">
          {feature.description}
        </p>

        <ul className="mt-8 flex flex-col gap-4">
          {feature.points.map((point) => (
            <li key={point} className="flex items-center gap-3">
              <span className="shrink-0 text-primary-2">
                <CompareIconCheck width={22} height={22} />
              </span>
              <span className="text-[15px] font-medium text-[#333333]">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </ScrollReveal>

      <ScrollReveal
        direction={feature.reverse ? "right" : "left"}
        delay={0.1}
        className={feature.reverse ? "md:order-1" : ""}
      >
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-[28px] border border-black/5 bg-grey">
          <Image
            src={feature.image}
            alt={feature.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </ScrollReveal>
    </div>
  );
}

export function AboutFeatures() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-20 md:gap-28">
          {features.map((feature) => (
            <FeatureRow key={feature.title} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
