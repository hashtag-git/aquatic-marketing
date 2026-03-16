"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Capability card data                                               */
/* ------------------------------------------------------------------ */
const cards = [
  {
    stat: "766 GPM",
    title: "Hydraulic Flow Analysis",
    body: "Trunk-line TDH methodology. Hazen-Williams C=130 throughout. Pipe diameter is an output of flow requirements — never an assumption. The longest run drives the calculation.",
  },
  {
    stat: "55–75 ft TDH",
    title: "Pump & Equipment Selection",
    body: "Jandy JCP/JCPW and ePump VS series. Three-phase and single-phase matrices treated as strictly separate systems. Selection is code-derived, not catalog-browsed.",
  },
  {
    stat: "⌈P/40⌉ or ⌈A/400⌉",
    title: "Skimmer & Return Calculation",
    body: "The greater-of-two-formula applied per code. Loudoun County Chapter 838 per-skimmer GPM range enforced. Returns calculated at ⌈P/20⌉. Fractions always round up — per code.",
  },
  {
    stat: "200+",
    title: "Jurisdiction Compliance",
    body: "VA, MD, DC, WV, DE, PA. Each jurisdiction's skimmer suction ratios, turnover requirements, chemical feeder standards, and ADA mandates stored and applied automatically.",
  },
  {
    stat: "GPD · Vol · Load",
    title: "Chemical Feed Sizing",
    body: "Chlorinator and acid feed system sizing based on pool volume, bather load, and jurisdiction chemical feeder standards. Automated. No manual lookup.",
  },
  {
    stat: "2010 ADA",
    title: "ADA Requirements",
    body: "Pool lift placement, accessible deck clearances, compliant entry and egress geometry. Every ADA 2010 Standards requirement applied to the specific pool configuration.",
  },
  {
    stat: "SP-1",
    title: "Equipment Scheduling",
    body: "Skimmer count, main drain configuration, floor returns, pool lights, depth markers, ladders, lifeguard chairs, rope anchors, backstroke stanchions — all derived and scheduled.",
  },
  {
    stat: "766 → 536 GPM",
    title: "Multi-Project Validation",
    body: "Validated against real commercial projects — PG Pool (8,750 SF / 766 GPM), Kent Gardens (5,016 SF / 536 GPM), Heathcote Village, Westridge, Adelphi. The calculations match the permitted drawings.",
  },
];

/* ------------------------------------------------------------------ */
/*  Chevron SVGs                                                       */
/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
/*  Capabilities                                                       */
/* ------------------------------------------------------------------ */
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
        {/* Section label */}
        <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-body mb-6">
          CAPABILITIES
        </p>

        {/* Headline */}
        <h2 className="font-display italic text-4xl lg:text-5xl text-text-primary mb-16">
          What the engine calculates.
        </h2>
      </div>

      {/* Horizontal scroll container */}
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

        {/* Navigation arrows */}
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
