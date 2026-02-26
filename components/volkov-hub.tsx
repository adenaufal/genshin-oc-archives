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
      <TopNav label="Dmitri Volkov" refCode="SNEZ-088" accentColor="crimson" />

      <main className="pb-24 pt-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          {/* Quick Reference Card */}
          <section aria-label="Quick Reference">
            <QuickRefCard data={volkovRef} accent="crimson" />
          </section>

          {/* Divider */}
          <div className="my-16 h-px bg-vapor dark:bg-vapor/30" />

          {/* VSONA Profile */}
          <section aria-label="VSONA Profile">
            <div className="flex items-center gap-4">
              <p className="font-mono text-caption uppercase tracking-widest-custom text-crimson">
                VSONA Profile
              </p>
              <div className="h-px flex-1 bg-vapor dark:bg-vapor/30" />
            </div>

            <p className="mt-6 font-serif text-body-lg italic leading-relaxed text-graphite">
              {"The Iron Forest. A scarred, immovable defender built for utility over beauty, whose hypervigilance is matched only by his physical durability."}
            </p>

            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Personality Sliders */}
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest-custom text-graphite">
                  Personality Sliders
                </h3>
                <div className="mt-4">
                  <PersonalitySliders sliders={volkovSliders} accent="crimson" />
                </div>
              </div>

              {/* Stats */}
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest-custom text-graphite">
                  Combat Statistics
                </h3>
                <div className="mt-4">
                  <StatsBars stats={volkovStats} accent="crimson" />
                </div>

                {/* Combat Data trigger */}
                <button
                  onClick={() => setCombatOpen(true)}
                  className="mt-8 flex items-center gap-2 font-mono text-caption uppercase tracking-widest-custom text-crimson transition-colors hover:text-ink dark:hover:text-ink-secondary"
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

          {/* Divider */}
          <div className="my-16 h-px bg-vapor dark:bg-vapor/30" />

          {/* Deep Dive Parts */}
          <section aria-label="Character Bible">
            <div className="flex items-center gap-4">
              <p className="font-mono text-caption uppercase tracking-widest-custom text-crimson">
                Character Bible
              </p>
              <div className="h-px flex-1 bg-vapor dark:bg-vapor/30" />
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <PartNavCard
                number="01"
                title="Identity & Psychology"
                description="Name analysis, psychological framework, MBTI/Enneagram, attachment style, and the paradox of his Dendro Vision."
                href="/characters/dmitri-volkov/identity"
                accent="crimson"
                wordCount="13,500"
                readingTime="~45 min"
              />
              <PartNavCard
                number="02"
                title="History & Relationships"
                description="Complete backstory timeline, the desertion, key relationships, and the journey from Snezhnaya to Liyue."
                href="/characters/dmitri-volkov/history"
                accent="crimson"
                wordCount="28,000"
                readingTime="~90 min"
              />
              <PartNavCard
                number="03"
                title="Behavior & Narrative"
                description="Behavioral encyclopedia, writing guide, daily routines, micro-expressions, and dialogue patterns."
                href="/characters/dmitri-volkov/behavior"
                accent="crimson"
                wordCount="12,000"
                readingTime="~40 min"
              />
            </div>
          </section>

          {/* Divider */}
          <div className="my-16 h-px bg-vapor dark:bg-vapor/30" />

          {/* Cross-links */}
          <section aria-label="Related" className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/characters/lan-qingyu"
              className="group flex items-center gap-3 font-serif text-title text-graphite transition-colors hover:text-jade"
            >
              <span>{"Lan Qingyu"}</span>
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

      <CombatData isOpen={combatOpen} onClose={() => setCombatOpen(false)} character="volkov" />
    </>
  )
}
