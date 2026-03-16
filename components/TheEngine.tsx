"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TheEngine() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-32 lg:py-48 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          className="text-[11px] uppercase tracking-[0.25em] text-gold font-body mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          AquaSolve
        </motion.p>
        <motion.h2
          className="font-display italic text-4xl md:text-5xl lg:text-6xl text-text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Deterministic by design.
        </motion.h2>

        <motion.div
          className="font-body text-lg text-text-secondary max-w-[700px] leading-relaxed mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="mb-6">
            AquaSolve is not an AI model. It is not a machine learning approximation.
            It is a deterministic constraint-satisfaction engine &mdash; the same
            calculation method used by licensed engineers, encoded into software.
          </p>
          <p>
            Given inputs, it derives outputs. Every time. The same way. The way code
            requires.
          </p>
        </motion.div>

        <motion.div
          className="bg-raised border-l-2 border-l-accent p-8 lg:p-12 max-w-[700px]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs text-accent uppercase tracking-wider mb-2">Methodology</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Proprietary constraint-satisfaction engine. Code-mandated formulas applied
                to project-specific geometry and jurisdiction-specific rules. No approximations.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs text-accent uppercase tracking-wider mb-2">Scope</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Hydraulic analysis, fixture calculations, pipe sizing, pump selection,
                equipment scheduling, chemical systems, ADA compliance, and jurisdiction
                verification — all from a single set of inputs.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs text-accent uppercase tracking-wider mb-2">Output</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Permit-grade calculation packages. Every value traceable to a code citation.
                Every output reproducible and defensible.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
