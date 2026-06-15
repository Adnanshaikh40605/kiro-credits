"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, TrendingUp, MessageSquare, Users } from "lucide-react";
import { Button } from "./ui/Button";
import { WHATSAPP_URL } from "@/lib/contact";

function InboxMockup() {
  return (
    <div className="overflow-hidden rounded-lg border border-hairline bg-canvas shadow-[var(--shadow-md)]">
      <div className="flex items-center gap-2 border-b border-hairline bg-canvas-soft px-3 py-2 sm:px-4 sm:py-2.5">
        <div className="h-2 w-2 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" />
        <div className="h-2 w-2 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5" />
        <div className="h-2 w-2 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" />
        <span className="ml-1 truncate text-[10px] text-ink-mute sm:ml-2 sm:text-xs">WhatsApp Inbox</span>
      </div>
      <div className="flex h-[200px] sm:h-[220px]">
        <div className="hidden w-[90px] shrink-0 border-r border-hairline bg-canvas-soft p-2 min-[400px]:block sm:w-[120px] sm:p-3 md:w-[140px]">
          {["Sarah M.", "James K.", "Priya R."].map((name, i) => (
            <div
              key={name}
              className={`mb-1.5 flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[10px] sm:mb-2 sm:gap-2 sm:px-2 sm:py-1.5 sm:text-xs ${i === 0 ? "bg-primary/10 text-primary" : "text-ink-mute"}`}
            >
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-hairline text-[9px] font-medium sm:h-6 sm:w-6 sm:text-[10px]">
                {name[0]}
              </div>
              <span className="truncate">{name.split(" ")[0]}</span>
            </div>
          ))}
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-end p-3 sm:p-4">
          <div className="mb-2 max-w-[85%] self-start rounded-lg rounded-bl-none bg-canvas-soft px-2.5 py-2 text-[11px] leading-snug text-ink sm:max-w-[180px] sm:px-3 sm:text-xs">
            Hi! I&apos;m interested in your services.
          </div>
          <div className="max-w-[90%] self-end rounded-lg rounded-br-none bg-primary px-2.5 py-2 text-[11px] leading-snug text-white sm:max-w-[200px] sm:px-3 sm:text-xs">
            Great! I can help qualify your needs. What&apos;s your budget?
          </div>
          <div className="mt-2 flex items-center gap-1 text-[9px] text-primary sm:text-[10px]">
            <Sparkles size={10} />
            AI Agent responding
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  return (
    <div className="overflow-hidden rounded-lg border border-hairline bg-canvas shadow-[var(--shadow-md)]">
      <div className="border-b border-hairline px-4 py-3">
        <span className="text-xs font-medium text-ink">Campaign Analytics</span>
      </div>
      <div className="p-4">
        <div className="mb-3 grid grid-cols-2 gap-2">
          {[
            { label: "Sent", value: "12.4K" },
            { label: "Opened", value: "68%" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-md bg-canvas-soft p-2">
              <div className="text-[10px] text-ink-mute">{stat.label}</div>
              <div className="text-sm font-semibold text-ink">{stat.value}</div>
            </div>
          ))}
        </div>
        <div className="flex h-16 items-end gap-1">
          {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-primary/20"
              style={{ height: `${h}%` }}
            >
              <div
                className="w-full rounded-sm bg-primary"
                style={{ height: `${h * 0.7}%`, marginTop: `${100 - h * 0.7}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CRMMockup() {
  return (
    <div className="overflow-hidden rounded-lg border border-hairline bg-canvas-night text-white shadow-[var(--shadow-lg)]">
      <div className="border-b border-white/10 px-4 py-3">
        <span className="text-xs font-medium">CRM Pipeline</span>
      </div>
      <div className="flex gap-2 p-3">
        {["Lead", "Qualified", "Proposal"].map((stage, si) => (
          <div key={stage} className="flex-1">
            <div className="mb-2 text-[10px] text-white/50">{stage}</div>
            {[0, 1].slice(0, si === 1 ? 2 : 1).map((j) => (
              <div
                key={j}
                className="mb-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1.5"
              >
                <div className="text-[10px] font-medium">
                  {["Acme Corp", "TechFlow", "Nova Inc"][si + j]}
                </div>
                <div className="text-[9px] text-white/40">${(si + 1) * 2.5}K</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function AIAgentBadge() {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="flex items-center gap-2 rounded-lg border border-hairline bg-canvas px-3 py-2 shadow-[var(--shadow-md)]"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
        <Sparkles size={16} className="text-primary" />
      </div>
      <div>
        <div className="text-xs font-medium text-ink">AI Agent Active</div>
        <div className="text-[10px] text-ink-mute">Qualifying 3 leads</div>
      </div>
    </motion.div>
  );
}

function MetricBadge() {
  return (
    <motion.div
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="flex items-center gap-2 rounded-lg border border-hairline bg-canvas px-3 py-2 shadow-[var(--shadow-md)]"
    >
      <TrendingUp size={16} className="text-primary" />
      <div>
        <div className="text-xs font-semibold text-primary">+34%</div>
        <div className="text-[10px] text-ink-mute">Conversion rate</div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/2 h-[500px] w-[800px] max-w-[100vw] -translate-x-1/2 rounded-full bg-primary/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex max-w-full items-center gap-1.5 rounded-full border border-hairline bg-canvas-soft px-3 py-1.5 text-[11px] text-ink-mute sm:mb-6 sm:gap-2 sm:px-4 sm:text-sm"
          >
            <Sparkles size={12} className="shrink-0 text-primary sm:size-[14px]" />
            <span className="leading-tight">AI-Powered Customer Growth Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[1.75rem] font-semibold tracking-[-0.03em] text-ink sm:text-4xl md:text-5xl lg:text-[4rem] lg:leading-[1.08]"
          >
            The AI Operating System for{" "}
            <span className="text-primary">Customer Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-mute sm:mt-6 sm:text-lg md:text-xl"
          >
            Automate conversations, qualify leads, launch campaigns, and scale
            customer engagement with AI-powered automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center"
          >
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Start Free Trial
              <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" href={WHATSAPP_URL} className="w-full sm:w-auto">
              <Play size={16} />
              Book Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-ink-mute sm:mt-8 sm:gap-6 sm:text-sm"
          >
            <span className="flex items-center gap-1.5">
              <MessageSquare size={14} className="text-primary" />
              WhatsApp Ready
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={14} className="text-primary" />
              Team Collaboration
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles size={14} className="text-primary" />
              No Code Required
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative mx-auto mt-10 w-full max-w-5xl sm:mt-16 lg:mt-20"
        >
          <div className="relative">
            <div className="relative z-10 mx-auto w-full max-w-3xl">
              <InboxMockup />
            </div>
            <div className="absolute -right-4 top-8 z-20 hidden w-[220px] lg:block xl:-right-8">
              <AnalyticsMockup />
            </div>
            <div className="absolute -left-4 top-16 z-20 hidden w-[240px] lg:block xl:-left-8">
              <CRMMockup />
            </div>
            <div className="absolute -right-2 -top-4 z-30 hidden lg:block">
              <AIAgentBadge />
            </div>
            <div className="absolute -left-2 bottom-4 z-30 hidden lg:block">
              <MetricBadge />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
