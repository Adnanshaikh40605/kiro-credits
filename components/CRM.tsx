"use client";

import { SectionHeader, FadeIn } from "./ui/SectionHeader";

const stages = [
  {
    name: "New Leads",
    count: 12,
    cards: [
      { name: "Acme Corp", value: "$12K", tag: "Hot" },
      { name: "Bright Labs", value: "$8K", tag: "Warm" },
      { name: "CloudNine", value: "$5K", tag: "New" },
    ],
  },
  {
    name: "Qualified",
    count: 8,
    cards: [
      { name: "TechFlow", value: "$24K", tag: "Hot" },
      { name: "DataSync", value: "$15K", tag: "Warm" },
    ],
  },
  {
    name: "Proposal",
    count: 5,
    cards: [
      { name: "Nova Inc", value: "$45K", tag: "Hot" },
      { name: "PulseAI", value: "$18K", tag: "Warm" },
    ],
  },
  {
    name: "Closed Won",
    count: 3,
    cards: [{ name: "Meridian", value: "$32K", tag: "Won" }],
  },
];

const crmFeatures = [
  { title: "Leads", desc: "Capture and score every lead automatically" },
  { title: "Pipeline", desc: "Visual kanban boards for deal tracking" },
  { title: "Customer Timeline", desc: "Full history of every interaction" },
  { title: "Tasks", desc: "Never miss a follow-up or deadline" },
  { title: "Notes", desc: "Team notes synced across conversations" },
];

function KanbanPreview() {
  return (
    <div className="overflow-hidden rounded-lg border border-hairline bg-canvas shadow-[var(--shadow-md)]">
      <div className="flex items-center justify-between border-b border-hairline px-5 py-3">
        <span className="text-sm font-medium text-ink">Sales Pipeline</span>
        <div className="flex gap-2">
          {["Leads", "Pipeline", "Timeline", "Tasks"].map((tab, i) => (
            <span
              key={tab}
              className={`rounded-[6px] px-2 py-0.5 text-xs ${
                i === 1
                  ? "bg-primary/10 font-medium text-primary"
                  : "text-ink-mute"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-3 overflow-x-auto p-4">
        {stages.map((stage) => (
          <div key={stage.name} className="w-[160px] shrink-0">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium text-ink">{stage.name}</span>
              <span className="rounded-full bg-canvas-soft px-1.5 py-0.5 text-[10px] text-ink-mute">
                {stage.count}
              </span>
            </div>
            <div className="space-y-2">
              {stage.cards.map((card) => (
                <div
                  key={card.name}
                  className="rounded-md border border-hairline bg-canvas-soft p-2.5"
                >
                  <div className="text-xs font-medium text-ink">{card.name}</div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-[10px] text-ink-mute">{card.value}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[9px] font-medium ${
                        card.tag === "Hot"
                          ? "bg-red-50 text-red-600"
                          : card.tag === "Won"
                            ? "bg-primary/10 text-primary"
                            : "bg-amber-50 text-amber-600"
                      }`}
                    >
                      {card.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CRM() {
  return (
    <section id="crm" className="py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="CRM"
          title="A CRM built for conversational sales"
          description="Track every lead, deal, and customer interaction in a modern CRM that lives inside your messaging platform."
        />

        <FadeIn className="mt-12">
          <KanbanPreview />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {crmFeatures.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.06}>
              <div className="rounded-lg border border-hairline bg-canvas p-5 text-center transition-all hover:border-primary/20 hover:shadow-[var(--shadow-sm)]">
                <h3 className="text-sm font-semibold text-ink">{feature.title}</h3>
                <p className="mt-1 text-xs text-ink-mute">{feature.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
