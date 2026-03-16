"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  AnimatedNumber — counts up when visible via IntersectionObserver   */
/* ------------------------------------------------------------------ */
function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1200;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Fade-up variant factory                                            */
/* ------------------------------------------------------------------ */
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

/* ------------------------------------------------------------------ */
/*  Stats data                                                         */
/* ------------------------------------------------------------------ */
const stats: { value: number; suffix: string; label: string }[] = [
  { value: 50, suffix: "", label: "States" },
  { value: 3000, suffix: "+", label: "Jurisdictions" },
  { value: 25, suffix: "+", label: "Years Expertise" },
  { value: 5, suffix: " Min", label: "Time to Design" },
];

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Caustic background */}
      <div className="caustic absolute inset-0">
        <div className="caustic-extra-1" />
        <div className="caustic-extra-2" />
        <div className="caustic-extra-3" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0)}
          className="font-mono text-[#D4AF72] text-[11px] uppercase tracking-[0.25em] mb-8"
        >
          Commercial Aquatic Intelligence
        </motion.p>

        {/* Headline */}
        <h1 className="font-display italic text-[clamp(3rem,8vw,7rem)] text-white leading-[1.1] mb-8">
          <motion.span {...fadeUp(0.15)} className="block">
            Months of engineering.
          </motion.span>
          <motion.span {...fadeUp(0.3)} className="block">
            Minutes of input.
          </motion.span>
        </h1>

        {/* Body */}
        <motion.p
          {...fadeUp(0.5)}
          className="font-body text-xl text-[#8FA3B8] max-w-[600px] mx-auto mb-16 leading-relaxed"
        >
          Aquatic encodes 25&nbsp;years of commercial pool design expertise into a
          calculation engine that delivers hydraulic analysis, equipment selection,
          code compliance, and jurisdiction intelligence&nbsp;&mdash;&nbsp;instantly.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div {...fadeUp(0.5)} className="flex justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#0EA5E9] animate-bounce"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </div>

      {/* Stat strip */}
      <motion.div
        {...fadeUp(0.7)}
        className="absolute bottom-0 left-0 right-0 border-t border-[rgba(14,165,233,0.12)] bg-[#06080B]/80 backdrop-blur"
      >
        <div className="max-w-5xl mx-auto py-6 px-6 grid grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="font-mono text-[#0EA5E9] font-medium text-lg lg:text-xl">
                {stat.label === "Time to Design" && "<"}
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="font-body text-[11px] text-[#4A5C6E] uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
