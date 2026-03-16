"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    stat: "Complete",
    title: "Hydraulic Flow Analysis",
    body: "Full system hydraulic analysis from pool geometry to final pipe sizing. Every value derived from first principles — not rules of thumb.",
  },
  {
    stat: "Automated",
    title: "Pump & Equipment Selection",
    body: "Equipment matched to calculated system requirements. Three-phase and single-phase treated as strictly separate systems. Selection is code-derived.",
  },
  {
    stat: "Code-Derived",
    title: "Skimmer & Return Calculation",
    body: "Fixture counts calculated from pool geometry and jurisdiction-specific formulas. Every fraction rounded per code. Every override applied.",
  },
  {
    stat: "200+",
    title: "Jurisdiction Compliance",
    body: "Six states. Hundreds of local authorities. Each jurisdiction's unique code requirements stored, maintained, and applied automatically.",
  },
  {
    stat: "Integrated",
    title: "Chemical Feed Sizing",
    body: "Chlorinator and acid feed systems sized to pool volume, bather load, and jurisdiction chemical feeder standards. No manual lookup.",
  },
  {
    stat: "2010 ADA",
    title: "ADA Requirements",
    body: "Pool lift placement, accessible deck clearances, compliant entry and egress. Every ADA requirement applied to the specific pool configuration.",
  },
  {
    stat: "SP-1",
    title: "Equipment Scheduling",
    body: "Every fixture and accessory — derived, counted, and scheduled into a complete equipment package ready for permit submission.",
  },
  {
    stat: "Validated",
    title: "Real-World Accuracy",
    body: "Calculations validated against permitted commercial projects across multiple jurisdictions. The outputs match the approved drawings.",
  },
];

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

export default function Capabilities() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -400 : 400;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="py-32 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-body mb-6">
          CAPABILITIES
        </p>
        <h2 className="font-display italic text-4xl lg:text-5xl text-text-primary mb-16">
          What the engine calculates.
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-snap-x flex flex-nowrap gap-0 -mx-6 px-6 lg:-mx-8 lg:px-8"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="min-w-[340px] md:min-w-[380px] flex-shrink-0 bg-surface border border-border border-t-2 border-t-accent p-8 lg:p-10 snap-start"
            >
              <p className="font-mono text-3xl lg:text-4xl text-gold font-medium mb-4">
                {card.stat}
              </p>
              <h3 className="font-body text-lg font-semibold text-text-primary mb-3">
                {card.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex gap-2 mt-8">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="bg-raised border border-border w-10 h-10 flex items-center justify-center text-text-secondary hover:border-accent hover:text-accent transition-colors"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="bg-raised border border-border w-10 h-10 flex items-center justify-center text-text-secondary hover:border-accent hover:text-accent transition-colors"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
