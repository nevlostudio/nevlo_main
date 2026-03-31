import type { Metadata } from "next";
import { ChevronLeft, FileCheck2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "Privacy Policy | Nevlo",
  description:
    "Nevlo privacy policy for Android apps and website visitors, including data handling, ads, analytics, and user rights.",
};

const sections = [
  {
    title: "Information We Collect",
    body: "Nevlo may collect limited information needed to operate and improve our apps and website. This can include basic device information, app performance data, crash reports, and usage analytics. If an app contains ads, advertising partners may also collect identifiers or device-related information to deliver and measure ads.",
  },
  {
    title: "How We Use Information",
    body: "We use information to keep our apps reliable, understand feature usage, improve performance, fix issues, and maintain a safe product experience. We may also use aggregated insights to guide product decisions and improve future app releases.",
  },
  {
    title: "Advertising and Third-Party Services",
    body: "Some Nevlo apps may use third-party services such as advertising providers, analytics tools, crash reporting tools, or distribution platforms. These services may process data according to their own privacy policies. If ads are shown in an app, third-party ad networks may use device or usage information to serve and measure relevant advertising.",
  },
  {
    title: "Data Sharing",
    body: "Nevlo does not sell personal information. Data may be shared only with trusted service providers that help us operate, analyze, distribute, or support our apps and only when needed for those purposes or to comply with legal obligations.",
  },
  {
    title: "Data Security",
    body: "We take reasonable steps to protect information through appropriate technical and organizational measures. However, no method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
  },
  {
    title: "Children's Privacy",
    body: "Nevlo does not knowingly collect personal information from children unless explicitly stated for a specific app experience and permitted by applicable law. If you believe a child has provided personal information, please contact us so we can review and address it.",
  },
  {
    title: "Your Choices and Rights",
    body: "Depending on your location, you may have rights related to access, correction, deletion, or restriction of certain personal data. You may also be able to manage app permissions, reset device advertising identifiers, or limit personalized ads through your device settings.",
  },
  {
    title: "Changes to This Policy",
    body: "Nevlo may update this Privacy Policy from time to time to reflect product, legal, or operational changes. When updates are made, the revised version will be posted on this page with a new effective date.",
  },
  {
    title: "Contact Us",
    body: "If you have questions about this Privacy Policy or a Nevlo app, contact us at support.nevlo@gmail.com.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-10">
      <div className="mesh-orb left-[-5rem] top-24 h-48 w-48 bg-[#CBE1F7]" />
      <div className="mesh-orb right-[-4rem] top-56 h-56 w-56 bg-[#DCECFB]" />

      <section className="container-shell section-padding">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="nav-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primary-deep"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/62 px-4 py-2 text-sm font-medium text-primary-deep shadow-[0_12px_24px_rgba(12,68,124,0.08)] backdrop-blur">
            <FileCheck2 className="h-4 w-4" />
            Effective Date: March 30, 2026
          </div>
        </div>

        <div className="premium-panel relative overflow-hidden rounded-[2rem] p-8 md:p-10 lg:p-12">
          <div className="card-glow absolute inset-0 rounded-[2rem]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(94,165,227,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(12,68,124,0.10),transparent_34%)]" />

          <div className="relative max-w-4xl">
            <div className="mb-6">
              <BrandLockup compact />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-medium text-primary-deep">
              <ShieldCheck className="h-4 w-4" />
              Privacy and transparency
            </div>

            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-primary-deep md:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-foreground/74 md:text-lg">
              This Privacy Policy explains how Nevlo collects, uses, and protects information when
              you use our website and Android apps. It is intended to support transparency for users,
              publishing requirements, and Play Store compliance for apps that may include ads or
              third-party services.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6">
          {sections.map((section) => (
            <article key={section.title} className="surface-panel rounded-[1.75rem] p-6 md:p-8">
              <h2 className="font-display text-2xl font-semibold text-primary-deep">{section.title}</h2>
              <p className="mt-4 max-w-4xl text-base leading-8 text-foreground/72">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
