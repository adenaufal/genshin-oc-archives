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

      <main className="pb-24 pt-32">
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
              <span className="font-display text-[10px] font-medium uppercase tracking-[0.25em] text-jade">
                Nature & Disposition
              </span>
              <div className="h-px flex-1 bg-vapor" />
            </div>

            <p className="mt-6 font-serif text-body-lg italic leading-relaxed text-graphite">
              {"The Mist Serpent. Graceful, elusive, and meticulously curated. A woman whose attire and accessories function as communicative misdirections."}
            </p>

            <p className="mt-6 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'The name "Lan Qingyu" is an exquisite fabrication, a title chosen by a dock worker\'s hungry daughter to rewrite her own destiny. Where others inherited wealth and respect, she had to engineer them entirely from scratch. Trading the cold reality of absolute poverty for the silken armor of high society, she transformed herself into the harbor\'s most indispensable intelligence broker — a woman whose smile is a weapon and whose information network rivals the Qixing\'s own.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Yet creating an empire of leverage is an isolating endeavor. Surrounded by people who owe her, fear her, or find her useful, Qingyu remains fundamentally untouched and unseen. As the weight of thirty years of deception begins to strain her flawless architecture, the terrifying truth emerges: the girl who survived by becoming everyone else\'s necessity is finally longing to be someone\'s choice.'}
            </p>

            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="font-display text-[10px] font-medium uppercase tracking-[0.2em] text-graphite">
                  Temperament
                </h3>
                <div className="mt-4">
                  <PersonalitySliders sliders={qingyuSliders} accent="jade" />
                </div>
              </div>

              <div>
                <h3 className="font-display text-[10px] font-medium uppercase tracking-[0.2em] text-graphite">
                  Aptitudes
                </h3>
                <div className="mt-4">
                  <StatsBars stats={qingyuStats} accent="jade" />
                </div>

                <button
                  onClick={() => setCombatOpen(true)}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-md border-2 border-jade/30 bg-jade/5 px-5 py-3 font-serif text-sm font-medium text-jade transition-all hover:bg-jade hover:text-canvas"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 2a6 6 0 100 12A6 6 0 008 2zm0 9V7M8 5.5V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  View Combat Details
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
              <span className="font-display text-[10px] font-medium uppercase tracking-[0.25em] text-jade">
                The Complete Record
              </span>
              <div className="h-px flex-1 bg-vapor" />
            </div>
            
            <p className="mt-4 font-sans text-sm text-graphite">
              Choose a chapter to begin reading. Each section explores a different facet of the character.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <PartNavCard
                number="I"
                title="Identity & Psychology"
                description="Name analysis, five persona layers, MBTI/Enneagram, the architecture of fabricated identity, and her Dendro Vision."
                href="/characters/lan-qingyu/identity"
                accent="jade"
                readingTime="~40 min"
              />
              <PartNavCard
                number="II"
                title="History & Relationships"
                description="From dock worker's daughter to intelligence broker, key alliances, the trust asymmetry, and the cost of thirty years of deception."
                href="/characters/lan-qingyu/history"
                accent="jade"
                readingTime="~38 min"
              />
              <PartNavCard
                number="III"
                title="Behavior & Narrative"
                description="Behavioral encyclopedia, writing guide, the five masks, social navigation patterns, and vulnerability triggers."
                href="/characters/lan-qingyu/behavior"
                accent="jade"
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

          {/* Cross-links - Improved navigation */}
          <section aria-label="Related Characters" className="rounded-lg border border-vapor bg-canvas-secondary/30 p-6">
            <p className="font-display text-[10px] font-medium uppercase tracking-[0.2em] text-graphite mb-4">
              Explore Others
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/characters/dmitri-volkov"
                className="group flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-vapor/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-crimson/10">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-crimson">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-[10px] font-medium uppercase tracking-[0.1em] text-graphite">Previous Character</p>
                  <p className="font-serif text-lg font-medium text-ink group-hover:text-crimson">Dmitri Volkov</p>
                </div>
              </Link>
              
              <Link
                href="/duo"
                className="group flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-vapor/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gold">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-[10px] font-medium uppercase tracking-[0.1em] text-graphite">Special</p>
                  <p className="font-serif text-lg font-medium text-ink group-hover:text-gold">The Duo</p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <CombatData isOpen={combatOpen} onClose={() => setCombatOpen(false)} character="qingyu" />
    </>
  )
}
