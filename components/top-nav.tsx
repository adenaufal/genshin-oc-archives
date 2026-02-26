"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"

interface TopNavProps {
  label?: string
  accentColor?: "crimson" | "jade"
}

const navSections = [
  {
    heading: "Personages",
    links: [
      { label: "Dmitri Volkov", href: "/characters/dmitri-volkov", accent: "crimson" as const },
      { label: "Lan Qingyu", href: "/characters/lan-qingyu", accent: "jade" as const },
    ],
  },
  {
    heading: "Collections",
    links: [
      { label: "The Duo", href: "/duo" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    heading: "Chronicles",
    links: [
      { label: "Volkov's Tale", href: "/characters/dmitri-volkov/identity" },
      { label: "Qingyu's Tale", href: "/characters/lan-qingyu/identity" },
    ],
  },
]

export function TopNav({ label, accentColor }: TopNavProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 transition-all duration-300 lg:px-12 ${
          scrolled ? "bg-canvas/95 backdrop-blur-sm dark:bg-canvas/95" : ""
        }`}
      >
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 font-serif text-sm italic text-graphite transition-colors hover:text-ink"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M8 2L4 7l4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Return
          </Link>
          {label && (
            <>
              <span className="text-vapor">·</span>
              <span className="font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
                {label}
              </span>
            </>
          )}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.2em] text-graphite transition-colors hover:text-ink"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? "Close" : "Contents"}
          </button>
        </div>
      </header>

      {/* Full-screen classical menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 overflow-y-auto bg-canvas dark:bg-canvas"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
            {/* Decorative frame */}
            <div className="absolute inset-8 pointer-events-none">
              <div className="corner-flourish corner-flourish-tl" />
              <div className="corner-flourish corner-flourish-tr" />
              <div className="corner-flourish corner-flourish-bl" />
              <div className="corner-flourish corner-flourish-br" />
            </div>

            {/* Masthead */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-serif text-display italic text-ink transition-colors hover:text-graphite"
            >
              The Archives
            </Link>
            
            <div className="flex items-center gap-3 mt-3">
              <div className="h-px w-8 bg-vapor" />
              <div className="w-1 h-1 rotate-45 bg-gold" />
              <div className="h-px w-8 bg-vapor" />
            </div>

            {/* Navigation sections */}
            <div className="mt-16 grid w-full max-w-2xl gap-12 sm:grid-cols-3">
              {navSections.map((section) => (
                <div key={section.heading} className="text-center">
                  <p className="font-display text-[10px] uppercase tracking-[0.25em] text-graphite mb-4">
                    {section.heading}
                  </p>
                  <nav className="flex flex-col gap-3">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`font-serif text-xl transition-colors ${
                          "accent" in link
                            ? link.accent === "crimson"
                              ? "text-ink hover:text-crimson"
                              : "text-ink hover:text-jade"
                            : "text-ink hover:text-graphite"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}
            </div>

            {/* Bottom ornament */}
            <div className="mt-16 flex items-center gap-3">
              <div className="h-px w-12 bg-vapor" />
              <div className="w-1.5 h-1.5 rotate-45 border border-vapor" />
              <div className="h-px w-12 bg-vapor" />
            </div>

            {/* Theme toggle */}
            <div className="mt-10 flex items-center gap-3">
              <ThemeToggle />
              <span className="font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
                Light
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
