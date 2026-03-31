import { LogoMark } from "@/components/logo-mark";

type BrandLockupProps = {
  compact?: boolean;
};

const chips = [
  { label: "Tools & Utilities", tone: "bg-[#1E5FA1] text-white" },
  { label: "Productivity", tone: "bg-[#0D6A5B] text-white" },
  { label: "System Apps", tone: "bg-[#57544F] text-white" },
];

export function BrandLockup({ compact = false }: BrandLockupProps) {
  return (
    <div className={`flex items-start gap-4 ${compact ? "max-w-2xl" : "max-w-3xl"}`}>
      <LogoMark size={compact ? "md" : "lg"} />

      <div className="min-w-0">
        <div
          className={`font-display font-semibold leading-none text-primary-deep ${
            compact ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"
          }`}
        >
          Nevlo
        </div>
        <p
          className={`mt-2 text-balance text-foreground/72 ${
            compact ? "text-base md:text-lg" : "text-lg md:text-xl"
          }`}
        >
          New level. Smarter tools for everyday Android life.
        </p>

        <div className="mt-4 flex flex-wrap gap-2.5">
          {chips.map((chip) => (
            <div
              key={chip.label}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold shadow-[0_8px_18px_rgba(12,68,124,0.12)] ${chip.tone}`}
            >
              {chip.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
