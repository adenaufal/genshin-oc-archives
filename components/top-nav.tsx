"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"

interface TopNavProps {
  label?: string
  refCode?: string
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
    heading: "Archive",
    links: [
      { label: "Duo Dynamic", href: "/duo" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    heading: "Deep Reads",
    links: [
      { label: "Volkov: Identity", href: "/characters/dmitri-volkov/identity" },
      { label: "Qingyu: Identity", href: "/characters/lan-qingyu/identity" },
    ],
  },
]

export function TopNav({ label, refCode, accentColor }: TopNavProps) {
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
          scrolled ? "bg-canvas/90 backdrop-blur-md dark:bg-canvas/95" : ""
        }`}
      >
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-caption uppercase tracking-widest-custom text-graphite transition-colors hover:text-ink dark:hover:text-ink-secondary"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M8 1L3 6l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Index
          </Link>
          {label && (
            <>
              <span className="text-vapor dark:text-vapor/50">|</span>
              <span className="font-mono text-caption uppercase tracking-widest-custom text-graphite">
                {label}
              </span>
            </>
          )}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          {refCode && (
            <span className={`hidden font-mono text-caption uppercase tracking-widest-custom sm:block ${
              accentColor === "crimson" ? "text-crimson" : accentColor === "jade" ? "text-jade" : "text-graphite"
            }`}>
              REF: {refCode}
            </span>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 font-mono text-caption uppercase tracking-widest-custom text-graphite transition-colors hover:text-ink dark:hover:text-ink-secondary"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? "Close" : "Menu"}
            {menuOpen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 4l8 8M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                <path d="M0 1h16M0 6h16M0 11h16" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Full-screen editorial menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 overflow-y-auto bg-canvas dark:bg-canvas"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
            {/* Masthead */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-serif text-display italic text-ink transition-colors hover:text-graphite dark:text-ink dark:hover:text-graphite"
            >
              The Archives
            </Link>
            <p className="mt-2 font-mono text-caption uppercase tracking-widest-custom text-graphite">
              Volkov & Qingyu
            </p>

            <div className="mx-auto mt-12 h-px w-16 bg-vapor dark:bg-vapor/30" />

            {/* Navigation sections */}
            <div className="mt-12 grid w-full max-w-2xl gap-12 sm:grid-cols-3">
              {navSections.map((section) => (
                <div key={section.heading}>
                  <p className="font-mono text-[10px] uppercase tracking-widest-custom text-graphite">
                    {section.heading}
                  </p>
                  <nav className="mt-4 flex flex-col gap-3">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`font-serif text-xl transition-colors ${
                          "accent" in link
                            ? link.accent === "crimson"
                              ? "text-ink hover:text-crimson dark:text-ink dark:hover:text-crimson"
                              : "text-ink hover:text-jade dark:text-ink dark:hover:text-jade"
                            : "text-ink hover:text-graphite dark:text-ink dark:hover:text-graphite"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-16 h-px w-16 bg-vapor dark:bg-vapor/30" />

            {/* Theme toggle in menu */}
            <div className="mt-8 flex items-center gap-3">
              <ThemeToggle />
              <span className="font-mono text-[10px] uppercase tracking-widest-custom text-graphite">
                Toggle Theme
              </span>
            </div>

            {/* System status */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-jade" />
              <span className="font-mono text-[10px] uppercase tracking-widest-custom text-graphite">
                Archive System Online
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
