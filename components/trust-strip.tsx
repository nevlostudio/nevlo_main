import { Bolt, ShieldCheck, Sparkles, Workflow } from "lucide-react";

const items = [
  { label: "Utility-first thinking", icon: Workflow },
  { label: "Fast everyday workflows", icon: Bolt },
  { label: "Calm premium interfaces", icon: Sparkles },
  { label: "Trust-focused product design", icon: ShieldCheck },
];

export function TrustStrip() {
  return (
    <section className="section-divider relative py-4">
      <div className="container-shell">
        <div className="premium-panel grid gap-3 rounded-[1.75rem] p-4 md:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-white/50 bg-white/48 px-4 py-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-deep text-white">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="text-sm font-medium text-primary-deep">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
