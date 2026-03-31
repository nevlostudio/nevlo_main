import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

export function Button({ href, variant = "primary", children }: ButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
        isPrimary
          ? "bg-primary !text-white shadow-[0_16px_30px_rgba(24,95,165,0.28)] hover:-translate-y-0.5 hover:bg-primary-deep"
          : "border border-[rgba(12,68,124,0.12)] bg-white/70 text-primary-deep backdrop-blur hover:-translate-y-0.5 hover:border-[rgba(24,95,165,0.24)] hover:bg-white"
      }`}
    >
      <span className={isPrimary ? "!text-white" : ""}>{children}</span>
      <ArrowRight className={`h-4 w-4 ${isPrimary ? "!text-white" : ""}`} />
    </Link>
  );
}
