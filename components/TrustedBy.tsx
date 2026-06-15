"use client";

import { FadeIn } from "./ui/SectionHeader";

const logos = [
  "TechFlow",
  "Nova Inc",
  "ScaleUp",
  "GrowthLab",
  "VentureCo",
  "PulseAI",
  "Meridian",
  "CloudBase",
];

export function TrustedBy() {
  return (
    <section className="border-y border-hairline bg-canvas-soft py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <p className="mb-8 text-center text-sm font-medium text-ink-mute">
            Trusted by{" "}
            <span className="text-ink">10,000+ businesses</span> and growing teams
            worldwide
          </p>
        </FadeIn>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo, i) => (
            <FadeIn key={logo} delay={i * 0.05}>
              <span className="text-lg font-semibold tracking-tight text-ink-mute/40 transition-colors hover:text-ink-mute/60">
                {logo}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
