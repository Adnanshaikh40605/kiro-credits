"use client";

import { Send, Target, LayoutGrid, FileText, BarChart2 } from "lucide-react";
import { SectionHeader, FadeIn } from "./ui/SectionHeader";

const campaignFeatures = [
  { icon: Send, title: "Bulk Messaging", desc: "Send to thousands with one click" },
  { icon: Target, title: "Audience Segments", desc: "Target the right customers" },
  { icon: LayoutGrid, title: "Carousel Messages", desc: "Rich interactive content" },
  { icon: FileText, title: "Marketing Templates", desc: "Pre-built, compliant templates" },
  { icon: BarChart2, title: "Campaign Analytics", desc: "Real-time performance tracking" },
];

function CampaignDashboard() {
  const campaigns = [
    { name: "Summer Sale 2026", sent: "8,420", open: "72%", status: "Active" },
    { name: "Product Launch", sent: "3,150", open: "68%", status: "Completed" },
    { name: "Re-engagement", sent: "5,200", open: "45%", status: "Scheduled" },
  ];

  return (
    <div className="overflow-hidden rounded-lg border border-hairline bg-canvas shadow-[var(--shadow-md)]">
      <div className="flex items-center justify-between border-b border-hairline px-5 py-3">
        <span className="text-sm font-medium text-ink">Campaign Dashboard</span>
        <button className="rounded-[6px] bg-primary px-3 py-1 text-xs font-medium text-white">
          + New Campaign
        </button>
      </div>
      <div className="p-5">
        <div className="mb-4 grid grid-cols-3 gap-3">
          {[
            { label: "Total Sent", value: "16.7K" },
            { label: "Avg. Open Rate", value: "61.7%" },
            { label: "Revenue", value: "$42.8K" },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-md bg-canvas-soft p-3">
              <div className="text-[10px] text-ink-mute">{kpi.label}</div>
              <div className="text-lg font-semibold text-ink">{kpi.value}</div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-4 gap-2 px-2 text-[10px] font-medium text-ink-mute uppercase">
            <span className="col-span-2">Campaign</span>
            <span>Sent</span>
            <span>Open Rate</span>
          </div>
          {campaigns.map((c) => (
            <div
              key={c.name}
              className="grid grid-cols-4 items-center gap-2 rounded-md border border-hairline px-3 py-2.5 text-sm"
            >
              <span className="col-span-2 font-medium text-ink">{c.name}</span>
              <span className="text-ink-mute">{c.sent}</span>
              <span className="font-medium text-primary">{c.open}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CampaignManagement() {
  return (
    <section id="campaigns" className="bg-canvas-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="order-2 lg:order-1">
            <CampaignDashboard />
          </FadeIn>

          <FadeIn delay={0.15} className="order-1 lg:order-2">
            <SectionHeader
              label="Campaigns"
              title="Launch campaigns that drive measurable revenue"
              description="Create, segment, and optimize WhatsApp marketing campaigns with enterprise-grade tools and real-time analytics."
              align="left"
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {campaignFeatures.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-lg border border-hairline bg-canvas p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink">{item.title}</div>
                    <div className="text-xs text-ink-mute">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
