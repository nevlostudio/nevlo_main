"use client";

import { motion } from "framer-motion";
import { Gauge, HeartHandshake, LayoutGrid, Zap } from "lucide-react";
import { features } from "@/data/apps";

const icons = [LayoutGrid, Gauge, HeartHandshake, Zap];

export function Features() {
  return (
    <section id="features" className="section-anchor section-padding">
      <div className="container-shell">
        <div className="surface-panel rounded-[2rem] p-6 md:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.28em] text-primary/70">
                Why Nevlo
              </div>
              <h2 className="mt-3 font-display text-3xl font-semibold text-primary-deep md:text-5xl">
                Utility products made with clarity, speed, and trust
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-foreground/72">
                We focus on the details that turn simple tools into products people return to every
                day: helpful flows, quick feedback, and interfaces that stay out of the way.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = icons[index];

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="rounded-[1.5rem] border border-[rgba(12,68,124,0.08)] bg-white/72 p-5 shadow-[0_14px_34px_rgba(12,68,124,0.08)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary-deep">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-primary-deep">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-foreground/70">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
