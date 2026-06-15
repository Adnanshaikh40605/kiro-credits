"use client";

import { Check } from "lucide-react";
import { SectionHeader, FadeIn } from "./ui/SectionHeader";
import { Button } from "./ui/Button";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "For small teams getting started with WhatsApp automation.",
    features: [
      "1,000 conversations/mo",
      "1 AI Agent",
      "Shared Team Inbox",
      "Basic CRM",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$149",
    period: "/month",
    description: "For growing businesses scaling customer engagement.",
    features: [
      "10,000 conversations/mo",
      "5 AI Agents",
      "Campaign Manager",
      "Advanced CRM & Pipeline",
      "Workflow Automation",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large teams with advanced security and scale needs.",
    features: [
      "Unlimited conversations",
      "Unlimited AI Agents",
      "Custom integrations",
      "Dedicated account manager",
      "SLA & SSO",
      "Advanced analytics",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Pricing"
          title="Plans that scale with your growth"
          description="Start free, upgrade as you grow. Every plan includes core AI agents, inbox, and CRM."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div
                className={`flex h-full flex-col rounded-lg border p-8 ${
                  plan.featured
                    ? "border-primary/30 bg-canvas-night text-white shadow-[var(--shadow-lg)]"
                    : "border-hairline bg-canvas"
                }`}
              >
                <div>
                  <h3
                    className={`text-lg font-semibold ${plan.featured ? "text-white" : "text-ink"}`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-semibold tracking-tight ${plan.featured ? "text-white" : "text-ink"}`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={plan.featured ? "text-white/60" : "text-ink-mute"}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-3 text-sm ${plan.featured ? "text-white/70" : "text-ink-mute"}`}
                  >
                    {plan.description}
                  </p>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${plan.featured ? "text-primary-soft" : "text-primary"}`}
                      />
                      <span className={plan.featured ? "text-white/80" : "text-ink-mute"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.featured ? "primary" : "outline"}
                  size="lg"
                  className={`mt-8 w-full ${plan.featured ? "" : ""}`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
