import Image from 'next/image'

export function HeroImage() {
  return (
    <div className="relative w-full max-w-md lg:max-w-lg">
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src="/img/hero.jpg"
          alt="Business professional"
          width={600}
          height={700}
          className="object-cover"
        />
      </div>

      {/* Floating card 1 */}
      <div className="absolute bottom-24 -left-10 bg-[#0F3E3B] backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-sm text-white shadow-lg">
        <p className="font-medium">2k+ Success Stories</p>
      </div>

      {/* Floating card 2 */}
      <div className="absolute bottom-4 -left-6 bg-[#0F3E3B] backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-sm text-white shadow-lg">
        <p className="font-medium">+65% ROI Boost</p>
      </div>
    </div>
  )
}
