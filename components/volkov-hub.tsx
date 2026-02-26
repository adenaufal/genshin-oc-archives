"use client"

import { useState } from "react"
import { TopNav } from "./top-nav"
import { QuickRefCard } from "./quick-ref-card"
import { PersonalitySliders } from "./personality-sliders"
import { StatsBars } from "./stats-bars"
import { PartNavCard } from "./part-nav-card"
import { CombatData } from "./combat-data"
import Link from "next/link"

const volkovRef = {
  name: "Dmitri Alexeyevich Volkov",
  pronouns: "He/Him",
  age: 32,
  height: "180cm",
  origin: "Snezhnaya (Exiled)",
  vision: "Dendro",
  weapon: "Claymore",
  constellation: "Silva Ferrum",
  summary: "A Snezhnayan war machine who deserted his post to become a walking shield for the innocent.",
  quote: '"You look at me and see a weapon. That is by design. If you saw what I actually am, you would not feel safe."',
  portrait: "/images/volkov_portrait.webp",
  palette: [
    { hex: "#EAEAEA", name: "Snezhnayan Platinum" },
    { hex: "#8B0000", name: "Warning Crimson" },
    { hex: "#D2B48C", name: "Weathered Wood" },
  ],
}

const volkovSliders = [
  { trait: "Demeanor", value: 85, leftPole: "Restless", rightPole: "Disciplined" },
  { trait: "Motivations", value: 78, leftPole: "Duty", rightPole: "Conviction" },
  { trait: "Trust", value: 15, leftPole: "Suspecting", rightPole: "Open" },
  { trait: "Expression", value: 12, leftPole: "Warm", rightPole: "Stoic" },
]

const volkovStats = [
  { name: "Endurance / Fortitude", value: 95 },
  { name: "Tactical Analysis", value: 88 },
  { name: "Stealth & Agility", value: 25 },
  { name: "Emotional Vocabulary", value: 5 },
]

export function VolkovHub() {
  const [combatOpen, setCombatOpen] = useState(false)

  return (
    <>
      <TopNav label="Volkov" accentColor="crimson" />

      <main className="pb-24 pt-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          {/* Quick Reference Card */}
          <section aria-label="Quick Reference">
            <QuickRefCard data={volkovRef} accent="crimson" />
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
              <span className="font-display text-[10px] font-medium uppercase tracking-[0.25em] text-crimson">
                Nature & Disposition
              </span>
              <div className="h-px flex-1 bg-vapor" />
            </div>

            <p className="mt-6 font-serif text-body-lg italic leading-relaxed text-graphite">
              {"The Iron Forest. A scarred, immovable defender built for utility over beauty, whose hypervigilance is matched only by his physical durability."}
            </p>

            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Personality Sliders */}
              <div>
                <h3 className="font-display text-[10px] font-medium uppercase tracking-[0.2em] text-graphite">
                  Temperament
                </h3>
                <div className="mt-4">
                  <PersonalitySliders sliders={volkovSliders} accent="crimson" />
                </div>
              </div>

              {/* Stats */}
              <div>
                <h3 className="font-display text-[10px] font-medium uppercase tracking-[0.2em] text-graphite">
                  Aptitudes
                </h3>
                <div className="mt-4">
                  <StatsBars stats={volkovStats} accent="crimson" />
                </div>

                {/* Combat Data trigger - More prominent button */}
                <button
                  onClick={() => setCombatOpen(true)}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-md border-2 border-crimson/30 bg-crimson/5 px-5 py-3 font-serif text-sm font-medium text-crimson transition-all hover:bg-crimson hover:text-canvas"
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
              <span className="font-display text-[10px] font-medium uppercase tracking-[0.25em] text-crimson">
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
                description="Name analysis, psychological framework, MBTI/Enneagram, attachment style, and the paradox of his Dendro Vision."
                href="/characters/dmitri-volkov/identity"
                accent="crimson"
                readingTime="~45 min"
              />
              <PartNavCard
                number="II"
                title="History & Relationships"
                description="Complete backstory timeline, the desertion, key relationships, and the journey from Snezhnaya to Liyue."
                href="/characters/dmitri-volkov/history"
                accent="crimson"
                readingTime="~90 min"
              />
              <PartNavCard
                number="III"
                title="Behavior & Narrative"
                description="Behavioral encyclopedia, writing guide, daily routines, micro-expressions, and dialogue patterns."
                href="/characters/dmitri-volkov/behavior"
                accent="crimson"
                readingTime="~40 min"
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
                href="/characters/lan-qingyu"
                className="group flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-vapor/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-jade/10">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-jade">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-[10px] font-medium uppercase tracking-[0.1em] text-graphite">Next Character</p>
                  <p className="font-serif text-lg font-medium text-ink group-hover:text-jade">Lan Qingyu</p>
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

      <CombatData isOpen={combatOpen} onClose={() => setCombatOpen(false)} character="volkov" />
    </>
  )
}
