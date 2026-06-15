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

function CellValue({ value, compact }: { value: boolean | string; compact?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check size={compact ? 16 : 18} className="mx-auto text-primary" />
    ) : (
      <X size={compact ? 16 : 18} className="mx-auto text-ink-mute-2" />
    );
  }
  return (
    <span className={`font-medium text-ink ${compact ? "text-xs" : "text-sm"}`}>{value}</span>
  );
}

export function WhyKorvexa() {
  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why Korvexa"
          title="Built different from traditional tools"
          description="Stop juggling five different platforms. Korvexa unifies AI, messaging, CRM, and campaigns in one intelligent system."
        />

        <FadeIn className="mt-10 sm:mt-12">
          <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <div className="min-w-[480px] overflow-hidden rounded-lg border border-hairline bg-canvas shadow-[var(--shadow-sm)] sm:min-w-0">
              <div className="grid grid-cols-3 border-b border-hairline bg-canvas-soft">
                <div className="p-3 text-xs font-medium text-ink-mute sm:p-4 sm:text-sm">Feature</div>
                <div className="border-x border-hairline p-3 text-center sm:p-4">
                  <div className="text-xs font-semibold text-primary sm:text-sm">Korvexa</div>
                </div>
                <div className="p-3 text-center sm:p-4">
                  <div className="text-xs font-semibold text-ink-mute sm:text-sm">Traditional</div>
                </div>
              </div>
              {rows.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 ${i < rows.length - 1 ? "border-b border-hairline" : ""}`}
                >
                  <div className="flex items-center p-3 text-xs text-ink sm:p-4 sm:text-sm">
                    {row.feature}
                  </div>
                  <div className="flex items-center justify-center border-x border-hairline bg-primary/[0.02] p-3 sm:p-4">
                    <CellValue value={row.korvexa} compact />
                  </div>
                  <div className="flex items-center justify-center p-3 sm:p-4">
                    <CellValue value={row.traditional} compact />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
          {[
            "AI First",
            "Faster Setup",
            "Better Automation",
            "Unified Platform",
            "Business Insights",
          ].map((advantage, i) => (
            <FadeIn key={advantage} delay={i * 0.06}>
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 sm:mb-3 sm:h-12 sm:w-12">
                  <Check size={18} className="text-primary sm:size-5" />
                </div>
                <div className="text-xs font-semibold text-ink sm:text-sm">{advantage}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
