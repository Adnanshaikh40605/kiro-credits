"use client";

import { Check, X } from "lucide-react";
import { SectionHeader, FadeIn } from "./ui/SectionHeader";

const rows = [
  { feature: "AI-First Architecture", korvexa: true, traditional: false },
  { feature: "Setup Time", korvexa: "< 1 hour", traditional: "2-4 weeks" },
  { feature: "WhatsApp Native", korvexa: true, traditional: "Add-on" },
  { feature: "Unified Platform", korvexa: true, traditional: false },
  { feature: "Visual Automation", korvexa: true, traditional: "Limited" },
  { feature: "Real-Time Analytics", korvexa: true, traditional: "Basic" },
  { feature: "Team Collaboration", korvexa: true, traditional: "Extra cost" },
  { feature: "No-Code Builder", korvexa: true, traditional: false },
];

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check size={18} className="mx-auto text-primary" />
    ) : (
      <X size={18} className="mx-auto text-ink-mute-2" />
    );
  }
  return <span className="text-sm font-medium text-ink">{value}</span>;
}

export function WhyKorvexa() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Why Korvexa"
          title="Built different from traditional tools"
          description="Stop juggling five different platforms. Korvexa unifies AI, messaging, CRM, and campaigns in one intelligent system."
        />

        <FadeIn className="mt-12">
          <div className="overflow-hidden rounded-lg border border-hairline bg-canvas shadow-[var(--shadow-sm)]">
            <div className="grid grid-cols-3 border-b border-hairline bg-canvas-soft">
              <div className="p-4 text-sm font-medium text-ink-mute">Feature</div>
              <div className="border-x border-hairline p-4 text-center">
                <div className="text-sm font-semibold text-primary">Korvexa</div>
              </div>
              <div className="p-4 text-center">
                <div className="text-sm font-semibold text-ink-mute">Traditional Tools</div>
              </div>
            </div>
            {rows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 ${i < rows.length - 1 ? "border-b border-hairline" : ""}`}
              >
                <div className="flex items-center p-4 text-sm text-ink">{row.feature}</div>
                <div className="flex items-center justify-center border-x border-hairline bg-primary/[0.02] p-4">
                  <CellValue value={row.korvexa} />
                </div>
                <div className="flex items-center justify-center p-4">
                  <CellValue value={row.traditional} />
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            "AI First",
            "Faster Setup",
            "Better Automation",
            "Unified Platform",
            "Business Insights",
          ].map((advantage, i) => (
            <FadeIn key={advantage} delay={i * 0.06}>
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Check size={20} className="text-primary" />
                </div>
                <div className="text-sm font-semibold text-ink">{advantage}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
