"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const characters = [
  {
    name: "Dmitri Volkov",
    role: "The Iron Forest",
    href: "/characters/dmitri-volkov",
    accent: "crimson" as const,
    image: "/images/volkov_portrait_transparent.webp",
  },
  {
    name: "Lan Qingyu",
    role: "The Mist Serpent",
    href: "/characters/lan-qingyu",
    accent: "jade" as const,
    image: "/images/qinyu_portrait_transparent.webp",
  },
]

export function Dossier() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative min-h-screen py-24 lg:py-section" aria-label="Character selection">
      {/* Background character image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {characters.map((char, i) => (
          <div
            key={char.name}
            className="absolute transition-all duration-700 ease-out"
            style={{
              opacity: hoveredIndex === i ? 0.2 : 0,
              transform: hoveredIndex === i ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0.95)',
              top: '50%',
              right: 'clamp(0%, 5vw, 10%)',
              width: 'clamp(250px, 40vw, 600px)',
              height: 'clamp(350px, 70vh, 800px)',
            }}
          >
            <Image
              src={char.image}
              alt=""
              fill
              className="object-contain object-center"
              sizes="(max-width: 640px) 60vw, (max-width: 1024px) 50vw, 600px"
              priority={i === 0}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-6">
          <span className="font-display text-[11px] font-medium uppercase tracking-[0.25em] text-graphite">
            Volume I
          </span>
          <div className="h-px flex-1 bg-vapor" />
        </div>

        {/* Character list */}
        <nav className="flex flex-col" aria-label="Character index">
          {characters.map((char, i) => (
            <Link
              key={char.name}
              href={char.href}
              className="group block"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="hairline" />
              <div className="py-12 lg:py-16">
                <div className="flex items-baseline gap-6">
                  <span 
                    className={`font-display text-sm font-medium transition-all duration-500 ${
                      hoveredIndex === i 
                        ? char.accent === "crimson" ? "text-crimson" : "text-jade"
                        : "text-graphite-secondary"
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2
                    className={`font-serif text-hero font-medium transition-all duration-500 ${
                      hoveredIndex !== null && hoveredIndex !== i
                        ? "opacity-30"
                        : "opacity-100"
                    } ${
                      hoveredIndex === i
                        ? char.accent === "crimson"
                          ? "text-crimson"
                          : "text-jade"
                        : "text-ink dark:text-ink"
                    }`}
                  >
                    {char.name}
                  </h2>
                </div>
                <p
                  className={`mt-3 ml-12 font-serif text-lg font-medium italic transition-all duration-500 ${
                    hoveredIndex === i
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  } ${
                    char.accent === "crimson" ? "text-crimson" : "text-jade"
                  }`}
                >
                  {char.role}
                </p>
                
                {/* Visual indicator this is clickable */}
                <div 
                  className={`mt-4 ml-12 flex items-center gap-2 transition-all duration-500 ${
                    hoveredIndex === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className={`font-display text-[10px] font-medium uppercase tracking-[0.15em] ${
                    char.accent === "crimson" ? "text-crimson" : "text-jade"
                  }`}>
                    View Profile
                  </span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={
                    char.accent === "crimson" ? "text-crimson" : "text-jade"
                  }>
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
          <div className="hairline" />
        </nav>

        {/* Secondary navigation */}
        <div className="mt-16 flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-vapor" />
            <span className="font-display text-[11px] font-medium uppercase tracking-[0.2em] text-graphite">
              Also Explore
            </span>
            <div className="h-px w-8 bg-vapor" />
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/duo"
              className="group flex items-center gap-2 rounded-md border border-vapor px-5 py-3 font-serif text-base font-medium text-ink transition-all hover:border-ink hover:bg-ink hover:text-canvas"
            >
              <span>The Duo</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/gallery"
              className="group flex items-center gap-2 rounded-md border border-vapor px-5 py-3 font-serif text-base font-medium text-ink transition-all hover:border-ink hover:bg-ink hover:text-canvas"
            >
              <span>Gallery</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom ornament */}
      <div className="absolute inset-x-0 bottom-12 flex items-center justify-center gap-4">
        <div className="h-px w-16 bg-vapor" />
        <div className="w-2 h-2 rotate-45 border border-vapor" />
        <div className="h-px w-16 bg-vapor" />
      </div>
    </section>
  )
}
