import type { Metadata } from "next";
import { ChevronLeft, FileCheck2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "PDF Compressor Privacy Policy | Nevlo",
  description:
    "Privacy Policy for the PDF Compressor app by Nevlo, including file handling, analytics, ads, and user controls.",
};

const sections = [
  {
    title: "Overview",
    body: "This Privacy Policy explains how the PDF Compressor app by Nevlo handles information when you use the app. The app is designed to help users compress PDF documents for easier storage and sharing while keeping data handling as limited and transparent as possible.",
  },
  {
    title: "PDF Files and Document Handling",
    body: "When you select a PDF for compression, the app uses that file only to perform the requested compression workflow. Nevlo does not claim ownership of your documents. Users should avoid processing sensitive files on shared or unsecured devices and should review app behavior and permissions before use.",
  },
  {
    title: "Information We May Collect",
    body: "The app may collect limited technical information such as device model, operating system version, app version, crash logs, diagnostic events, and basic usage signals. This information is used to maintain app stability, improve performance, and understand feature reliability.",
  },
  {
    title: "Advertising and Analytics",
    body: "If the app includes advertising or third-party analytics services, those partners may collect device identifiers, approximate location derived from IP address, or engagement-related signals in accordance with their own privacy policies. These services may be used to measure app performance, prevent fraud, and show ads.",
  },
  {
    title: "How We Use Information",
    body: "Information is used to operate the app, complete compression requests, diagnose crashes, improve speed and quality, understand aggregate usage patterns, and support product decisions. We do not sell personal information.",
  },
  {
    title: "Data Sharing",
    body: "Nevlo may share limited data with service providers that support analytics, crash reporting, app distribution, customer support, or advertising operations. Data may also be disclosed when required by law, to enforce legal rights, or to protect users and platform integrity.",
  },
  {
    title: "Permissions and User Controls",
    body: "The app may request file access or storage-related permissions so users can choose PDFs and save compressed results. You can manage permissions through your Android device settings. If advertising is present, you may also have options to limit ad personalization through device-level controls.",
  },
  {
    title: "Data Retention and Security",
    body: "We retain information only as long as reasonably necessary for operational, legal, and security purposes. We use reasonable safeguards to protect information, but no software or storage system can guarantee absolute security.",
  },
  {
    title: "Children's Privacy",
    body: "PDF Compressor is not intended to knowingly collect personal information from children. If you believe a child has provided personal data through the app, contact us and we will review the issue.",
  },
  {
    title: "Policy Updates",
    body: "This Privacy Policy may be updated to reflect changes in the app, legal requirements, or service providers. Any updates will be posted on this page with a revised effective date.",
  },
  {
    title: "Contact",
    body: "For privacy questions related to PDF Compressor, contact support.nevlo@gmail.com.",
  },
];

export default function PdfCompressorPrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-10">
      <div className="mesh-orb left-[-5rem] top-24 h-48 w-48 bg-[#CBE1F7]" />
      <div className="mesh-orb right-[-4rem] top-56 h-56 w-56 bg-[#DCECFB]" />

      <section className="container-shell section-padding">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/apps/pdf-compressor"
            className="nav-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primary-deep"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to PDF Compressor
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/62 px-4 py-2 text-sm font-medium text-primary-deep shadow-[0_12px_24px_rgba(12,68,124,0.08)] backdrop-blur">
            <FileCheck2 className="h-4 w-4" />
            Effective Date: March 31, 2026
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
              App-specific privacy policy
            </div>

            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-primary-deep md:text-6xl">
              PDF Compressor Privacy Policy
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-foreground/74 md:text-lg">
              This page provides privacy details specific to the PDF Compressor app, including file
              handling, diagnostic data, third-party services, and the controls available to users.
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
