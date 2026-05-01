"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { motion } from "framer-motion";

const works = [
  {
    title: "PureGlow Skincare",
    description: "Boosted brand trust with content marketing and targeted ads.",
    src: "/img/work-image4.avif",
    stats: ["75% Revenue Growth", "65% Organic Traffic Growth"],
  },
  {
    title: "UrbanFit Gym",
    description:
      "Increased sign-ups through engaging digital campaigns and targeted promotions.",
    src: "/img/work-image1.avif",
    stats: ["88% Revenue Growth", "75% Organic Traffic Growth"],
  },
  {
    title: "ChronoLux",
    description:
      "Implemented a data-driven SEO and PPC strategy, boosting online visibility.",
    src: "/img/work-image2.avif",
    stats: ["75% Revenue Growth", "70% Organic Traffic Growth"],
  },
  {
    title: "Elevate Fashion",
    description:
      "Increased sales through influencer marketing and social media ads.",
    src: "/img/work-image3.avif",
    stats: ["85% Revenue Growth", "70% Organic Traffic Growth"],
  },
];

export function Work() {
  const duplicatedWorks = [...works, ...works];

  return (
    <section id="work" className="py-20 bg-white select-none">
      <Container className="mb-14">
        <div className="flex flex-col items-center text-center">
          <Heading
            as="h3"
            className="text-[48px] font-semibold tracking-tight text-[#0A0A0A]"
          >
            Success You Can See
          </Heading>
          <p className="mt-4 text-[18px] font-semibold text-gray-500">
            A glimpse into our most impactful projects and success stories.
          </p>
        </div>
      </Container>

      <div className="relative max-w-[1200px] mx-auto overflow-hidden px-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-white via-white/20 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-white via-white/20 to-transparent z-10" />

        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedWorks.map((work, index) => (
            <div key={index} className="flex flex-col gap-5 shrink-0">
              <div className="relative w-[344px] h-[325px] overflow-hidden rounded-[32px] bg-[#f7f7f7] border border-black/5">
                <Image
                  src={work.src}
                  alt={work.title}
                  fill
                  className="object-cover"
                  sizes="344px"
                  draggable={false}
                />

                <div className="absolute inset-0 flex flex-col justify-end items-center pb-6 px-8 gap-2 bg-linear-to-t from-black/50 via-transparent to-transparent">
                  {work.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="backdrop-blur-xl bg-white/20 border border-white/30 w-fit px-4 py-1.5 rounded-full text-white text-[13px] font-medium shadow-sm"
                    >
                      {stat}
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-[344px] px-1 text-left">
                <h3 className="text-[22px] font-bold text-[#0A0A0A] tracking-tight">
                  {work.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
