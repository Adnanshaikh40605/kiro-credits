"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeader, FadeIn } from "./ui/SectionHeader";

const faqs = [
  {
    question: "How does Korvexa work?",
    answer:
      "Korvexa connects to your WhatsApp Business account and gives you a unified platform for AI agents, team inbox, CRM, campaigns, and analytics. Set up automations visually, deploy AI agents to handle conversations, and track everything in real-time dashboards.",
  },
  {
    question: "Can I connect WhatsApp?",
    answer:
      "Yes. Korvexa integrates natively with WhatsApp Business API. Connect your number in minutes and start sending messages, building automations, and managing conversations from a single dashboard.",
  },
  {
    question: "Does it support AI agents?",
    answer:
      "Absolutely. Korvexa's AI agents can qualify leads, book appointments, handle support queries, and automate follow-ups — all through natural WhatsApp conversations. No coding required.",
  },
  {
    question: "Can teams collaborate?",
    answer:
      "Yes. Korvexa includes a shared team inbox where multiple team members can view, assign, and respond to conversations. Internal notes, task assignments, and CRM data sync across your entire team.",
  },
  {
    question: "Is coding required?",
    answer:
      "No coding required. Korvexa's visual workflow builder lets you create complex automations with drag-and-drop. AI agents, campaign templates, and CRM pipelines are all configurable through the UI.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="resources" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeader
          label="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about getting started with Korvexa."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={faq.question} delay={i * 0.05}>
              <div className="overflow-hidden rounded-lg border border-hairline bg-canvas">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-ink">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-ink-mute transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="border-t border-hairline px-6 py-4">
                        <p className="text-sm leading-relaxed text-ink-mute">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
