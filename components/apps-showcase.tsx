"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { apps } from "@/data/apps";

function SkeletonCard() {
  return (
    <div className="surface-panel animate-pulse rounded-[1.75rem] p-5">
      <div className="h-14 w-14 rounded-2xl bg-primary-soft/70" />
      <div className="mt-6 h-5 w-32 rounded-full bg-primary-soft/60" />
      <div className="mt-3 h-3 w-full rounded-full bg-primary-soft/45" />
      <div className="mt-2 h-3 w-5/6 rounded-full bg-primary-soft/35" />
      <div className="mt-8 h-11 w-36 rounded-full bg-primary-soft/60" />
    </div>
  );
}

export function AppsShowcase() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section id="apps" className="section-anchor section-padding">
      <div className="container-shell">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-[0.28em] text-primary/70">
              App showcase
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold text-primary-deep md:text-5xl">
              Thoughtfully designed apps, built for useful moments
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-foreground/70">
            Each Nevlo product is shaped around practical tasks, smooth interactions, and a calm
            visual language that makes utility feel premium.
          </p>
        </div>

        <div className="premium-panel mb-8 grid gap-6 rounded-[2rem] p-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-medium text-primary-deep">
              <Star className="h-4 w-4 fill-current" />
              Featured utility direction
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold text-primary-deep md:text-3xl">
              A sharper product narrative for Nevlo&apos;s growing app ecosystem
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-7 text-foreground/72">
              From PDF compression and scanning to reminders, budgeting, and quick actions, the
              showcase is framed like a startup product suite rather than a simple grid of tools.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {["Documents", "Productivity", "Utilities"].map((label, index) => (
              <div
                key={label}
                className="rounded-[1.5rem] border border-white/60 bg-white/56 p-4 shadow-[0_14px_30px_rgba(12,68,124,0.08)]"
              >
                <div className="text-xs uppercase tracking-[0.28em] text-primary/65">Category 0{index + 1}</div>
                <div className="mt-3 font-display text-xl font-semibold text-primary-deep">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
            : apps.map((app, index) => {
                const Icon = app.icon;

                return (
                  <motion.article
                    key={app.name}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="premium-panel group relative overflow-hidden rounded-[1.75rem] p-5 transition duration-300 hover:-translate-y-1.5"
                  >
                    <div className="card-glow absolute inset-0 rounded-[1.75rem]" />
                    <div
                      className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-br ${app.accent} opacity-90`}
                    />
                    <div className="absolute right-4 top-4 rounded-full border border-white/40 bg-white/18 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white">
                      {app.category}
                    </div>
                    <div className="relative">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/88 text-primary-deep shadow-[0_16px_30px_rgba(12,68,124,0.12)]">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="mt-16">
                        <h3 className="font-display text-2xl font-semibold text-primary-deep">
                          {app.name}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-foreground/72">{app.description}</p>
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                          href={app.href}
                          className="inline-flex items-center gap-2 rounded-full border border-[rgba(12,68,124,0.12)] bg-white/78 px-4 py-2.5 text-sm font-semibold text-primary-deep transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-white"
                        >
                          View Details
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>

                        <Link
                          href={app.privacyHref}
                          className="inline-flex items-center gap-2 rounded-full border border-[rgba(12,68,124,0.10)] bg-primary-deep/6 px-4 py-2.5 text-sm font-semibold text-primary-deep transition duration-300 hover:bg-primary-deep/10"
                        >
                          Privacy
                          <ShieldCheck className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
        </div>
      </div>
    </section>
  );
}
