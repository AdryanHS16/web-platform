"use client";

import { useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import {
  ScrollReveal,
} from "@/components/ui/ScrollReveal";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

const SET_WIDTH = 1216;
const BASE_SPEED = SET_WIDTH / 25;
const HOVER_SPEED_FACTOR = 0.4;

const team = [
  {
    name: "James Carter",
    role: "CEO & Founder",
    src: "/img/team-1.png",
  },
  {
    name: "Daniel Foster",
    role: "Head of Strategy",
    src: "/img/team-2.png",
  },
  {
    name: "Marcus Lee",
    role: "Creative Director",
    src: "/img/team-3.png",
  },
  {
    name: "Ethan Brooks",
    role: "Lead Developer",
    src: "/img/team-4.png",
  },
];

interface TeamProps {
  fullHeight?: boolean;
  embedded?: boolean;
}

export function Team({ fullHeight = false, embedded = false }: TeamProps) {
  const duplicatedTeam = [...team, ...team];

  const x = useMotionValue(0);
  const isHovering = useRef(false);
  const speed = useRef(BASE_SPEED);

  useAnimationFrame((_, delta) => {
    const target = isHovering.current
      ? BASE_SPEED * HOVER_SPEED_FACTOR
      : BASE_SPEED;
    speed.current += (target - speed.current) * Math.min(1, delta / 200);

    let next = x.get() - speed.current * (delta / 1000);
    if (next <= -SET_WIDTH) next += SET_WIDTH;
    x.set(next);
  });

  const content = (
    <>
      <Container
        className={
          embedded ? "mb-8 pt-12 md:mb-10 md:pt-14" : fullHeight ? "mb-10" : "mb-14"
        }
      >
        <ScrollReveal className="flex flex-col items-center text-center">
          <Heading
            as="h3"
            className="text-[48px] font-semibold tracking-tight text-[#0A0A0A]"
          >
            Meet our amazing team.
          </Heading>
          <p className="mt-4 max-w-[520px] text-[18px] font-semibold text-gray-500">
            We are a team of strategists, designers, and innovators passionate
            about helping agencies grow.
          </p>
        </ScrollReveal>
      </Container>

      <ScrollReveal amount={0.1}>
      <div className="relative max-w-[1200px] mx-auto overflow-hidden px-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-white via-white/20 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-white via-white/20 to-transparent z-10" />

        <motion.div className="flex gap-6" style={{ x }}>
          {duplicatedTeam.map((member, index) => (
            <div
              key={index}
              onMouseEnter={() => {
                isHovering.current = true;
              }}
              onMouseLeave={() => {
                isHovering.current = false;
              }}
              className="relative w-[280px] h-[360px] shrink-0 cursor-pointer overflow-hidden rounded-[28px] bg-[#f7f7f7] border border-black/5"
            >
              <Image
                src={member.src}
                alt={member.name}
                fill
                className="object-cover"
                sizes="280px"
                draggable={false}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-[18px] font-semibold tracking-tight text-white">
                  {member.name}
                </h4>
                <p className="mt-0.5 text-[14px] text-white/70">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      </ScrollReveal>
    </>
  );

  if (embedded) {
    return (
      <div id="team" className="w-full shrink-0 select-none">
        {content}
      </div>
    );
  }

  return (
    <section
      id="team"
      className={`select-none bg-white ${
        fullHeight
          ? "flex min-h-dvh snap-start snap-always flex-col justify-center py-12 md:py-16"
          : "py-20"
      }`}
    >
      {content}
    </section>
  );
}
