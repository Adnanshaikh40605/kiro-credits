"use client";

import { Star } from "lucide-react";
import { SectionHeader, FadeIn } from "./ui/SectionHeader";

const testimonials = [
  {
    quote:
      "Korvexa transformed how we handle customer conversations. Our AI agents qualify 3x more leads without adding headcount.",
    name: "Sarah Chen",
    role: "VP of Growth, TechFlow",
    initials: "SC",
    rating: 5,
  },
  {
    quote:
      "We replaced four different tools with Korvexa. The unified inbox and CRM alone saved our team 15 hours per week.",
    name: "Marcus Williams",
    role: "CEO, ScaleUp Agency",
    initials: "MW",
    rating: 5,
  },
  {
    quote:
      "Campaign analytics in Korvexa are incredible. We increased our WhatsApp conversion rate by 40% in the first month.",
    name: "Priya Sharma",
    role: "Marketing Director, Nova Inc",
    initials: "PS",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-canvas-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          title="Loved by growth teams worldwide"
          description="See how businesses are using Korvexa to automate engagement and accelerate revenue."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-lg border border-hairline bg-canvas p-8 transition-all hover:shadow-[var(--shadow-md)]">
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-hairline pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink">{t.name}</div>
                    <div className="text-xs text-ink-mute">{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
