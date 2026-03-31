import {
  BellRing,
  Compass,
  FileArchive,
  ScanLine,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";

export const apps = [
  {
    name: "PDF Compressor",
    description:
      "Shrink PDF file sizes with quality controls, faster sharing, and a privacy-first workflow built for everyday documents.",
    icon: FileArchive,
    accent: "from-[#0C447C] to-[#5EA5E3]",
    href: "/apps/pdf-compressor",
    privacyHref: "/apps/pdf-compressor/privacy-policy",
    category: "Documents",
  },
  {
    name: "Nevlo Scan",
    description: "A fast utility for scanning documents, receipts, and notes with crisp smart enhancement.",
    icon: ScanLine,
    accent: "from-[#185FA5] to-[#4E95D9]",
    href: "#apps",
    privacyHref: "/privacy-policy",
    category: "Scanning",
  },
  {
    name: "Daily Nest",
    description: "Organize reminders, routines, and essential checklists in a distraction-free daily hub.",
    icon: BellRing,
    accent: "from-[#0C447C] to-[#185FA5]",
    href: "#apps",
    privacyHref: "/privacy-policy",
    category: "Productivity",
  },
  {
    name: "Pocket Route",
    description: "Save favorite places, plan quick trips, and keep practical location tools close at hand.",
    icon: Compass,
    accent: "from-[#5EA5E3] to-[#185FA5]",
    href: "#apps",
    privacyHref: "/privacy-policy",
    category: "Navigation",
  },
  {
    name: "Utility Vault",
    description: "Keep personal utility shortcuts, reference details, and secure notes in one trusted space.",
    icon: ShieldCheck,
    accent: "from-[#0C447C] to-[#2D74B8]",
    href: "#apps",
    privacyHref: "/privacy-policy",
    category: "Utilities",
  },
  {
    name: "Smart Budget Lite",
    description: "Track everyday expenses with focused insights built for speed, clarity, and consistency.",
    icon: WalletCards,
    accent: "from-[#3C83C8] to-[#7AB8F0]",
    href: "#apps",
    privacyHref: "/privacy-policy",
    category: "Finance",
  },
  {
    name: "Quick Spark",
    description: "A compact toolkit of useful actions and mini tools designed to save time throughout the day.",
    icon: Sparkles,
    accent: "from-[#185FA5] to-[#0C447C]",
    href: "#apps",
    privacyHref: "/privacy-policy",
    category: "Utilities",
  },
];

export const features = [
  {
    title: "Simple Tools",
    description: "Purpose-built experiences that solve everyday problems without clutter or learning curves.",
  },
  {
    title: "Fast Performance",
    description: "Optimized interfaces and practical workflows that feel quick, lightweight, and dependable.",
  },
  {
    title: "User-Friendly",
    description: "Clear design systems and accessible interactions that make each app immediately familiar.",
  },
  {
    title: "Daily Utility Focus",
    description: "Every product starts with real-life routines, so usefulness stays at the center of each release.",
  },
];
