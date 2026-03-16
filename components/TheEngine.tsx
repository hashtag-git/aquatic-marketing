"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const formulas = [
  "Skimmer Count   = \u2308Perimeter / 40\u2309  or  \u2308Area / 400\u2309  (greater of)",
  "Return Count    = \u2308Perimeter / 20\u2309",
  "Design Flow     = Pool Volume / Turnover Rate (hrs \u00D7 60)",
  "TDH Design      = 55 \u2013 75 ft  (filter cycle availability \u2265 46 ft)",
  "Pipe Velocity   = Flow (GPM) \u00D7 0.0002228 / Cross-section Area",
  "C (Hazen-Williams) = 130 (PVC throughout)",
];

function Typewriter({
  text,
  startDelay = 0,
  charDelay = 25,
  trigger,
}: {
  text: string;
  startDelay?: number;
  charDelay?: number;
  trigger: boolean;
}) {
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!trigger) return;

    const startTimeout = setTimeout(() => {
      setTyping(true);
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setTyping(false);
          setDone(true);
        }
      }, charDelay);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [trigger, text, startDelay, charDelay]);

  return (
    <span>
      {displayed}
      {typing && <span className="tw-cursor">|</span>}
      {done && (
        <span className="tw-cursor animate-pulse" style={{ animationDuration: "1s", animationFillMode: "forwards", opacity: 0, animation: "fadeOut 1s 0s forwards" }}>
          |
        </span>
      )}
    </span>
  );
}

export default function TheEngine() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const formulaRef = useRef<HTMLDivElement>(null);
  const formulaInView = useInView(formulaRef, { once: true, margin: "-50px" });

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
          ref={formulaRef}
          className="bg-raised border-l-2 border-l-accent p-8 lg:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="space-y-4">
            {formulas.map((formula, i) => (
              <div key={i} className="font-mono text-sm text-text-primary">
                <Typewriter
                  text={formula}
                  startDelay={i * 400}
                  charDelay={25}
                  trigger={formulaInView}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
