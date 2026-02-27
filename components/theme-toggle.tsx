"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="rounded-full p-2 text-graphite transition-colors"
        aria-label="Toggle theme"
      >
        <div className="h-[18px] w-[18px]" />
      </button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative rounded-full p-2 text-graphite transition-colors hover:text-ink hover:bg-vapor/50 dark:text-graphite-dark dark:hover:text-canvas dark:hover:bg-ink/50"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative h-[18px] w-[18px] overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.svg
              key="sun"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="absolute inset-0"
              initial={{ rotate: -45, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 45, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <circle cx="12" cy="12" r="4" />
              <motion.g
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="M4.93 4.93l1.41 1.41" />
                <path d="M17.66 17.66l1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="M6.34 17.66l-1.41 1.41" />
                <path d="M19.07 4.93l-1.41 1.41" />
              </motion.g>
            </motion.svg>
          ) : (
            <motion.svg
              key="moon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="absolute inset-0"
              initial={{ rotate: 45, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -45, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              <motion.circle
                cx="19.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </div>
    </button>
  )
}
