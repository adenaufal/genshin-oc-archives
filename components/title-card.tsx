"use client"

import { motion, useReducedMotion } from "motion/react"

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export function TitleCard() {
  const reduce = useReducedMotion()
  const dur = reduce ? 0 : 1

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-6"
      aria-label="Title card"
    >
      {/* Decorative corner flourishes */}
      <div className="absolute inset-8 pointer-events-none">
        <div className="corner-flourish corner-flourish-tl" />
        <div className="corner-flourish corner-flourish-tr" />
        <div className="corner-flourish corner-flourish-bl" />
        <div className="corner-flourish corner-flourish-br" />
      </div>

      <motion.div
        className="flex flex-col items-center gap-8 text-center"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: reduce ? 0 : 0.2 }}
      >
        <motion.p
          variants={fadeUp}
          transition={{ duration: dur, ease: "easeOut" }}
          className="font-display text-[12px] font-medium uppercase tracking-[0.3em] text-graphite"
        >
          From the Library of
        </motion.p>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: dur, ease: "easeOut" }}
          className="font-serif text-hero font-medium italic text-ink dark:text-ink"
        >
          The Archives
        </motion.h1>

        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ duration: dur }}
          className="flex items-center gap-4"
        >
          <div className="h-px w-12 bg-vapor" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
          <div className="h-px w-12 bg-vapor" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          transition={{ duration: dur, ease: "easeOut" }}
          className="font-serif text-xl font-medium italic text-crimson"
        >
          Volkov <span className="text-graphite mx-2">&amp;</span> Qingyu
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-16 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduce ? 0 : 1.2, duration: dur }}
      >
        <span className="font-display text-[11px] font-medium uppercase tracking-[0.2em] text-graphite">
          Enter
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-gold animate-pulse-gentle"
          aria-hidden="true"
        >
          <path
            d="M10 4v10M6 11l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  )
}
