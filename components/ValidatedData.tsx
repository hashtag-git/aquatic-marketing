"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "200+", label: "Permitted projects validated against" },
  { value: "6", label: "States with active project history" },
  { value: "100%", label: "Permit approval rate on Aquatic-generated documents" },
  { value: "25+", label: "Years of engineering data encoded" },
];

export default function ValidatedData() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const quoteRef = useRef<HTMLDivElement>(null);
  const quoteInView = useInView(quoteRef, { once: true, margin: "-100px" });

  return (
    <section id="validation" className="py-32 lg:py-48 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-body mb-6">
          Validated Against Real Projects
        </p>
        <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-text-primary mb-20">
          The math checks out.
        </h2>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-surface border border-border p-8 lg:p-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <p className="font-mono text-4xl lg:text-5xl text-accent font-bold mb-4">
                {stat.value}
              </p>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div ref={quoteRef} className="py-24 text-center">
          <motion.blockquote
            className="font-display italic text-3xl md:text-4xl lg:text-5xl text-text-primary leading-snug max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={quoteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            &ldquo;Every number in Aquatic traces to a code citation. Not a rule of thumb.
            A defensible calculation.&rdquo;
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
