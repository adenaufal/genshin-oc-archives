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
      <TopNav label="Qingyu" accentColor="jade" />

      <main className="relative pb-24 pt-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          {/* Quick Reference Card */}
          <section aria-label="Quick Reference">
            <QuickRefCard data={qingyuRef} accent="jade" />
          </section>

          {/* Divider */}
          <div className="my-16 flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-vapor" />
            <div className="w-2 h-2 rotate-45 border border-vapor" />
            <div className="h-px w-24 bg-vapor" />
          </div>

          {/* VSONA Profile */}
          <section aria-label="VSONA Profile">
            <div className="flex items-center gap-4">
              <span className="font-display text-[10px] uppercase tracking-[0.25em] text-jade">
                Nature & Disposition
              </span>
              <div className="h-px flex-1 bg-vapor" />
            </div>

            <p className="mt-6 font-serif text-body-lg italic leading-relaxed text-graphite">
              {"The Mist Serpent. Graceful, elusive, and meticulously curated. A woman whose attire and accessories function as communicative misdirections."}
            </p>

            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
                  Temperament
                </h3>
                <div className="mt-4">
                  <PersonalitySliders sliders={qingyuSliders} accent="jade" />
                </div>
              </div>

              <div>
                <h3 className="font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
                  Aptitudes
                </h3>
                <div className="mt-4">
                  <StatsBars stats={qingyuStats} accent="jade" />
                </div>

                <button
                  onClick={() => setCombatOpen(true)}
                  className="mt-8 flex items-center gap-2 font-serif text-sm italic text-jade transition-colors hover:text-ink"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1" />
                    <path d="M7 4v3h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                  View Combat Capabilities
                </button>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="my-16 flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-vapor" />
            <div className="w-2 h-2 rotate-45 border border-vapor" />
            <div className="h-px w-24 bg-vapor" />
          </div>

          {/* Deep Dive Parts */}
          <section aria-label="Character Bible">
            <div className="flex items-center gap-4">
              <span className="font-display text-[10px] uppercase tracking-[0.25em] text-jade">
                The Complete Record
              </span>
              <div className="h-px flex-1 bg-vapor" />
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <PartNavCard
                number="I"
                title="Identity & Psychology"
                description="Name analysis, five persona layers, MBTI/Enneagram, the architecture of fabricated identity, and her Dendro Vision."
                href="/characters/lan-qingyu/identity"
                accent="jade"
                wordCount="11,800"
                readingTime="~40 min"
              />
              <PartNavCard
                number="II"
                title="History & Relationships"
                description="From dock worker's daughter to intelligence broker, key alliances, the trust asymmetry, and the cost of thirty years of deception."
                href="/characters/lan-qingyu/history"
                accent="jade"
                wordCount="11,500"
                readingTime="~38 min"
              />
              <PartNavCard
                number="III"
                title="Behavior & Narrative"
                description="Behavioral encyclopedia, writing guide, the five masks, social navigation patterns, and vulnerability triggers."
                href="/characters/lan-qingyu/behavior"
                accent="jade"
                wordCount="9,000"
                readingTime="~30 min"
              />
            </div>
          </section>

          {/* Divider */}
          <div className="my-16 flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-vapor" />
            <div className="w-2 h-2 rotate-45 border border-vapor" />
            <div className="h-px w-24 bg-vapor" />
          </div>

          {/* Cross-links */}
          <section aria-label="Related" className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/characters/dmitri-volkov"
              className="group flex items-center gap-3 font-serif text-title text-graphite transition-colors hover:text-crimson"
            >
              <span>Dmitri Volkov</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/duo"
              className="group flex items-center gap-3 font-serif text-base italic text-graphite transition-colors hover:text-ink"
            >
              <span>The Duo</span>
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
