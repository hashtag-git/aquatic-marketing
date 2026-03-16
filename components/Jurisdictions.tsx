"use client";

import { motion } from "framer-motion";

const liveStates = [
  "Virginia",
  "Maryland",
  "Washington DC",
  "West Virginia",
  "Pennsylvania",
  "Delaware",
];

const comingStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
  "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Washington", "Wisconsin",
  "Wyoming",
];

export default function Jurisdictions() {
  return (
    <section id="jurisdictions" className="py-32 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-body mb-6">
          Jurisdiction Intelligence
        </p>

        <h2 className="font-display italic text-4xl lg:text-5xl text-text-primary mb-4">
          The rules change
          <br />
          by county.
        </h2>

        <p className="font-body text-xl text-text-secondary mb-20 max-w-2xl">
          Every state has its own code. Every county can override it.
          Aquatic encodes them all — and we&apos;re building toward
          full nationwide coverage.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* LEFT — State coverage */}
        <div className="bg-surface p-8 lg:p-16">
          {/* Live states */}
          <p className="font-mono text-[11px] text-accent uppercase tracking-wider mb-8">
            Live — Jurisdiction Rules Encoded
          </p>
          <div className="mb-16">
            {liveStates.map((state, i) => (
              <motion.div
                key={state}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`py-5 ${i < liveStates.length - 1 ? "border-b border-border" : ""}`}
              >
                <h3 className="font-display italic text-2xl lg:text-3xl text-text-primary">
                  {state}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Coming states */}
          <p className="font-mono text-[11px] text-gold uppercase tracking-wider mb-6">
            In Development — 44 States Remaining
          </p>
          <div className="flex flex-wrap gap-2">
            {comingStates.map((state, i) => (
              <motion.span
                key={state}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.015 }}
                className="font-body text-xs text-text-muted border border-border px-3 py-1.5"
              >
                {state}
              </motion.span>
            ))}
          </div>
        </div>

        {/* RIGHT — Stats column */}
        <div className="bg-bg p-8 lg:p-16 flex flex-col items-center justify-center text-center lg:sticky lg:top-0 lg:h-screen">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[140px] lg:text-[200px] text-accent font-bold leading-none">
              50
            </p>
            <p className="font-body text-lg text-text-secondary mt-2 mb-16">
              states
            </p>

            <p className="font-mono text-5xl lg:text-6xl text-accent font-bold">
              3,000+
            </p>
            <p className="font-body text-lg text-text-secondary mt-2 mb-16">
              county jurisdictions
            </p>

            <p className="font-body text-lg text-text-muted italic max-w-xs">
              Every rule, every county, every state. Applied automatically.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
