import type { Metadata } from "next";
import {
  ArrowUpRight,
  ChevronLeft,
  Download,
  FileArchive,
  ShieldCheck,
  SlidersHorizontal,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "Compress PDF to 100KB - Nevlo",
  description:
    "Compress PDF files to a smaller size for faster sharing with a privacy-focused workflow from Nevlo.",
};

const highlights = [
  {
    title: "Smaller files, faster sharing",
    description:
      "Reduce large PDFs before sending them by email, messaging apps, or upload forms with less friction.",
    icon: FileArchive,
  },
  {
    title: "Quality controls that stay practical",
    description:
      "Choose a balanced compression level so everyday documents stay readable while dropping unnecessary size.",
    icon: SlidersHorizontal,
  },
  {
    title: "Built for privacy-minded handling",
    description:
      "The product direction prioritizes minimal data collection and a transparent policy for document handling.",
    icon: ShieldCheck,
  },
];

const useCases = [
  "Compress resumes, forms, and school submissions before upload limits get in the way.",
  "Make scanned documents easier to share with clients, teams, and family members.",
  "Keep document workflows lighter on storage without adding a complicated editing toolchain.",
];

export default function PdfCompressorPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-12">
      <div className="mesh-orb left-[-5rem] top-28 h-52 w-52 bg-[#CBE1F7]" />
      <div className="mesh-orb right-[-5rem] top-80 h-72 w-72 bg-[#DCECFB]" />

      <section className="container-shell section-padding">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="nav-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primary-deep"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <Link
            href="/apps/pdf-compressor/privacy-policy"
            className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/62 px-4 py-2 text-sm font-medium text-primary-deep shadow-[0_12px_24px_rgba(12,68,124,0.08)] backdrop-blur"
          >
            <ShieldCheck className="h-4 w-4" />
            View Privacy Policy
          </Link>
        </div>

        <div className="premium-panel relative overflow-hidden rounded-[2rem] p-8 md:p-10 lg:p-12">
          <div className="card-glow absolute inset-0 rounded-[2rem]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(94,165,227,0.20),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(12,68,124,0.10),transparent_36%)]" />

          <div className="relative max-w-4xl">
            <div className="mb-6">
              <BrandLockup compact />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-medium text-primary-deep">
              <Zap className="h-4 w-4" />
              Document utility app
            </div>

            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-primary-deep md:text-6xl">
              Compress PDF to 100KB
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-foreground/74 md:text-lg">
              Compress PDF to 100KB helps users reduce PDF file size for simpler uploads, easier
              sharing, and a lightweight experience that feels reliable on everyday Android devices.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#highlights"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(24,95,165,0.28)] transition hover:bg-primary-deep"
              >
                Explore Features
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href="/apps/pdf-compressor/privacy-policy"
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(12,68,124,0.12)] bg-white/78 px-5 py-3 text-sm font-semibold text-primary-deep transition hover:bg-white"
              >
                Privacy Policy
                <ShieldCheck className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div
          id="highlights"
          className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="surface-panel rounded-[1.75rem] p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft/70 text-primary-deep">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-semibold text-primary-deep">
                  {item.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-foreground/72">{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="surface-panel rounded-[1.75rem] p-6 md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-medium text-primary-deep">
              <Download className="h-4 w-4" />
              Everyday scenarios
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold text-primary-deep">
              Built around common PDF bottlenecks
            </h2>
            <div className="mt-5 grid gap-4">
              {useCases.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-[rgba(12,68,124,0.10)] bg-white/65 p-4 text-base leading-7 text-foreground/74"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="premium-panel rounded-[1.75rem] p-6 md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-medium text-primary-deep">
              <ShieldCheck className="h-4 w-4" />
              Trust and transparency
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold text-primary-deep">
              Privacy details are available on a dedicated page
            </h2>
            <p className="mt-4 text-base leading-8 text-foreground/72">
              The app includes a dedicated privacy policy page covering local file handling,
              advertising behavior, and user-facing permissions so store reviewers and users can
              quickly find the information they need.
            </p>
            <Link
              href="/apps/pdf-compressor/privacy-policy"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(24,95,165,0.28)] transition hover:bg-primary-deep"
            >
              Open App Privacy Policy
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
