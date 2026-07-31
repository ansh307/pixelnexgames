"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is PixelNex?",
    answer:
      "PixelNex is a game development studio dedicated to creating immersive and entertaining gaming experiences for players across multiple platforms.",
  },
  {
    question: "Where can I download your games?",
    answer:
      "Our games are available on major platforms including Google Play, the App Store, Steam, and other supported digital marketplaces depending on the title.",
  },
  {
    question: "Are PixelNex games free to play?",
    answer:
      "Many of our games are free to play with optional in-game purchases, while some premium titles require a one-time purchase.",
  },
  {
    question: "How can I report a bug or technical issue?",
    answer:
      "You can report bugs through our Support page or by contacting our support team with detailed information about the issue and your device.",
  },
  {
    question: "How do I contact PixelNex?",
    answer:
      "Visit our Contact page to reach our team for business inquiries, partnerships, media requests, or general support.",
  },
  {
    question: "Can I join the PixelNex team?",
    answer:
      "Absolutely! Visit our Careers page to explore current job openings and internship opportunities.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}

        <div className="mb-16 text-center">
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-neutral-900 lg:text-6xl">
            Everything you need to know
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Find answers to the questions we get asked the most about PixelNex,
            our games, and our services.
          </p>
        </div>

        {/* FAQs */}

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const open = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-7 text-left"
                >
                  <span className="text-lg font-semibold text-neutral-900 lg:text-xl">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      open ? "rotate-180 text-orange-500" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-7 text-base leading-8 text-neutral-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
