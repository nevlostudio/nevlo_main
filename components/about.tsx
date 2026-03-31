"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="section-anchor section-padding">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="surface-panel rounded-[2rem] p-8"
          >
            <div className="text-sm font-medium uppercase tracking-[0.28em] text-primary/70">
              Our story
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold text-primary-deep md:text-5xl">
              Built around practical ideas that genuinely help people
            </h2>
            <p className="mt-6 text-base leading-8 text-foreground/72">
              Nevlo began with a simple belief: everyday apps should feel calm, useful, and polished.
              Instead of building for noise, we build Android tools that reduce friction and support
              real routines, whether that means staying organized, scanning faster, or simplifying a
              small but important task.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {[
              ["Innovation with restraint", "We keep the experience modern without adding complexity."],
              ["Trust through clarity", "Simple flows and readable interfaces help users feel confident instantly."],
              ["Designed to scale", "Each release follows a consistent design language ready for future growth."],
              ["Focused on usefulness", "Real daily value matters more than gimmicks, so every feature earns its place."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="surface-panel rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1"
              >
                <h3 className="font-display text-xl font-semibold text-primary-deep">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground/70">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
