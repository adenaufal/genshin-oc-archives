"use client"

import { useState } from "react"
import { TopNav } from "./top-nav"
import { QuickRefCard } from "./quick-ref-card"
import { PersonalitySliders } from "./personality-sliders"
import { StatsBars } from "./stats-bars"
import { PartNavCard } from "./part-nav-card"
import { CombatData } from "./combat-data"
import Link from "next/link"

const qingyuRef = {
  chosenName: "Lan Qingyu",
  name: "Lan Qingyu",
  pronouns: "She/Her",
  age: 44,
  height: "167cm",
  origin: "Liyue Harbor",
  vision: "Dendro",
  weapon: "Sword",
  constellation: "Serpens Nebula",
  summary: "Liyue's most elegant intelligence broker, who built an empire of secrets to bury a childhood of hunger.",
  quote: '"Everyone has a price. The truly interesting question is what currency they accept."',
  portrait: "/images/qinyu_portrait.webp",
  palette: [
    { hex: "#DFB129", name: "Aged Honey" },
    { hex: "#1A3C34", name: "Antique Jade" },
    { hex: "#FFF3E0", name: "Warm Porcelain" },
    { hex: "#4A6B53", name: "Brocade Green" },
  ],
}

const qingyuSliders = [
  { trait: "Presentation", value: 95, leftPole: "Blunt", rightPole: "Polished" },
  { trait: "Trust", value: 8, leftPole: "Positive", rightPole: "Suspicious" },
  { trait: "Calculation", value: 86, leftPole: "Impulsive", rightPole: "Strategic" },
  { trait: "Emotional Output", value: 70, leftPole: "Genuine", rightPole: "Performed" },
]

const qingyuStats = [
  { name: "Subterfuge", value: 95 },
  { name: "Social Subversion", value: 90 },
  { name: "Information Hoarding", value: 85 },
  { name: "Vulnerability", value: 10 },
]

export function QingyuHub() {
  const [combatOpen, setCombatOpen] = useState(false)

  return (
    <>
      <TopNav label="Lan Qingyu" refCode="LIY-004" accentColor="jade" />

      <main className="relative pb-24 pt-32">
        {/* Scroll binding motif */}
        <div
          className="pointer-events-none absolute bottom-0 left-4 top-0 hidden w-px lg:block"
          style={{ backgroundColor: "rgba(42, 75, 66, 0.08)" }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          {/* Quick Reference Card */}
          <section aria-label="Quick Reference">
            <QuickRefCard data={qingyuRef} accent="jade" />
          </section>

          {/* Divider */}
          <div className="my-16 h-px bg-vapor dark:bg-vapor/30" />

          {/* VSONA Profile */}
          <section aria-label="VSONA Profile">
            <div className="flex items-center gap-4">
              <p className="font-mono text-caption uppercase tracking-widest-custom text-jade">
                VSONA Profile
              </p>
              <div className="h-px flex-1 bg-vapor dark:bg-vapor/30" />
            </div>

            <p className="mt-6 font-serif text-body-lg italic leading-relaxed text-graphite">
              {"The Mist Serpent. Graceful, elusive, and meticulously curated. A woman whose attire and accessories function as communicative misdirections."}
            </p>

            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest-custom text-graphite">
                  Personality Sliders
                </h3>
                <div className="mt-4">
                  <PersonalitySliders sliders={qingyuSliders} accent="jade" />
                </div>
              </div>

              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest-custom text-graphite">
                  Operative Statistics
                </h3>
                <div className="mt-4">
                  <StatsBars stats={qingyuStats} accent="jade" />
                </div>

                <button
                  onClick={() => setCombatOpen(true)}
                  className="mt-8 flex items-center gap-2 font-mono text-caption uppercase tracking-widest-custom text-jade transition-colors hover:text-ink dark:hover:text-ink-secondary"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1" />
                    <path d="M7 4v3h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                  Full Combat Data
                </button>
              </div>
            </div>
          </section>

          <div className="my-16 h-px bg-vapor dark:bg-vapor/30" />

          {/* Deep Dive Parts */}
          <section aria-label="Character Bible">
            <div className="flex items-center gap-4">
              <p className="font-mono text-caption uppercase tracking-widest-custom text-jade">
                Character Bible
              </p>
              <div className="h-px flex-1 bg-vapor dark:bg-vapor/30" />
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <PartNavCard
                number="01"
                title="Identity & Psychology"
                description="Name analysis, five persona layers, MBTI/Enneagram, the architecture of fabricated identity, and her Dendro Vision."
                href="/characters/lan-qingyu/identity"
                accent="jade"
                wordCount="11,800"
                readingTime="~40 min"
              />
              <PartNavCard
                number="02"
                title="History & Relationships"
                description="From dock worker's daughter to intelligence broker, key alliances, the trust asymmetry, and the cost of thirty years of deception."
                href="/characters/lan-qingyu/history"
                accent="jade"
                wordCount="11,500"
                readingTime="~38 min"
              />
              <PartNavCard
                number="03"
                title="Behavior & Narrative"
                description="Behavioral encyclopedia, writing guide, the five masks, social navigation patterns, and vulnerability triggers."
                href="/characters/lan-qingyu/behavior"
                accent="jade"
                wordCount="9,000"
                readingTime="~30 min"
              />
            </div>
          </section>

          <div className="my-16 h-px bg-vapor dark:bg-vapor/30" />

          {/* Cross-links */}
          <section aria-label="Related" className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/characters/dmitri-volkov"
              className="group flex items-center gap-3 font-serif text-title text-graphite transition-colors hover:text-crimson"
            >
              <span>{"Dmitri Volkov"}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/duo"
              className="group flex items-center gap-3 font-mono text-caption uppercase tracking-widest-custom text-graphite transition-colors hover:text-ink dark:hover:text-ink-secondary"
            >
              <span>Duo Dynamic</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </section>
        </div>
      </main>

      <CombatData isOpen={combatOpen} onClose={() => setCombatOpen(false)} character="qingyu" />
    </>
  )
}
