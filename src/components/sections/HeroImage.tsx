import Image from 'next/image'
import { HeroIconCircle, HeroIconCard1, HeroIconCard2, HeroIconTrendingUp } from "@/components/icons"

export function HeroImage() {
  return (
    <div className="relative w-[404px] h-[512px]">
      <div className="relative w-full h-full rounded-[24px] overflow-hidden">
        <Image
          src="/img/hero-image.jpg"
          alt="Business professional"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* floating circle icon */}
      <div
        className="
          absolute -top-6 -right-6
          w-[55px] h-[55px]
          rounded-[100px]
          bg-[rgba(255,255,255,0.12)]
          backdrop-blur-lg
          overflow-visible
          flex items-center justify-center
        "
      >
        <HeroIconCircle
          width={34}
          height={34}
          className="text-[#5CF28E]"
        />
      </div>

      {/* Floating card 1 */}
      <div
        className="
          absolute bottom-[160px] -left-[60px]
          w-[205.906px] h-[57.5938px]
          flex flex-row items-center justify-start
          gap-3
          p-4
          rounded-[14px]
          bg-[rgba(255,255,255,0.12)]
          backdrop-blur-lg
          border border-[rgba(255,255,255,0.10)]
          shadow-[0_12px_30px_rgba(0,0,0,0.28)]
          overflow-visible
        "
      >
        <div
          className="
            w-8.5 h-8.5
            flex items-center justify-center
            text-[#5CF28E]
          "
        >
          <HeroIconCard1 width={20} height={20} />
        </div>

        <p className="text-[16px] leading-none text-white whitespace-nowrap">
          2k+ Success Stories
        </p>
      </div>

      {/* Floating card 2 */}
      <div
        className="
          absolute bottom-[40px] -left-[60px]
          w-[267px] h-[93.1875px]
          flex flex-row items-center
          gap-3
          p-4
          rounded-[16px]
          bg-[rgba(255,255,255,0.12)]
          backdrop-blur-lg
          border border-[rgba(255,255,255,0.10)]
          shadow-[0_12px_30px_rgba(0,0,0,0.28)]
          overflow-visible
        "
      >
        {/* Left icon circle */}
        <div
          className="
            w-[44px] h-[44px]
            rounded-full
            flex items-center justify-center
            border border-[rgba(255,255,255,0.18)]
            shadow-[inset_0_0_12px_rgba(255,255,255,0.05)]
            text-[#5CF28E]
          "
        >
          <HeroIconCard2 width={22} height={22} />
        </div>

        {/* Text block */}
        <div className="flex flex-col gap-2">
          <p className="text-[16px] text-white/80 leading-none whitespace-nowrap">
            Your Growth, Our Mission
          </p>

          <div className="flex items-center gap-2">
            <HeroIconTrendingUp width={16} height={16} className="text-[#5CF28E]" />
            <p className="text-[16px] text-white leading-none whitespace-nowrap">
              <span className="font-semibold">+65%</span>{" "}
              <span className="font-normal">ROI Boost</span>
            </p>            
          </div>
        </div>
      </div>
    </div>
  )
}
