"use client";

import {
  MessageCircle,
  Clock,
  UserPlus,
  Reply,
  GitBranch,
  ArrowRight,
} from "lucide-react";
import { SectionHeader, FadeIn } from "./ui/SectionHeader";

const automations = [
  { icon: MessageCircle, label: "Welcome Messages", desc: "Greet new contacts instantly" },
  { icon: Clock, label: "Follow-Ups", desc: "Timed sequences that convert" },
  { icon: UserPlus, label: "Lead Collection", desc: "Capture data automatically" },
  { icon: Reply, label: "Auto Replies", desc: "Smart responses 24/7" },
  { icon: GitBranch, label: "Workflow Builder", desc: "Visual automation designer" },
];

function WorkflowIllustration() {
  const nodes = [
    { label: "New Contact", x: 0, color: "bg-canvas-soft" },
    { label: "Send Welcome", x: 1, color: "bg-primary/10 text-primary" },
    { label: "Wait 2 Days", x: 2, color: "bg-canvas-soft" },
    { label: "Follow Up", x: 3, color: "bg-primary/10 text-primary" },
    { label: "Qualify Lead", x: 4, color: "bg-canvas-night text-white" },
  ];

  return (
    <div className="overflow-hidden rounded-lg border border-hairline bg-canvas p-6 shadow-[var(--shadow-md)]">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-medium text-ink">Workflow Builder</span>
        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
          Active
        </span>
      </div>
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {nodes.map((node, i) => (
          <div key={node.label} className="flex items-center gap-2 shrink-0">
            <div
              className={`rounded-md border border-hairline px-3 py-2 text-xs font-medium whitespace-nowrap ${node.color}`}
            >
              {node.label}
            </div>
            {i < nodes.length - 1 && (
              <ArrowRight size={14} className="shrink-0 text-ink-mute-2" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-hairline pt-4">
        {[
          { label: "Contacts", value: "2,847" },
          { label: "Completed", value: "94%" },
          { label: "Avg. Time", value: "1.2s" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-lg font-semibold text-ink">{stat.value}</div>
            <div className="text-xs text-ink-mute">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WhatsAppAutomation() {
  return (
    <section id="automation" className="py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <SectionHeader
              label="WhatsApp Automation"
              title="Automate every customer touchpoint on WhatsApp"
              description="From welcome messages to complex multi-step workflows — build automations that feel personal at scale."
              align="left"
            />

            <div className="mt-8 space-y-3">
              {automations.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-lg border border-hairline bg-canvas p-4 transition-all hover:border-primary/20 hover:shadow-[var(--shadow-sm)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#25D366]/10">
                    <item.icon size={18} className="text-[#25D366]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink">{item.label}</div>
                    <div className="text-xs text-ink-mute">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <WorkflowIllustration />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
