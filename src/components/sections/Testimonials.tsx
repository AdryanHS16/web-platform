import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import {
  ScrollReveal,
  ScrollRevealGroup,
  ScrollRevealItem,
} from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    name: "Jacob Williams",
    role: "Tech CEO",
    avatar: "https://i.pravatar.cc/150?img=12",
    text: "Their platform transformed how we approach campaigns. The intuitive tools and seamless integrations saved us a lot of time.",
  },
  {
    name: "Ethan Reynolds",
    role: "Café Owner",
    avatar: "https://i.pravatar.cc/150?img=13",
    text: "Their marketing approach brought in more foot traffic and online orders. The data-driven insights made all the difference.",
  },
  {
    name: "Nathan Carter",
    role: "Fitness Founder",
    avatar: "https://i.pravatar.cc/150?img=33",
    text: "Their system improved our client engagement and lead conversions. The easy-to-use tools streamlined our entire sales process.",
  },
  {
    name: "Daniel Foster",
    role: "Real Estate CEO",
    avatar: "https://i.pravatar.cc/150?img=8",
    text: "Their system improved our client engagement and lead conversions. The easy-to-use tools streamlined our entire sales process.",
  },
  {
    name: "Mitchell Apparel",
    role: "Fashion CEO",
    avatar: "https://i.pravatar.cc/150?img=15",
    text: "They refined our brand's digital presence and increased customer retention. The personalized strategies made a huge impact.",
  },
  {
    name: "Lucas Bennett",
    role: "Architect",
    avatar: "https://i.pravatar.cc/150?img=51",
    text: "Their platform enhanced project coordination and design workflow. The advanced tools helped us meet deadlines stress-free.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24 bg-white">
      <Container>
        <ScrollReveal className="flex flex-col items-center text-center mb-14">
          <Heading
            as="h3"
            className="text-[48px] font-semibold tracking-tight text-[#0A0A0A]"
          >
            What Our Clients Say
          </Heading>
          <p className="mt-4 text-[18px] font-semibold text-gray-500">
            Our clients' words reflect our commitment to excellence.
          </p>
        </ScrollReveal>

        <ScrollRevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <ScrollRevealItem key={testimonial.name}>
              <div className="flex flex-col justify-between rounded-3xl bg-[#f3f3f3] p-7 md:p-8">
              <p className="text-[15px] leading-relaxed text-[#555555]">
                {testimonial.text}
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="relative w-11 h-11 shrink-0 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>

                <div className="flex flex-col text-left">
                  <span className="text-[15px] font-semibold text-[#111111] tracking-tight">
                    {testimonial.name}
                  </span>
                  <span className="text-[13px] text-gray-500">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </Container>
    </section>
  );
}
