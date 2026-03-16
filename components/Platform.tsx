"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    step: "STEP 01",
    title: "Project Parameters",
    body: "Pool geometry, bather load, site location, water features, jurisdiction. The inputs a designer already has on day one.",
    formula: null,
  },
  {
    step: "STEP 02",
    title: "AquaSolve Engine",
    body: "Constraint-satisfaction engine applies jurisdiction-specific code rules simultaneously. No approximations. No rule-of-thumb shortcuts. Code-derived formulas, every time.",
    formula: null,
  },
  {
    step: "STEP 03",
    title: "Calculated Intelligence",
    body: "Skimmer and return counts. TDH. Pump selection. Pipe sizing. Equipment schedules. Chemical system sizing. ADA requirements. Jurisdiction compliance flags. All of it, derived.",
    formula: null,
  },
];

export default function Platform() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <section className="py-32 lg:py-48 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-body mb-6">
            The Platform
          </p>
          <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-text-primary mb-8">
            Every calculation.
            <br />
            Every jurisdiction.
            <br />
            Every time.
          </h2>
          <p className="font-body text-xl text-text-secondary max-w-[600px] mx-auto mb-20 leading-relaxed">
            Input your project parameters. Aquatic returns the engineering
            intelligence.
          </p>
        </motion.div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-0"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              animate={
                gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
              }
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="bg-surface border border-border border-t-2 border-t-accent p-8 lg:p-12"
            >
              <p className="font-mono text-[11px] text-accent tracking-wider mb-6">
                {step.step}
              </p>
              <h3 className="font-body text-lg font-semibold text-text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {step.body}
              </p>
              {step.formula && (
                <p className="font-mono text-xs text-accent mt-4">
                  {step.formula}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
