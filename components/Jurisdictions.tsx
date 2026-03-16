"use client";

import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Jurisdiction entries                                                */
/* ------------------------------------------------------------------ */
const jurisdictions = [
  {
    name: "Virginia",
    rule: '100% skimmer suction · 12VAC5-460 · 6-hr turnover',
  },
  {
    name: "Maryland",
    rule: '80/20 skimmer/main drain · COMAR 10.17.01',
  },
  {
    name: "Loudoun County",
    rule: '20–35 GPM per skimmer (Chapter 838) · overrides state',
  },
  {
    name: "Washington DC",
    rule: '25-C DCMR · full ISPSC adoption',
  },
  {
    name: "West Virginia",
    rule: '64 CSR 16',
  },
  {
    name: "Pennsylvania",
    rule: '28 Pa. Code Chapter 18',
  },
  {
    name: "Delaware",
    rule: 'ISPSC · AHJ-discretionary barriers',
  },
  {
    name: "ADA — All Jurisdictions",
    rule: '2010 Standards · lift, deck, egress',
  },
];

/* ------------------------------------------------------------------ */
/*  Jurisdictions                                                      */
/* ------------------------------------------------------------------ */
export default function Jurisdictions() {
  return (
    <section className="py-32 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-body mb-6">
          JURISDICTION INTELLIGENCE
        </p>

        {/* Headline */}
        <h2 className="font-display italic text-4xl lg:text-5xl text-text-primary mb-4">
          The rules change
          <br />
          by county.
        </h2>

        {/* Sub */}
        <p className="font-body text-xl text-text-secondary mb-20">
          Aquatic doesn&apos;t miss one.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* LEFT — Jurisdiction list */}
        <div className="bg-surface p-8 lg:p-16">
          {jurisdictions.map((j, i) => (
            <motion.div
              key={j.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`py-8 ${i < jurisdictions.length - 1 ? "border-b border-border" : ""}`}
            >
              <h3 className="font-display italic text-2xl lg:text-3xl text-text-primary">
                {j.name}
              </h3>
              <motion.p
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: i * 0.1 + 0.2 }}
                className="font-mono text-xs text-accent mt-2"
              >
                {j.rule}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* RIGHT — Stats column */}
        <div className="bg-bg p-8 lg:p-16 flex flex-col items-center justify-center text-center lg:sticky lg:top-0 lg:h-screen">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[180px] lg:text-[220px] text-accent font-bold leading-none">
              6
            </p>
            <p className="font-body text-lg text-text-secondary mt-2 mb-16">
              states
            </p>

            <p className="font-mono text-6xl text-accent font-bold">
              200+
            </p>
            <p className="font-body text-lg text-text-secondary mt-2 mb-16">
              jurisdictions
            </p>

            <p className="font-body text-lg text-text-muted italic">
              Every rule, applied automatically.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
