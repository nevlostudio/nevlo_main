import type { Metadata } from "next";
import {
  ArrowUpRight,
  Camera,
  ChevronLeft,
  ImageDown,
  ScanSearch,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "Photo Compressor by Nevlo",
  description:
    "Compress, resize, convert, and crop photos with a privacy-focused workflow designed for everyday Android devices.",
};

const highlights = [
  {
    title: "Smaller photos without the hassle",
    description:
      "Reduce large image files for easier sharing in chats, forms, listings, and social uploads without adding a complicated editor.",
    icon: ImageDown,
  },
  {
    title: "Flexible image controls",
    description:
      "Resize, convert, crop, and fine-tune compression settings so each photo output fits the task at hand.",
    icon: SlidersHorizontal,
  },
  {
    title: "Designed around on-device privacy",
    description:
      "The product direction keeps image handling local on your device and pairs it with a dedicated privacy policy page.",
    icon: ShieldCheck,
  },
];

const useCases = [
  "Prepare listing photos, profile pictures, and attachments so they upload faster and use less storage.",
  "Resize or convert images before sending them through messaging apps, forms, or email.",
  "Crop and compress camera photos into lighter files while keeping recent results easy to find locally.",
];

export default function PhotoCompressorPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-12">
      <div className="mesh-orb left-[-5rem] top-28 h-52 w-52 bg-[#D7F0E5]" />
      <div className="mesh-orb right-[-5rem] top-80 h-72 w-72 bg-[#E6F6EE]" />

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
            href="/apps/photo-compressor/privacy-policy"
            className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/62 px-4 py-2 text-sm font-medium text-primary-deep shadow-[0_12px_24px_rgba(12,68,124,0.08)] backdrop-blur"
          >
            <ShieldCheck className="h-4 w-4" />
            View Privacy Policy
          </Link>
        </div>

        <div className="premium-panel relative overflow-hidden rounded-[2rem] p-8 md:p-10 lg:p-12">
          <div className="card-glow absolute inset-0 rounded-[2rem]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(117,183,152,0.24),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(15,93,83,0.12),transparent_36%)]" />

          <div className="relative max-w-4xl">
            <div className="mb-6">
              <BrandLockup compact />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-medium text-primary-deep">
              <Camera className="h-4 w-4" />
              Photo utility app
            </div>

            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-primary-deep md:text-6xl">
              Photo Compressor by Nevlo
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-foreground/74 md:text-lg">
              Photo Compressor by Nevlo helps users compress, resize, convert, and crop images with
              an easy workflow that stays practical for storage savings, quick sharing, and
              everyday Android use.
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
                href="/apps/photo-compressor/privacy-policy"
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(12,68,124,0.12)] bg-white/78 px-5 py-3 text-sm font-semibold text-primary-deep transition hover:bg-white"
              >
                Privacy Policy
                <ShieldCheck className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div id="highlights" className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
              <ScanSearch className="h-4 w-4" />
              Everyday scenarios
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold text-primary-deep">
              Built around common image workflow bottlenecks
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
              The app includes an app-specific privacy policy covering on-device processing, local
              history, permissions, advertising behavior, and publishing notes so users and store
              reviewers can quickly verify how image data is handled.
            </p>
            <Link
              href="/apps/photo-compressor/privacy-policy"
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
