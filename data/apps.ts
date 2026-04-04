import {
  FileArchive,
  ImageDown,
} from "lucide-react";

export const apps = [
  {
    name: "Compress PDF to 100KB - Nevlo",
    description:
      "Compress PDF files toward a smaller target size for easier sharing with a privacy-focused workflow built for everyday documents.",
    icon: FileArchive,
    accent: "from-[#0C447C] to-[#5EA5E3]",
    href: "/apps/pdf-compressor",
    privacyHref: "/apps/pdf-compressor/privacy-policy",
    category: "Documents",
  },
  {
    name: "Photo Compressor by Nevlo",
    description:
      "Compress, resize, convert, and crop photos on-device so images stay easier to store, share, and manage.",
    icon: ImageDown,
    accent: "from-[#0F5D53] to-[#75B798]",
    href: "/apps/photo-compressor",
    privacyHref: "/apps/photo-compressor/privacy-policy",
    category: "Photos",
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
