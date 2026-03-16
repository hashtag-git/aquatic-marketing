"use client";

import { motion } from "framer-motion";

export default function Closing() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-bg">
      <div>
        <motion.h2
          className="font-display italic text-6xl md:text-7xl lg:text-[120px] text-text-primary leading-none"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Aquatic.
        </motion.h2>

        <motion.p
          className="font-body text-xl md:text-2xl text-text-secondary mt-8 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Commercial aquatic intelligence.
          <br />
          Built from the ground up.
        </motion.p>

        <motion.p
          className="font-mono text-sm text-text-muted mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          A Magic Water LLC product.
        </motion.p>
      </div>
    </section>
  );
}
