"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const panels = [
  {
    stat: "50",
    label: "States",
    body: "Full nationwide coverage is the goal. Every state has its own health department code, its own interpretation of ISPSC, its own inspection criteria. Aquatic will encode them all.",
  },
  {
    stat: "6",
    label: "Live Today",
    body: "Virginia, Maryland, Washington DC, West Virginia, Pennsylvania, and Delaware — fully encoded with county-level jurisdiction rules active and validated against permitted projects.",
  },
  {
    stat: "3,000+",
    label: "County Jurisdictions",
    body: "State code is only the starting point. Counties override states. Local authorities add layers. Every jurisdiction gets its own rule set — not a regional approximation.",
  },
];

export default function Jurisdictions() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <section id="jurisdictions" className="py-32 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-body mb-6">
            Jurisdiction Intelligence
          </p>
          <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-text-primary mb-8">
            The rules change
            <br />
            by county.
          </h2>
          <p className="font-body text-xl text-text-secondary max-w-[600px] mx-auto leading-relaxed">
            Every state has its own code. Every county can override it.
            Aquatic encodes them all.
          </p>
        </motion.div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-0"
        >
          {panels.map((panel, i) => (
            <motion.div
              key={panel.label}
              initial={{ opacity: 0, y: 40 }}
              animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="bg-surface border border-border border-t-2 border-t-accent p-8 lg:p-12"
            >
              <p className="font-mono text-4xl lg:text-5xl text-accent font-bold mb-2">
                {panel.stat}
              </p>
              <p className="font-mono text-[11px] text-gold uppercase tracking-wider mb-6">
                {panel.label}
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                {panel.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
