import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GridBackground } from "@/components/sections/GridBackground";
import {
  WhyUsIconSparkle,
  WhyUsIconChart,
  WhyUsIconPlay,
} from "@/components/icons";

const stats = [
  { value: "98%", label: "Client Success Rate" },
  { value: "200+", label: "Campaigns Launched" },
  { value: "$250K+", label: "Revenue Generated" },
];

export function WhyUs() {
  return (
    <section className="relative bg-dark text-white py-18 md:py-20 overflow-hidden">
      <GridBackground />

      <Container className="relative z-10">
        <div className="max-w-[700px] mx-auto text-center mb-18 px-4">
          <h2 className="text-[48px] md:text-[46px] font-semibold leading-[1.05] tracking-[-0.02em] text-white mb-6">
            Why we're the right choice
          </h2>
          <p className="mt-3 text-white/70 max-w-130 mx-auto text-[16px] leading-7">
            We create impactful strategies, refine brand positioning, and drive
            real results through smart content and scalable campaigns.
          </p>
        </div>

        <div className="relative max-w-[1200px] flex justify-center">
          <div className="rounded-[32px] p-2 bg-[#FFFFFF0A] border border-white/10 relative w-full max-w-[820px] h-[300px] md:h-[412px]">
            <div className="relative w-full h-full rounded-[24px] overflow-hidden">
              <Image
                src="/img/whyus-image.avif"
                alt="Team meeting"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            </div>

            <div className="absolute bottom-16 -left-2 md:-left-[90px] w-[234.2px] h-[57.59px] flex flex-row items-center justify-start gap-3 p-4 rounded-[14px] bg-[rgba(255,255,255,0.12)] backdrop-blur-lg border border-[rgba(255,255,255,0.10)] shadow-[0_12px_30px_rgba(0,0,0,0.28)] overflow-visible z-10">
              <div className="w-8.5 h-8.5 flex items-center justify-center text-[#5CF28E]">
                <WhyUsIconSparkle width={22} height={22} />
              </div>

              <p className="text-[16px] leading-[1.6] text-[#FAFAFA] whitespace-nowrap font-medium tracking-tight">
                10+ Years of Experience
              </p>
            </div>

            {/* Card Growth-Driven (Direita) */}
            <div className="absolute top-16 -right-2 md:-right-[110px] w-[228.33px] h-[142.8px] flex flex-col items-center justify-center gap-4 p-4 rounded-2xl bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border border-[rgba(255,255,255,0.10)] shadow-[0_12px_30px_rgba(0,0,0,0.28)] z-10 ">
              <div className="w-11 h-11 flex shrink-0 items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] shadow-[inset_0_0_12px_rgba(255,255,255,0.05)] text-[#5CF28E]">
                <WhyUsIconChart width={24} height={24} />
              </div>

              {/* Bloco de Texto */}
              <div className="flex flex-col gap-1 text-center">
                <h6 className="text-[18px] font-semibold text-[#FAFAFA] leading-[1.4] tracking-tight">
                  Growth-Driven
                </h6>
                <p className="text-[16px] text-[#FFFFFFBF] leading-[1.6] tracking-tight">
                  KPI-focused for real growth.
                </p>
              </div>
            </div>

            <button className="absolute -bottom-[26px] left-1/2 -translate-x-1/2 w-[217.77px] h-[52px] flex items-center bg-[#50C878] hover:bg-[#45b36b] transition-all text-[#0A0A0A] rounded-full pt-[12px] pb-[12px] pl-[12px] pr-[24px] gap-[12px] shadow-[0_10px_25px_rgba(80,200,120,0.4)] cursor-pointer border-none z-30 group">
              <div className="w-7 h-7 rounded-full bg-[#0A0A0A] flex items-center justify-center shrink-0">
                <WhyUsIconPlay
                  width={8}
                  height={8}
                  className="text-[#50C878] ml-0.5"
                />
              </div>
              <span className="font-semibold text-[18px] leading-[25.2px] tracking-tight whitespace-nowrap">
                Inside our process
              </span>
            </button>
          </div>
        </div>

        <div className="mt-32 flex flex-col md:flex-row items-center justify-between max-w-[900px] mx-auto gap-12 md:gap-0 px-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-[232px] h-[86px] flex flex-col justify-center items-center text-center"
            >
              <span className="text-[36px] font-semibold tracking-[-0.02em] text-white leading-none mb-2">
                {stat.value}
              </span>
              <span className="text-white/60 font-medium text-[18px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
