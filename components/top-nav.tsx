"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { ThemeToggle } from "./theme-toggle"
import { usePathname } from "next/navigation"

interface TopNavProps {
  label?: string
  accentColor?: "crimson" | "jade"
}

const navSections = [
  {
    heading: "Characters",
    links: [
      { label: "Dmitri Volkov", href: "/characters/dmitri-volkov", accent: "crimson" as const },
      { label: "Lan Qingyu", href: "/characters/lan-qingyu", accent: "jade" as const },
    ],
  },
  {
    heading: "Special",
    links: [
      { label: "The Duo", href: "/duo" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
]

export function TopNav({ label, accentColor }: TopNavProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduce = useReducedMotion()
  const pathname = usePathname()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 48)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const isHome = pathname === "/"

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 lg:px-12 ${
          scrolled || !isHome ? "bg-canvas/95 backdrop-blur-sm dark:bg-canvas/95 shadow-sm" : ""
        }`}
      >
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md px-2 py-1.5 font-serif text-sm font-medium text-ink transition-colors hover:bg-vapor/30"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 2L2 8l6 6M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="hidden sm:inline">Home</span>
          </Link>
          {label && (
            <>
              <span className="text-vapor">/</span>
              <span className="font-display text-[11px] font-medium uppercase tracking-[0.15em] text-graphite">
                {label}
              </span>
            </>
          )}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 rounded-md px-3 py-1.5 font-display text-[11px] font-medium uppercase tracking-[0.15em] text-ink transition-colors hover:bg-vapor/30"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M4 4l8 8M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu-overlay"
            className="fixed inset-0 z-40 overflow-y-auto bg-canvas dark:bg-canvas"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3 }}
          >
            <motion.div
              className="flex min-h-screen flex-col items-center justify-center px-6 py-24"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: reduce ? 0 : 0.06, delayChildren: reduce ? 0 : 0.1 }}
            >
              {/* Close button at top */}
              <div className="absolute top-4 right-4 lg:top-6 lg:right-12">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 rounded-md px-3 py-2 font-display text-[11px] font-medium uppercase tracking-[0.15em] text-graphite transition-colors hover:bg-vapor/30 hover:text-ink"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 4l8 8M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Close
                </button>
              </div>

              {/* Masthead */}
              <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-3xl font-medium italic text-ink transition-colors hover:text-graphite"
                >
                  The Archives
                </Link>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 mt-4"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                <div className="h-px w-12 bg-vapor" />
                <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
                <div className="h-px w-12 bg-vapor" />
              </motion.div>

              {/* Navigation sections */}
              <motion.div
                className="mt-12 grid w-full max-w-lg gap-10 sm:grid-cols-2"
                variants={{ hidden: {}, visible: {} }}
              >
                {navSections.map((section) => (
                  <motion.div
                    key={section.heading}
                    className="text-center sm:text-left"
                    variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: reduce ? 0 : 0.4 }}
                  >
                    <p className="font-display text-[10px] font-medium uppercase tracking-[0.2em] text-graphite mb-4">
                      {section.heading}
                    </p>
                    <nav className="flex flex-col gap-2">
                      {section.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className={`group flex items-center gap-2 font-serif text-lg font-medium transition-colors ${
                            "accent" in link
                              ? link.accent === "crimson"
                                ? "text-ink hover:text-crimson"
                                : "text-ink hover:text-jade"
                              : "text-ink hover:text-graphite"
                          }`}
                        >
                          <span className="w-0 overflow-hidden transition-all group-hover:w-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="inline">
                              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </motion.div>
                ))}
              </motion.div>

              {/* Quick links to stories */}
              <motion.div
                className="mt-10 pt-10 border-t border-vapor w-full max-w-lg"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                <p className="font-display text-[10px] font-medium uppercase tracking-[0.2em] text-graphite mb-4 text-center">
                  Start Reading
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/characters/dmitri-volkov/identity"
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-2 border border-vapor rounded-md font-serif text-sm font-medium text-ink hover:border-crimson hover:text-crimson transition-colors"
                  >
                    Volkov's Story
                  </Link>
                  <Link
                    href="/characters/lan-qingyu/identity"
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-2 border border-vapor rounded-md font-serif text-sm font-medium text-ink hover:border-jade hover:text-jade transition-colors"
                  >
                    Qingyu's Story
                  </Link>
                </div>
              </motion.div>

              {/* Footer */}
              <motion.div
                className="mt-12 flex items-center gap-3"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                <ThemeToggle />
                <span className="font-display text-[10px] font-medium uppercase tracking-[0.15em] text-graphite">
                  Toggle Theme
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
