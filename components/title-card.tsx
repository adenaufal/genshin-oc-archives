"use client"

import { useEffect, useState } from "react"

export function TitleCard() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center"
      aria-label="Title card"
    >
      <div className="flex flex-col items-center gap-6">
        <h1
          className={`font-serif text-hero italic text-ink dark:text-ink transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          The Archives
        </h1>

        <div
          className={`flex flex-col items-center gap-4 transition-all duration-1000 delay-300 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-mono text-caption uppercase tracking-widest-custom text-crimson">
            Volkov & Qingyu
          </p>
          <div className="h-px w-12 bg-vapor dark:bg-vapor/30" />
        </div>
      </div>

      <div
        className={`absolute bottom-12 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-mono text-caption uppercase tracking-widest-custom text-graphite">
          Scroll to begin
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-crimson"
          aria-hidden="true"
        >
          <path
            d="M8 3v10M4 9l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="mt-1 h-1 w-1 rounded-full bg-crimson animate-blink" />
      </div>
    </section>
  )
}
