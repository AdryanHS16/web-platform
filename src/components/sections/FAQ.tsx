"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

const faqs = [
  {
    question: "How does your marketing approach stand out from competitors?",
    answer:
      "We combine data-driven strategy, creative execution, and dedicated support to deliver measurable results tailored to your goals, instead of generic one-size-fits-all campaigns.",
  },
  {
    question: "What makes your lead generation strategies effective?",
    answer:
      "We use advanced targeting, AI-driven analytics, and high-converting funnels to attract and nurture quality leads that turn into loyal customers.",
  },
  {
    question: "How do you accurately measure the success of a campaign?",
    answer:
      "We track key performance indicators like conversions, ROI, engagement, and customer acquisition, providing transparent insights and continuous optimization.",
  },
  {
    question: "How can I easily get started with your services today?",
    answer:
      "Simply reach out through our contact page, and our team will guide you through a tailored strategy session to kickstart your growth.",
  },
  {
    question: "What platforms do you specialize in for digital marketing?",
    answer:
      "We leverage major platforms like Google Ads, Facebook, Instagram, LinkedIn, and TikTok, optimizing each for maximum impact and business growth.",
  },
  {
    question: "Do you offer tailored solutions for different industries?",
    answer:
      "Yes, we customize our strategies to fit your industry, business goals, and audience, ensuring a high-impact marketing approach that drives results.",
  },
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index],
    );
  };

  return (
    <section id="faq" className="py-20 md:py-24 bg-white">
      <Container>
        <div className="flex flex-col items-center text-center mb-14">
          <Heading
            as="h3"
            className="text-[48px] font-semibold tracking-tight text-[#0A0A0A]"
          >
            Your questions, answered.
          </Heading>
          <p className="mt-4 max-w-[480px] text-[18px] font-semibold text-gray-500">
            Find quick answers to common queries about our services, process,
            and how we can help you achieve your goals.
          </p>
        </div>

        <div className="mx-auto flex max-w-[760px] flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-[#f3f3f3]"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[16px] font-medium text-[#111111]">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[15px] leading-relaxed text-gray-500">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
