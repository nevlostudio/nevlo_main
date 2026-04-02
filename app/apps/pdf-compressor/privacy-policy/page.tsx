import type { Metadata } from "next";
import { ChevronLeft, FileCheck2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "Privacy Policy for Compress PDF to 100KB - Nevlo",
  description:
    "Privacy Policy for Compress PDF to 100KB - Nevlo, including local file handling, permissions, and advertising details.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: "We do NOT collect any personally identifiable information from users. This includes name, email address, phone number, and location data.",
  },
  {
    title: "2. File Access and Storage",
    body: "The app requires access to your device storage to allow you to select and compress PDF files. All file processing is done locally on your device. We do NOT upload, store, or share your files on any server.",
  },
  {
    title: "3. Permissions Used",
    body: "Our app may request Storage (Read/Write) permission to access and save PDF files on your device, and Internet permission to display advertisements.",
  },
  {
    title: "4. Advertising",
    body: "We use third-party advertising services such as Google AdMob. AdMob may collect limited data such as device information, Advertising ID, and usage data. This data is used to provide relevant ads. For more information, please review Google's privacy policy: https://policies.google.com/privacy",
  },
  {
    title: "5. Data Sharing",
    body: "We do NOT share any personal data with third parties. However, third-party services like AdMob may collect and process data as per their own privacy policies.",
  },
  {
    title: "6. Children's Privacy",
    body: "This app is NOT specifically directed toward children under the age of 13. We do not knowingly collect personal information from children.",
  },
  {
    title: "7. Data Security",
    body: "We do not store any user data on our servers. All processing happens locally on your device, helping ensure maximum privacy and security.",
  },
  {
    title: "8. Your Consent",
    body: "By using our app, you agree to this Privacy Policy.",
  },
  {
    title: "9. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Any changes will be reflected on this page.",
  },
  {
    title: "10. Contact Us",
    body: "If you have any questions or concerns about this Privacy Policy, please contact us at support.nevlo@gmail.com or visit https://nevlo.netlify.app/",
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
            Back to App
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/62 px-4 py-2 text-sm font-medium text-primary-deep shadow-[0_12px_24px_rgba(12,68,124,0.08)] backdrop-blur">
            <FileCheck2 className="h-4 w-4" />
            Effective Date: April 2, 2026
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
              Privacy Policy for Compress PDF to 100KB - Nevlo
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-foreground/74 md:text-lg">
              This page explains how Compress PDF to 100KB - Nevlo handles file access,
              permissions, advertising, and privacy for app users.
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
