"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const rows = [
  {
    number: "01",
    title: "Every hydraulic calculation is done by hand.",
    body: "TDH, pipe sizing, pump curves, flow distribution \u2014 each one derived from jurisdiction-specific formulas applied to project-specific geometry. One error means permit rejection. One rejection means weeks of delay.",
  },
  {
    number: "02",
    title: "200+ jurisdictions. Zero shared standards.",
    body: "Virginia mandates 100% skimmer suction. Maryland requires an 80/20 skimmer-to-drain split. Loudoun County enforces a 20\u201335 GPM-per-skimmer range that overrides state code. DC, West Virginia, Delaware, Pennsylvania \u2014 each has its own interpretation of ISPSC. Every project requires a designer who knows all of them.",
  },
  {
    number: "03",
    title: "The data that takes months to produce informs every decision.",
    body: "Equipment selection, chemical system sizing, ADA compliance, structural loading \u2014 none of it can move until the hydraulic foundation is complete. The bottleneck is calculation, not design.",
  },
];

function ProblemRow({
  number,
  title,
  body,
  index,
}: {
  number: string;
  title: string;
  body: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 1;
  const xOffset = isEven ? 60 : -60;

  return (
    <div ref={ref} className="py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, x: xOffset }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xOffset }}
        transition={{ duration: 0.7, staggerChildren: 0.08 }}
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${
          isEven ? "lg:direction-rtl" : ""
        }`}
      >
        {isEven ? (
          <>
            <motion.div
              initial={{ opacity: 0, x: xOffset }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xOffset }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="lg:col-span-10"
            >
              <h3 className="font-body text-xl lg:text-2xl text-text-primary font-semibold mb-4">
                {title}
              </h3>
              <p className="text-text-secondary leading-relaxed max-w-2xl">
                {body}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: xOffset }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xOffset }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 lg:text-right"
            >
              <span className="font-mono text-6xl lg:text-8xl text-gold/30 font-bold">
                {number}
              </span>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, x: xOffset }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xOffset }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              <span className="font-mono text-6xl lg:text-8xl text-gold/30 font-bold">
                {number}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: xOffset }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xOffset }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="lg:col-span-10"
            >
              <h3 className="font-body text-xl lg:text-2xl text-text-primary font-semibold mb-4">
                {title}
              </h3>
              <p className="text-text-secondary leading-relaxed max-w-2xl">
                {body}
              </p>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 lg:py-48 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-body mb-6">
            The Challenge
          </p>
          <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-text-primary">
            Commercial pool design runs on manual calculation.
          </h2>
        </motion.div>

        {rows.map((row, i) => (
          <ProblemRow
            key={row.number}
            number={row.number}
            title={row.title}
            body={row.body}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
