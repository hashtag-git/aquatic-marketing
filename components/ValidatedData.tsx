"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    name: "PG Pool",
    area: "8,750 SF",
    flow: "766 GPM",
    tdh: null,
    jurisdiction: "Prince George's Co., MD",
  },
  {
    name: "Kent Gardens",
    area: "5,016 SF",
    flow: "536 GPM",
    tdh: null,
    jurisdiction: "Fairfax Co., VA",
  },
  {
    name: "Heathcote Village",
    area: null,
    flow: null,
    tdh: null,
    jurisdiction: "Loudoun Co., VA",
  },
  {
    name: "Westridge",
    area: null,
    flow: null,
    tdh: null,
    jurisdiction: "Prince William Co., VA",
  },
  {
    name: "Adelphi",
    area: null,
    flow: null,
    tdh: null,
    jurisdiction: "Prince George's Co., MD",
  },
];

export default function ValidatedData() {
  const tableRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(tableRef, { once: true, margin: "-100px" });

  const quoteRef = useRef<HTMLDivElement>(null);
  const quoteInView = useInView(quoteRef, { once: true, margin: "-100px" });

  return (
    <section className="py-32 lg:py-48 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-body mb-6">
          Validated Against Real Projects
        </p>
        <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-text-primary mb-16">
          The math checks out.
        </h2>

        <div ref={tableRef} className="bg-surface border border-border overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {["Project", "Pool Area", "Design Flow", "TDH", "Jurisdiction"].map(
                  (header) => (
                    <th
                      key={header}
                      className="font-body text-[11px] uppercase tracking-[0.15em] text-gold py-4 px-6 text-left border-b border-border font-normal"
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {projects.map((project, i) => (
                <motion.tr
                  key={project.name}
                  className="border-b border-border/50"
                  initial={{ x: -40, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.06,
                    ease: "easeOut",
                  }}
                >
                  <td className="py-5 px-6 font-body text-sm text-text-primary font-medium">
                    {project.name}
                  </td>
                  <td className="py-5 px-6 font-mono text-sm text-text-primary">
                    {project.area ?? <span className="text-text-muted">&mdash;</span>}
                  </td>
                  <td className="py-5 px-6 font-mono text-sm text-text-primary">
                    {project.flow ?? <span className="text-text-muted">&mdash;</span>}
                  </td>
                  <td className="py-5 px-6 font-mono text-sm text-text-primary">
                    {project.tdh ?? <span className="text-text-muted">&mdash;</span>}
                  </td>
                  <td className="py-5 px-6 font-body text-sm text-text-secondary">
                    {project.jurisdiction}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
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
