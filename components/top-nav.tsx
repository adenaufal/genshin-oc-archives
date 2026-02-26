"use client"

import Link from "next/link"
import { useState } from "react"

interface TopNavProps {
  label?: string
  refCode?: string
  accentColor?: "crimson" | "jade"
}

export function TopNav({ label, refCode, accentColor }: TopNavProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 lg:px-12">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-caption uppercase tracking-widest-custom text-graphite transition-colors hover:text-ink"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M8 1L3 6l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Index
          </Link>
          {label && (
            <>
              <span className="text-vapor">|</span>
              <span className="font-mono text-caption uppercase tracking-widest-custom text-graphite">
                {label}
              </span>
            </>
          )}
        </div>

        <div className="flex items-center gap-6">
          {refCode && (
            <span className={`hidden font-mono text-caption uppercase tracking-widest-custom sm:block ${
              accentColor === "crimson" ? "text-crimson" : accentColor === "jade" ? "text-jade" : "text-graphite"
            }`}>
              REF: {refCode}
            </span>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 font-mono text-caption uppercase tracking-widest-custom text-graphite transition-colors hover:text-ink"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            Menu
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
              <path d="M0 1h16M0 6h16M0 11h16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </header>

      {/* Menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-canvas/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute right-6 top-5 font-serif text-3xl text-graphite transition-colors hover:text-ink lg:right-12"
            aria-label="Close menu"
          >
            {"×"}
          </button>
          <nav className="flex flex-col items-center gap-8">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-serif text-display text-ink transition-colors hover:text-crimson"
            >
              The Archives
            </Link>
            <div className="h-px w-16 bg-vapor" />
            <Link
              href="/characters/dmitri-volkov"
              onClick={() => setMenuOpen(false)}
              className="font-serif text-title text-graphite transition-colors hover:text-crimson"
            >
              Dmitri Volkov
            </Link>
            <Link
              href="/characters/lan-qingyu"
              onClick={() => setMenuOpen(false)}
              className="font-serif text-title text-graphite transition-colors hover:text-jade"
            >
              Lan Qingyu
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
