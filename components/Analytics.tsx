"use client";

import { TrendingUp, Users, DollarSign, Clock } from "lucide-react";
import { SectionHeader, FadeIn } from "./ui/SectionHeader";

const kpis = [
  {
    icon: Users,
    label: "Leads Generated",
    value: "2,847",
    change: "+18.2%",
    positive: true,
  },
  {
    icon: TrendingUp,
    label: "Conversion Rate",
    value: "34.6%",
    change: "+5.4%",
    positive: true,
  },
  {
    icon: DollarSign,
    label: "Campaign Revenue",
    value: "$128K",
    change: "+22.1%",
    positive: true,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "1.2s",
    change: "-40%",
    positive: true,
  },
];

function ChartMockup() {
  const data = [30, 45, 38, 62, 55, 78, 68, 85, 72, 92, 88, 95];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div className="overflow-hidden rounded-lg border border-hairline bg-canvas shadow-[var(--shadow-md)]">
      <div className="border-b border-hairline px-5 py-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-ink">Growth Overview</span>
          <div className="flex gap-2">
            {["7D", "30D", "90D", "1Y"].map((period, i) => (
              <span
                key={period}
                className={`rounded-[6px] px-2 py-0.5 text-xs ${
                  i === 3 ? "bg-primary/10 font-medium text-primary" : "text-ink-mute"
                }`}
              >
                {period}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex h-48 items-end gap-1.5">
          {data.map((h, i) => (
            <div key={i} className="group relative flex flex-1 flex-col items-center">
              <div
                className="w-full rounded-sm bg-primary/15 transition-all group-hover:bg-primary/25"
                style={{ height: `${h}%` }}
              >
                <div
                  className="w-full rounded-sm bg-primary transition-all"
                  style={{ height: "60%", marginTop: "40%" }}
                />
              </div>
              {i % 3 === 0 && (
                <span className="mt-2 text-[9px] text-ink-mute">{months[i]}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Analytics() {
  return (
    <section id="analytics" className="bg-canvas-soft py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Analytics"
          title="Turn engagement data into growth decisions"
          description="Real-time dashboards and KPI tracking that show exactly what's working — and what to optimize next."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi, i) => (
            <FadeIn key={kpi.label} delay={i * 0.08}>
              <div className="rounded-lg border border-hairline bg-canvas p-6 transition-all hover:shadow-[var(--shadow-sm)]">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    <kpi.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary">{kpi.change}</span>
                </div>
                <div className="mt-4 text-2xl font-semibold tracking-tight text-ink">
                  {kpi.value}
                </div>
                <div className="mt-1 text-sm text-ink-mute">{kpi.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-8">
          <ChartMockup />
        </FadeIn>
      </div>
    </section>
  );
}
