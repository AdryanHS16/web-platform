import { Container } from "@/components/ui/Container";
import {
  ServiceIconDigital,
  ServiceIconConsulting,
  ServiceIconLead,
  ServiceIconBrand,
  ServiceIconContent,
  ServiceIconStrategy,
} from "@/components/icons";

const services = [
  {
    title: "Digital Marketing",
    description:
      "Maximize online visibility with paid ads, social media, and strategic SEO to drive targeted traffic and higher conversions.",
    Icon: ServiceIconDigital,
  },
  {
    title: "Business Consulting",
    description:
      "Enhance business strategy, optimize core processes, and leverage real-time analytics for sustainable growth.",
    Icon: ServiceIconConsulting,
  },
  {
    title: "Lead Generation",
    description:
      "Optimize advanced funnels, automate processes, and boost customer conversions to generate leads.",
    Icon: ServiceIconLead,
  },
  {
    title: "Brand Strategy",
    description:
      "Building a powerful, data-driven brand identity that resonates, inspires, and drives long-term success.",
    Icon: ServiceIconBrand,
  },
  {
    title: "Content Writing",
    description:
      "Crafting compelling, SEO-optimized content that boosts engagement, authority, and conversions.",
    Icon: ServiceIconContent,
  },
  {
    title: "Strategic Planning",
    description:
      "Generate high-quality leads through targeted campaigns and optimized funnels for maximum conversions.",
    Icon: ServiceIconStrategy,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Efeito de Glow Verde (Background Blur) ajustado */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[350px] bg-green-400/15 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Headline Principal */}
        <div className="max-w-[1000px] mx-auto text-center mb-28 px-4">
          <h2 className="text-[30px] md:text-[44px] lg:text-[46px] font-bold leading-[1.3] tracking-[-0.02em] text-[#111111]">
            At Upreach, we deliver real results through{" "}
            <br className="hidden lg:block" />
            <span className="text-[#3E8655]">
              high-converting marketing strategies
            </span>{" "}
            <br className="hidden lg:block" />
            designed to scale your business, attract the{" "}
            <br className="hidden lg:block" />
            right audience, and{" "}
            <span className="text-[#3E8655]">
              maximize ROI with <br className="hidden lg:block" />
              precision.
            </span>
          </h2>
        </div>

        {/* Secção "What we offer" - Tipografia Ajustada */}
        <div className="text-center mb-16">
          <h3 className="text-[35px] font-semibold text-[#111111] mb-2 tracking-tight">
            What we offer
          </h3>
          <p className="text-[#666666] text-[18px] font-semibold">
            Comprehensive solutions for business success.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.Icon;
            return (
              <div
                key={service.title}
                // Fundo alterado para #F0F0F0 para destacar mais contra o fundo branco, mantendo a suavidade
                className="group relative rounded-3xl bg-[#f7f7f7] p-8 md:p-10 flex flex-col gap-6 cursor-pointer transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#111111] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:text-[#3E8655] group-hover:bg-green-50">
                  <Icon width={20} height={20} />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-[20px] font-medium text-[#111111] tracking-tight">
                    {service.title}
                  </h4>
                  <p className="text-[#555555] leading-[1.6] text-[15px]">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
