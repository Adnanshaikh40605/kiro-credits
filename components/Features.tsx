"use client";

import {
  Bot,
  Inbox,
  Users,
  Megaphone,
  Workflow,
  BarChart3,
} from "lucide-react";
import { SectionHeader, FadeIn } from "./ui/SectionHeader";

const features = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Automate customer conversations with intelligent agents that qualify, support, and follow up 24/7.",
  },
  {
    icon: Inbox,
    title: "Shared Team Inbox",
    description: "Manage all customer chats in one place. Assign, collaborate, and respond as a unified team.",
  },
  {
    icon: Users,
    title: "CRM",
    description: "Track leads and customer relationships with a built-in CRM that syncs with every conversation.",
  },
  {
    icon: Megaphone,
    title: "Campaign Manager",
    description: "Launch WhatsApp marketing campaigns with templates, segments, and real-time analytics.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Build powerful automations without coding. Triggers, conditions, and actions in a visual builder.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Track conversions and performance with dashboards that turn engagement data into growth insights.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Platform"
          title="Everything you need to grow customer relationships"
          description="One unified platform for AI agents, messaging, CRM, campaigns, and analytics — built for modern teams."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.08}>
              <div className="group h-full rounded-lg border border-hairline bg-canvas p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-[var(--shadow-md)]">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <feature.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
