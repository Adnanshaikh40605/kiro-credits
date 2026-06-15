"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, TrendingUp, MessageSquare, Users } from "lucide-react";
import { Button } from "./ui/Button";

function InboxMockup() {
  return (
    <div className="overflow-hidden rounded-lg border border-hairline bg-canvas shadow-[var(--shadow-md)]">
      <div className="flex items-center gap-2 border-b border-hairline bg-canvas-soft px-4 py-2.5">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-xs text-ink-mute">WhatsApp Inbox</span>
      </div>
      <div className="flex h-[220px]">
        <div className="w-[140px] border-r border-hairline bg-canvas-soft p-3">
          {["Sarah M.", "James K.", "Priya R.", "Alex T."].map((name, i) => (
            <div
              key={name}
              className={`mb-2 flex items-center gap-2 rounded-md px-2 py-1.5 text-xs ${i === 0 ? "bg-primary/10 text-primary" : "text-ink-mute"}`}
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-hairline text-[10px] font-medium">
                {name[0]}
              </div>
              <span className="truncate">{name}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-1 flex-col justify-end p-4">
          <div className="mb-2 max-w-[180px] self-start rounded-lg rounded-bl-none bg-canvas-soft px-3 py-2 text-xs text-ink">
            Hi! I&apos;m interested in your services.
          </div>
          <div className="max-w-[200px] self-end rounded-lg rounded-br-none bg-primary px-3 py-2 text-xs text-white">
            Great! I can help qualify your needs. What&apos;s your budget range?
          </div>
          <div className="mt-2 flex items-center gap-1 text-[10px] text-primary">
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
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas-soft px-4 py-1.5 text-sm text-ink-mute"
          >
            <Sparkles size={14} className="text-primary" />
            AI-Powered Customer Growth Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl lg:text-[4rem] lg:leading-[1.08]"
          >
            The AI Operating System for{" "}
            <span className="text-primary">Customer Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-mute sm:text-xl"
          >
            Automate conversations, qualify leads, launch campaigns, and scale
            customer engagement with AI-powered automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button variant="primary" size="lg">
              Start Free Trial
              <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg">
              <Play size={16} />
              Book Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-6 text-sm text-ink-mute"
          >
            <span className="flex items-center gap-1.5">
              <MessageSquare size={14} className="text-primary" />
              WhatsApp Ready
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={14} className="text-primary" />
              Team Collaboration
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Sparkles size={14} className="text-primary" />
              No Code Required
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative mx-auto mt-16 max-w-5xl lg:mt-20"
        >
          <div className="relative">
            <div className="relative z-10 mx-auto max-w-3xl">
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
