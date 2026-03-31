"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Layers3, PlayCircle, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Utility-first releases", value: "12+" },
  { label: "Performance-led design", value: "Fast" },
  { label: "Built for daily routines", value: "24/7" },
];

const featureChips = [
  { label: "Fast releases", icon: Sparkles },
  { label: "Trust-led design", icon: ShieldCheck },
  { label: "Android first", icon: Smartphone },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-8">
      <div className="mesh-orb left-[-5rem] top-28 h-44 w-44 bg-[#9CCCF5]" />
      <div className="mesh-orb right-[8%] top-20 h-36 w-36 bg-[#CFE5F9]" />
      <div className="mesh-orb bottom-10 right-[-3rem] h-52 w-52 bg-[#B3D7F5]" />
      <div className="hero-grid pointer-events-none absolute inset-x-0 top-0 h-[640px]" />
      <div className="container-shell section-padding relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="premium-panel mb-8 rounded-[2rem] p-5 md:p-6">
              <BrandLockup compact />
            </div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/60 px-4 py-2 text-sm text-primary-deep shadow-[0_10px_30px_rgba(24,95,165,0.1)] backdrop-blur">
              <BadgeCheck className="h-4 w-4" />
              Trusted Android tools crafted for modern everyday needs
            </div>

            <h1 className="font-display text-balance text-5xl font-semibold leading-tight text-primary-deep md:text-6xl lg:text-7xl">
              Smart Apps for Everyday Life
            </h1>

            <p className="mt-6 max-w-xl text-balance text-lg leading-8 text-foreground/72 md:text-xl">
              Nevlo designs focused Android apps that make routine tasks simpler, faster, and more
              reliable with interfaces people actually enjoy using.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-primary-deep/78">
              {featureChips.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/62 px-4 py-2 shadow-[0_12px_24px_rgba(12,68,124,0.08)] backdrop-blur"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#apps">Explore Apps</Button>
              <Button href="#about" variant="secondary">
                Get Started
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="surface-panel rounded-3xl p-4">
                  <div className="font-display text-2xl font-semibold text-primary-deep">{item.value}</div>
                  <div className="mt-1 text-sm text-foreground/65">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="premium-panel relative overflow-hidden rounded-[2rem] p-5 md:p-6">
              <div className="card-glow absolute inset-0 rounded-[2rem]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(94,165,227,0.35),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(12,68,124,0.18),transparent_30%)]" />

              <div className="relative rounded-[1.75rem] bg-[#0D2740] p-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <div className="mb-4 flex items-center justify-between rounded-2xl bg-white/8 px-4 py-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-white/55">Nevlo Hub</div>
                    <div className="mt-1 font-display text-xl">Your utility stack</div>
                  </div>
                  <div className="rounded-2xl bg-primary/80 p-3">
                    <Smartphone className="h-5 w-5" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-[1.5rem] bg-white/8 p-4 backdrop-blur">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/70">Active tools</span>
                      <Layers3 className="h-4 w-4 text-[#99C8F1]" />
                    </div>
                    <div className="mt-6 space-y-3">
                      {["Scan smarter", "Budget quicker", "Organize daily"].map((label) => (
                        <div key={label} className="rounded-2xl bg-white/8 px-4 py-3">
                          <div className="h-2.5 w-24 rounded-full bg-white/90" />
                          <div className="mt-2 h-2 w-36 rounded-full bg-white/30" />
                          <div className="mt-3 text-sm text-white/72">{label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(94,165,227,0.22),rgba(255,255,255,0.08))] p-4">
                      <div className="text-sm text-white/70">Experience</div>
                      <div className="mt-2 font-display text-3xl">Clean by design</div>
                      <div className="mt-4 h-28 rounded-[1.25rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] p-4">
                        <div className="flex h-full items-end gap-2">
                          {[44, 68, 56, 88, 72, 96].map((height, index) => (
                            <div
                              key={height}
                              className="flex-1 rounded-full bg-[linear-gradient(180deg,#9ED1FC,#4D97DB)]"
                              style={{ height: `${height}%`, animationDelay: `${index * 120}ms` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] bg-white/8 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-white/70">Product preview</div>
                          <div className="mt-1 font-medium text-white">Focused and intuitive</div>
                        </div>
                        <div className="rounded-full bg-white/12 p-2">
                          <PlayCircle className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4 h-28 rounded-[1.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02))]" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    ["4.9/5", "Interface clarity"],
                    ["12+", "Live app concepts"],
                    ["<2 taps", "Core actions"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl bg-white/8 px-4 py-3">
                      <div className="font-display text-xl text-white">{value}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/55">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-panel absolute -bottom-6 -left-2 rounded-3xl px-4 py-3 text-sm text-primary-deep md:-left-8">
              Lightweight, practical, and polished for real-world use
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
