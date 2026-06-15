"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Calendar,
  HeadphonesIcon,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader, FadeIn } from "./ui/SectionHeader";

const capabilities = [
  {
    id: "qualification",
    icon: Sparkles,
    title: "AI Qualification",
    description: "Automatically qualify leads with smart questions and scoring.",
    conversation: [
      { role: "customer", text: "I'm looking for a CRM solution for my team of 15." },
      { role: "ai", text: "Great! To find the best fit, could you share your primary use case — sales, support, or both?" },
      { role: "customer", text: "Mostly sales. We need lead tracking and follow-ups." },
      { role: "ai", text: "Perfect match! I've tagged you as a qualified sales lead. Our team will reach out within 2 hours." },
    ],
  },
  {
    id: "booking",
    icon: Calendar,
    title: "Appointment Booking",
    description: "Let AI agents schedule meetings directly in your calendar.",
    conversation: [
      { role: "customer", text: "Can I schedule a demo for next week?" },
      { role: "ai", text: "Absolutely! I have openings on Tuesday at 2 PM or Wednesday at 10 AM. Which works better?" },
      { role: "customer", text: "Tuesday at 2 PM works." },
      { role: "ai", text: "Done! Demo scheduled for Tuesday, 2:00 PM. Calendar invite sent to your email." },
    ],
  },
  {
    id: "support",
    icon: HeadphonesIcon,
    title: "Customer Support",
    description: "Resolve common queries instantly with context-aware responses.",
    conversation: [
      { role: "customer", text: "How do I reset my password?" },
      { role: "ai", text: "I can help! Go to Settings → Security → Reset Password. I'll send a verification link to your email." },
      { role: "customer", text: "Got it, thanks!" },
      { role: "ai", text: "You're welcome! Let me know if you need anything else." },
    ],
  },
  {
    id: "followup",
    icon: RefreshCw,
    title: "Follow-Up Automation",
    description: "Never miss a follow-up with intelligent timing and personalization.",
    conversation: [
      { role: "ai", text: "Hi Sarah! Just checking in on the proposal we sent last week. Any questions I can help with?" },
      { role: "customer", text: "Yes, we'd like to discuss pricing for the enterprise plan." },
      { role: "ai", text: "I'll connect you with our sales team right away. They'll have your full conversation history." },
    ],
  },
];

export function AIAgents() {
  const [active, setActive] = useState(0);
  const current = capabilities[active];

  return (
    <section id="ai-agents" className="bg-canvas-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="AI Agents"
          title="Intelligent agents that work while you sleep"
          description="Deploy AI agents that qualify leads, book appointments, resolve support queries, and automate follow-ups — all through natural conversations."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <FadeIn>
            <div className="space-y-3">
              {capabilities.map((cap, i) => (
                <button
                  key={cap.id}
                  onClick={() => setActive(i)}
                  className={`flex w-full items-start gap-4 rounded-lg border p-4 text-left transition-all duration-200 ${
                    active === i
                      ? "border-primary/30 bg-canvas shadow-[var(--shadow-sm)]"
                      : "border-transparent bg-transparent hover:bg-canvas/60"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${
                      active === i ? "bg-primary/10" : "bg-canvas"
                    }`}
                  >
                    <cap.icon
                      size={20}
                      className={active === i ? "text-primary" : "text-ink-mute"}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">{cap.title}</h3>
                    <p className="mt-0.5 text-sm text-ink-mute">{cap.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="overflow-hidden rounded-lg border border-hairline bg-canvas shadow-[var(--shadow-md)]">
              <div className="flex items-center justify-between border-b border-hairline px-5 py-3">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-primary" />
                  <span className="text-sm font-medium text-ink">{current.title}</span>
                </div>
                <span className="flex items-center gap-1 text-xs text-primary">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                  Live
                </span>
              </div>
              <div className="space-y-3 p-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    {current.conversation.map((msg, i) => (
                      <div
                        key={i}
                        className={`flex ${msg.role === "ai" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-lg px-3.5 py-2.5 text-sm leading-relaxed ${
                            msg.role === "ai"
                              ? "rounded-br-none bg-primary text-white"
                              : "rounded-bl-none bg-canvas-soft text-ink"
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="border-t border-hairline px-5 py-3">
                <div className="flex items-center gap-2 text-xs text-ink-mute">
                  <CheckCircle2 size={12} className="text-primary" />
                  AI handled without human intervention
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
