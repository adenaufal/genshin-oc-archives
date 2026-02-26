"use client"

import { useEffect, useState } from "react"

export function TitleCard() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

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

      <div className="flex flex-col items-center gap-8 text-center">
        {/* Subtitle - Classical serif */}
        <p
          className={`font-display text-[11px] uppercase tracking-[0.3em] text-graphite transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          From the Library of
        </p>

        {/* Main title */}
        <h1
          className={`font-serif text-hero italic text-ink dark:text-ink transition-all duration-1000 delay-200 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          The Archives
        </h1>

        {/* Ornamental divider */}
        <div
          className={`flex items-center gap-4 transition-all duration-1000 delay-500 ease-out ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-px w-12 bg-vapor" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
          <div className="h-px w-12 bg-vapor" />
        </div>

        {/* Character names */}
        <p
          className={`font-serif text-lg italic text-crimson transition-all duration-1000 delay-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Volkov <span className="text-graphite mx-2">&</span> Qingyu
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-16 flex flex-col items-center gap-3 transition-all duration-1000 delay-1000 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
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
      </div>
    </section>
  )
}
