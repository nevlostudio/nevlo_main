import type { Metadata } from "next";
import { ChevronLeft, FileCheck2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "Privacy Policy for Photo Compressor by Nevlo",
  description:
    "Privacy Policy for Photo Compressor by Nevlo, including image handling, permissions, local storage, and advertising details.",
};

const sections = [
  {
    title: "1. Information We Collect",
    points: [
      "Photos and media files that you choose to select for compression, resizing, conversion, or cropping.",
      "Camera access if you choose to capture a new photo.",
      "Device storage or media library access if you choose to save processed images.",
      "Basic ad-related device information used by Google AdMob to serve ads, subject to Google's own policies.",
      "We do not require account registration to use the App.",
    ],
  },
  {
    title: "2. How Your Images Are Used",
    intro:
      "Your selected images are used only to provide the App's features, including:",
    points: [
      "Compressing images.",
      "Resizing images.",
      "Converting image formats.",
      "Cropping images.",
      "Saving processed images.",
      "Sharing processed images.",
      "Showing recent processed files in local history.",
      "Image processing is performed on your device. We do not upload your photos or processed images to our own servers.",
    ],
  },
  {
    title: "3. Local Storage and History",
    intro:
      "The App stores some data locally on your device to support functionality, such as:",
    points: [
      "Recently processed image history.",
      "Temporary or saved processed files.",
      "App preferences.",
      "This information remains on your device unless you delete it, clear app data, or uninstall the App.",
    ],
  },
  {
    title: "4. Advertising",
    points: [
      "The App may display advertisements using Google AdMob.",
      "Google AdMob may collect and process certain data such as device identifiers, IP address, approximate location, app interactions, and advertising data in accordance with Google's privacy policies and applicable laws.",
      "Google Privacy Policy: https://policies.google.com/privacy",
      "Google Advertising Policy information: https://policies.google.com/technologies/ads",
    ],
  },
  {
    title: "5. Permissions",
    intro: "The App may request the following permissions:",
    points: [
      "Camera: to capture photos.",
      "Photos/Media/Storage: to select images and save processed results.",
      "Internet: to load advertising content.",
      "These permissions are requested only to support the App's features.",
    ],
  },
  {
    title: "6. Data Sharing",
    points: [
      "We do not sell your personal data.",
      "We do not share your images with us or with third parties, except when you explicitly choose to use your device's share feature, or when third-party services such as Google AdMob process limited technical data under their own policies.",
    ],
  },
  {
    title: "7. Children",
    points: [
      "The App is not directed specifically to children under 13.",
      "If you are a parent or guardian and believe a child has provided personal information through third-party services connected to the App, please contact the relevant service provider directly.",
    ],
  },
  {
    title: "8. Data Security",
    points: [
      "We take reasonable steps to minimize data access and process images on-device where possible.",
      "However, no method of electronic storage or transmission is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "9. Your Choices",
    points: [
      "Deny camera or storage permissions, though some features may not work correctly.",
      "Delete processed files from your device.",
      "Clear app data from system settings.",
      "Uninstall the App at any time.",
    ],
  },
  {
    title: "10. Third-Party Services",
    intro: "The App may use third-party services, including:",
    points: [
      "Google AdMob.",
      "Android system sharing and media APIs.",
      "Your use of those services may be subject to their own terms and privacy policies.",
    ],
  },
  {
    title: "11. Changes to This Privacy Policy",
    points: [
      "We may update this Privacy Policy from time to time. Updated versions should be published with a new effective date.",
    ],
  },
  {
    title: "12. Contact",
    points: [
      "If you have questions about this Privacy Policy, you should provide a contact email or support address before publishing the App on Google Play.",
      "Recommended placeholder: support@nevlo.example",
    ],
  },
];

const notes = [
  "Replace the contact placeholder with your real support email.",
  "Review whether your final AdMob configuration, consent flow, analytics usage, and data safety declarations still match this policy.",
  "Review with a legal professional if needed for your region or business requirements.",
];

export default function PhotoCompressorPrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-10">
      <div className="mesh-orb left-[-5rem] top-24 h-48 w-48 bg-[#D7F0E5]" />
      <div className="mesh-orb right-[-4rem] top-56 h-56 w-56 bg-[#E6F6EE]" />

      <section className="container-shell section-padding">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/apps/photo-compressor"
            className="nav-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primary-deep"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to App
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/62 px-4 py-2 text-sm font-medium text-primary-deep shadow-[0_12px_24px_rgba(12,68,124,0.08)] backdrop-blur">
            <FileCheck2 className="h-4 w-4" />
            Effective Date: April 4, 2026
          </div>
        </div>

        <div className="premium-panel relative overflow-hidden rounded-[2rem] p-8 md:p-10 lg:p-12">
          <div className="card-glow absolute inset-0 rounded-[2rem]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(117,183,152,0.20),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(15,93,83,0.10),transparent_34%)]" />

          <div className="relative max-w-4xl">
            <div className="mb-6">
              <BrandLockup compact />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-medium text-primary-deep">
              <ShieldCheck className="h-4 w-4" />
              App-specific privacy policy
            </div>

            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-primary-deep md:text-6xl">
              Privacy Policy for Photo Compressor by Nevlo
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-foreground/74 md:text-lg">
              Photo Compressor by Nevlo respects your privacy. This page explains how the app
              handles image access, local storage, permissions, advertising, and publishing notes
              for Android or other supported platforms.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6">
          {sections.map((section) => (
            <article key={section.title} className="surface-panel rounded-[1.75rem] p-6 md:p-8">
              <h2 className="font-display text-2xl font-semibold text-primary-deep">
                {section.title}
              </h2>
              {section.intro ? (
                <p className="mt-4 max-w-4xl text-base leading-8 text-foreground/72">
                  {section.intro}
                </p>
              ) : null}
              <ul className="mt-4 space-y-3 text-base leading-8 text-foreground/72">
                {section.points.map((point) => (
                  <li key={point} className="rounded-[1.1rem] border border-[rgba(12,68,124,0.10)] bg-white/60 px-4 py-3">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <article className="premium-panel rounded-[1.75rem] p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-primary-deep">Important Note</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-foreground/72">
              This file is a general privacy policy draft based on the current app behavior in this
              project. Before publishing to Google Play, you should:
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-foreground/72">
              {notes.map((note) => (
                <li
                  key={note}
                  className="rounded-[1.1rem] border border-[rgba(12,68,124,0.10)] bg-white/60 px-4 py-3"
                >
                  {note}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
