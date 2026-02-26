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
    image: "/images/volkov_portrait.webp",
  },
  {
    name: "Lan Qingyu",
    role: "The Mist Serpent",
    href: "/characters/lan-qingyu",
    accent: "jade" as const,
    image: "/images/qinyu_portrait.webp",
  },
]

export function Dossier() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative min-h-screen py-24 lg:py-section" aria-label="Archive selection">
      {/* Background character image */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden">
        {characters.map((char, i) => (
          <div
            key={char.name}
            className="absolute right-0 top-1/2 -translate-y-1/2 transition-opacity duration-700 ease-out"
            style={{
              opacity: hoveredIndex === i ? 0.12 : 0,
              width: "50vw",
              height: "80vh",
            }}
          >
            <Image
              src={char.image}
              alt=""
              fill
              className="object-cover object-top"
              sizes="50vw"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-12">
        {/* Vertical index label */}
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 hidden lg:block">
          <span
            className="block font-mono text-caption uppercase tracking-widest-custom text-graphite"
            style={{
              writingMode: "vertical-lr",
              transform: "rotate(180deg)",
            }}
          >
            Index 01
          </span>
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
                <h2
                  className={`font-serif text-hero transition-colors duration-500 ${
                    hoveredIndex !== null && hoveredIndex !== i
                      ? "opacity-30"
                      : "opacity-100"
                  } ${
                    hoveredIndex === i
                      ? char.accent === "crimson"
                        ? "text-crimson"
                        : "text-jade"
                      : "text-ink"
                  }`}
                >
                  {char.name}
                </h2>
                <p
                  className={`mt-3 font-mono text-caption uppercase tracking-widest-custom transition-all duration-500 ${
                    hoveredIndex === i
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  } ${
                    char.accent === "crimson" ? "text-crimson" : "text-jade"
                  }`}
                >
                  {char.role}
                </p>
              </div>
            </Link>
          ))}
          <div className="hairline" />
        </nav>
      </div>

      {/* Secondary navigation */}
      <div className="relative mx-auto mt-8 flex max-w-5xl items-center justify-center gap-8 px-6 lg:px-12">
        <Link
          href="/duo"
          className="group flex items-center gap-2 font-mono text-caption uppercase tracking-widest-custom text-graphite transition-colors hover:text-ink"
        >
          Duo Dynamic
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
            <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <span className="text-vapor">|</span>
        <Link
          href="/gallery"
          className="group flex items-center gap-2 font-mono text-caption uppercase tracking-widest-custom text-graphite transition-colors hover:text-ink"
        >
          Gallery
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
            <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* Bottom metadata */}
      <div className="absolute inset-x-0 bottom-8 flex items-center justify-between px-6 lg:px-12">
        <span className="font-mono text-caption uppercase tracking-widest-custom text-graphite">
          Fig. 02 — Archive Selection
        </span>
        <span className="font-mono text-caption uppercase tracking-widest-custom text-graphite">
          System Ready
        </span>
      </div>
    </section>
  )
}
