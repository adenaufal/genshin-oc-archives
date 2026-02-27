"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { TopNav } from "./top-nav"

const complementarityData = [
  {
    dimension: "Communication",
    dmitri: "Minimal, functional, honest",
    qingyu: "Layered, strategic, beautiful",
    together: "He grounds her abstractions; she articulates his silences",
  },
  {
    dimension: "Decision-making",
    dmitri: "Fast, instinctive, physical",
    qingyu: "Deliberate, analytical, political",
    together: "He acts when she would overthink; she plans when he would charge",
  },
  {
    dimension: "Social Navigation",
    dmitri: "Avoidant, blunt, uncomfortable",
    qingyu: "Masterful, charming, tireless",
    together: "She handles the room; he watches her back from the margins",
  },
  {
    dimension: "Emotional Processing",
    dmitri: "Suppressed, pre-verbal, action-based",
    qingyu: "Intellectualized, categorized, denied",
    together: "His raw feeling challenges her analysis; her frameworks give his feelings names",
  },
  {
    dimension: "Moral Framework",
    dmitri: "Rigid, principled, self-punishing",
    qingyu: "Flexible, pragmatic, self-serving",
    together: "His lines remind her that some things matter; her flexibility keeps them alive",
  },
  {
    dimension: "Threat Response",
    dmitri: "Direct confrontation, physical force",
    qingyu: "Indirect neutralization, social maneuvering",
    together: "She identifies the threat; he eliminates it. Or she eliminates it first, quietly",
  },
  {
    dimension: "Attachment Style",
    dmitri: "Dismissive-Avoidant",
    qingyu: "Fearful-Avoidant",
    together: "Both fear intimacy, but from different directions, and their fears don't overlap",
  },
  {
    dimension: "Dendro Expression",
    dmitri: "Protective growth \u2014 thorns, barriers",
    qingyu: "Entangling networks \u2014 vines, webs",
    together: "Shield and web. Fortress and labyrinth. Together, inescapable",
  },
]

const combatRoles = [
  { role: "Position", dmitri: "Vanguard / Anchor", qingyu: "Flank / Mobile" },
  { role: "Function", dmitri: "Absorb damage, control space", qingyu: "Control movement, disable targets" },
  { role: "Weapon", dmitri: "Claymore (heavy, devastating)", qingyu: "Sword (precise, poison-capable)" },
  { role: "Dendro Use", dmitri: "Thorn walls, root entanglement", qingyu: "Vine restraints, spore disorientation" },
  { role: "Kill Style", dmitri: "Decisive, efficient, minimal excess", qingyu: "Surgical, prefers incapacitation" },
]

const dialogueSample = {
  setting: "Late evening. A rented room above a harbor-side tavern. Dmitri is cleaning Petrov\u2019s claymore at a table near the window. Qingyu is seated across from him, writing in her cipher notebook. Two cups of tea sit between them. His is untouched. Hers is half-empty.",
  lines: [
    { speaker: "QINGYU", text: "You took three hits you didn\u2019t need to take." },
    { speaker: "DMITRI", text: "Mm.", direction: "not looking up from the blade" },
    { speaker: "QINGYU", text: "The first was defensible \u2014 you were covering the exit. The second was unnecessary \u2014 I had already repositioned. The third was... theatrical." },
    { speaker: "DMITRI", text: "They had a crossbow on you.", direction: "long pause" },
    { speaker: "QINGYU", text: "I was aware of the crossbow. I had a plan for the crossbow." },
    { speaker: "DMITRI", text: "My plan was faster." },
    { speaker: "QINGYU", text: "Your plan involved your ribcage, Volkov." },
    { speaker: "DMITRI", text: "Ribs heal.", direction: "finally looks up, the barest ghost of amusement" },
    { speaker: "QINGYU", text: "They do. Eventually. With rest. Which you will not take voluntarily. Which means I will need to build rest into our schedule as though it were an operational requirement, because apparently the only language you understand is logistics.", direction: "sets down her pen with deliberate precision" },
    { speaker: "DMITRI", text: "\u2026that works.", direction: "returns to cleaning" },
    { speaker: "QINGYU", text: "It shouldn\u2019t have to.", direction: "the faintest curve at the corner of her mouth" },
  ],
  closing: "Silence. The comfortable kind. Dmitri picks up his tea. It is cold. He drinks it anyway. Qingyu notices. She does not offer to make more. She adds \u201Cacquire travel kettle\u201D to her supply list and disguises it as an operational expense.",
}

export function DuoDynamic() {
  const [expandedDialogue, setExpandedDialogue] = useState(false)
  const reduce = useReducedMotion()

  const reveal = {
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" as const },
    transition: { duration: reduce ? 0 : 0.7, ease: "easeOut" as const },
  }

  return (
    <>
      <TopNav label="The Duo" />

      <main className="pb-24 pt-32">
        {/* Hero section with both portraits */}
        <section className="mx-auto max-w-5xl px-6 lg:px-12">
          <motion.div className="flex flex-col items-center" {...reveal}>
            <p className="font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
              Duo Dynamic
            </p>
            <h1 className="mt-4 text-center font-serif text-hero italic text-ink text-balance">
              Iron & Silk
            </h1>
            <p className="mt-4 text-center font-sans text-sm text-graphite">
              Professional Partnership with Undeclared Personal Significance
            </p>
          </motion.div>

          {/* Dual portraits */}
          <motion.div
            className="mt-16 flex items-stretch gap-4 lg:gap-6"
            initial={{ opacity: 0, y: reduce ? 0 : 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: reduce ? 0 : 0.8, ease: "easeOut", delay: reduce ? 0 : 0.2 }}
          >
            <Link href="/characters/dmitri-volkov" className="group relative flex-1 overflow-hidden border border-vapor">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/volkov_portrait.webp"
                  alt="Dmitri Volkov"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 400px"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-20">
                  <span className="font-serif text-2xl text-canvas lg:text-3xl drop-shadow-lg">Dmitri Volkov</span>
                  <p className="mt-1 font-display text-[9px] uppercase tracking-[0.15em] text-canvas/90 drop-shadow-md">
                    The Iron Forest
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/characters/lan-qingyu" className="group relative flex-1 overflow-hidden border border-vapor">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/qinyu_portrait.webp"
                  alt="Lan Qingyu"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 400px"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-20">
                  <span className="font-serif text-2xl text-canvas lg:text-3xl drop-shadow-lg">Lan Qingyu</span>
                  <p className="mt-1 font-display text-[9px] uppercase tracking-[0.15em] text-canvas/90 drop-shadow-md">
                    The Mist Serpent
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        </section>

        {/* How They Met */}
        <motion.section className="mx-auto mt-24 max-w-reading px-6" {...reveal}>
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-ink" />
            <h2 className="font-serif text-title italic text-ink">
              How They Met
            </h2>
          </div>

          <div className="mt-8">
            <p className="font-serif text-body leading-relaxed text-ink">
              {"The circumstances were unremarkable by Liyue Harbor standards: a contract. Qingyu needed a reliable bodyguard for a sensitive intelligence exchange in the harbor district. Dmitri needed work. A mutual contact \u2014 a retired Millelith officer who owed Qingyu a favor and respected Dmitri\u2019s reputation \u2014 made the introduction."}
            </p>
            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink">
              {"The first meeting lasted eleven minutes. Qingyu offered tea. Dmitri declined. She outlined the parameters. He asked three questions \u2014 all operational, none personal. She assessed him in the silence between his sentences: competent, disciplined, impossible to charm, and possessed of a bluntness that was either refreshing or alarming depending on one\u2019s tolerance for being seen clearly."}
            </p>
            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink">
              {"The contract concluded successfully. She offered a second. He accepted. Then a third. Then it stopped being contracts and became something that neither of them has accurately named."}
            </p>
          </div>
        </motion.section>

        {/* Complementarity Table */}
        <motion.section className="mx-auto mt-24 max-w-5xl px-6 lg:px-12" aria-label="Complementarity Analysis" {...reveal}>
          <div className="flex items-center gap-4">
            <p className="font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
              Complementarity Analysis
            </p>
            <div className="h-px flex-1 bg-vapor" />
          </div>

          <p className="mt-6 font-serif text-xl italic leading-relaxed text-graphite">
            {"Iron and Silk. He protects. She adapts. Iron breaks before it bends. Silk bends before it breaks. Together, they cover each other\u2019s blind spots with a completeness that is almost architectural."}
          </p>

          {/* Desktop table */}
          <div className="mt-10 hidden overflow-hidden border border-vapor md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-vapor bg-canvas">
                  <th className="w-1/4 px-5 py-4 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-graphite">
                    Dimension
                  </th>
                  <th className="w-1/4 px-5 py-4 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-crimson">
                    Dmitri
                  </th>
                  <th className="w-1/4 px-5 py-4 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-jade">
                    Qingyu
                  </th>
                  <th className="w-1/4 px-5 py-4 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-graphite">
                    Together
                  </th>
                </tr>
              </thead>
              <tbody>
                {complementarityData.map((row, i) => (
                  <tr key={row.dimension} className={`border-b border-vapor ${i % 2 === 1 ? "bg-vapor/20" : ""}`}>
                    <td className="px-5 py-4 font-sans text-sm font-medium text-ink">
                      {row.dimension}
                    </td>
                    <td className="px-5 py-4 font-serif text-sm leading-relaxed text-ink">
                      {row.dmitri}
                    </td>
                    <td className="px-5 py-4 font-serif text-sm leading-relaxed text-ink">
                      {row.qingyu}
                    </td>
                    <td className="px-5 py-4 font-serif text-sm italic leading-relaxed text-graphite">
                      {row.together}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="mt-10 flex flex-col gap-6 md:hidden">
            {complementarityData.map((row) => (
              <div key={row.dimension} className="border border-vapor p-5">
                <p className="font-sans text-xs font-bold uppercase tracking-widest-custom text-graphite">
                  {row.dimension}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-display text-[9px] uppercase tracking-[0.15em] text-crimson">Dmitri</span>
                    <p className="mt-1 font-serif text-sm text-ink">{row.dmitri}</p>
                  </div>
                  <div>
                    <span className="font-display text-[9px] uppercase tracking-[0.15em] text-jade">Qingyu</span>
                    <p className="mt-1 font-serif text-sm text-ink">{row.qingyu}</p>
                  </div>
                </div>
                <div className="mt-4 border-t border-vapor pt-3">
                  <p className="font-serif text-sm italic text-graphite">{row.together}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* What They Give Each Other */}
        <section className="mx-auto mt-24 max-w-5xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* What He Gives Her */}
            <motion.div
              initial={{ opacity: 0, x: reduce ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: reduce ? 0 : 0.7, ease: "easeOut" }}
            >
              <p className="font-display text-[10px] uppercase tracking-[0.2em] text-crimson">
                What He Gives Her
              </p>
              <div className="mt-6 flex flex-col gap-6">
                <div>
                  <h3 className="font-serif text-xl text-ink">Consistency</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                    {"Dmitri is the same person every day. He does not perform. He does not angle. This consistency is slowly demolishing the foundational assumption that organizes her entire life: that people are unreliable."}
                  </p>
                </div>
                <div className="h-px bg-vapor" />
                <div>
                  <h3 className="font-serif text-xl text-ink">An Honest Mirror</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                    {"He is the only mirror in her life that she cannot angle to show her what she wants to see. This is both terrifying and addictive."}
                  </p>
                </div>
                <div className="h-px bg-vapor" />
                <div>
                  <h3 className="font-serif text-xl text-ink">Physical Safety</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                    {"She sleeps better when he is in the adjacent room. She has not told him this. She may never tell him this."}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* What She Gives Him */}
            <motion.div
              initial={{ opacity: 0, x: reduce ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: reduce ? 0 : 0.7, ease: "easeOut", delay: reduce ? 0 : 0.15 }}
            >
              <p className="font-display text-[10px] uppercase tracking-[0.2em] text-jade">
                What She Gives Him
              </p>
              <div className="mt-6 flex flex-col gap-6">
                <div>
                  <h3 className="font-serif text-xl text-ink">Purpose</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                    {"She is the closest thing he has to a mission, and for a man who has defined himself through service for his entire life, the mission matters."}
                  </p>
                </div>
                <div className="h-px bg-vapor" />
                <div>
                  <h3 className="font-serif text-xl text-ink">A Reason to Stay</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                    {"Not in Liyue \u2014 he could stay anywhere. A reason to stay present. Engaged. In the world rather than retreating from it."}
                  </p>
                </div>
                <div className="h-px bg-vapor" />
                <div>
                  <h3 className="font-serif text-xl text-ink">Challenge</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                    {"She is a puzzle he is not trying to solve but is content to observe, and the observation keeps his mind engaged in ways that combat alone cannot."}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Joint Combat Synergy */}
        <motion.section className="mx-auto mt-24 max-w-5xl px-6 lg:px-12" aria-label="Combat Synergy" {...reveal}>
          <div className="flex items-center gap-4">
            <p className="font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
              Joint Combat Synergy
            </p>
            <div className="h-px flex-1 bg-vapor" />
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="h-px w-8 bg-ink" />
            <h2 className="font-serif text-title italic text-ink">
              The Iron Garden
            </h2>
          </div>

          <p className="mt-6 font-serif text-body leading-relaxed text-ink">
            {"Both are Dendro vision holders, which creates a unique elemental synergy. Their combined abilities produce what observers have called \u201Cthe Iron Garden\u201D \u2014 a combat environment in which Dmitri\u2019s protective growth interlocks with Qingyu\u2019s entangling networks to create a battlefield that is both fortress and labyrinth."}
          </p>

          {/* Combat roles table */}
          <div className="mt-10 overflow-hidden border border-vapor">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-vapor">
                  <th className="px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-graphite">
                    Role
                  </th>
                  <th className="px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-crimson">
                    Dmitri
                  </th>
                  <th className="px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-jade">
                    Qingyu
                  </th>
                </tr>
              </thead>
              <tbody>
                {combatRoles.map((row, i) => (
                  <tr key={row.role} className={`border-b border-vapor ${i % 2 === 1 ? "bg-vapor/20" : ""}`}>
                    <td className="px-5 py-3 font-sans text-sm font-medium text-ink">{row.role}</td>
                    <td className="px-5 py-3 font-serif text-sm text-ink">{row.dmitri}</td>
                    <td className="px-5 py-3 font-serif text-sm text-ink">{row.qingyu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Observed in action quote */}
          <blockquote className="mt-10 border-l-2 border-vapor py-4 pl-8">
            <p className="font-serif text-lg italic leading-relaxed text-graphite">
              {"\u201CFighting one of them is dangerous. Fighting both of them is architectural \u2014 you\u2019re not engaging combatants, you\u2019re entering a structure they\u2019ve built around you, and by the time you realize the walls are closing in, the thorns have already found your throat.\u201D"}
            </p>
            <cite className="mt-4 block font-display text-[9px] uppercase tracking-[0.15em] text-graphite">
              {"Anonymous Treasure Hoarder captain, debriefing after a failed ambush"}
            </cite>
          </blockquote>
        </motion.section>

        {/* Dialogue Sample */}
        <motion.section className="mx-auto mt-24 max-w-reading px-6" aria-label="Dialogue Sample" {...reveal}>
          <div className="flex items-center gap-4">
            <p className="font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
              Dialogue Sample
            </p>
            <div className="h-px flex-1 bg-vapor" />
          </div>

          <h3 className="mt-6 font-serif text-title italic text-ink">
            After a Mission
          </h3>

          <div className="mt-6 border border-vapor p-6 lg:p-8">
            {/* Setting */}
            <p className="font-sans text-xs italic leading-relaxed text-graphite">
              {dialogueSample.setting}
            </p>

            <div className="mt-6 h-px bg-vapor" />

            {/* Lines */}
            <div className="mt-6 flex flex-col gap-4">
              {(expandedDialogue ? dialogueSample.lines : dialogueSample.lines.slice(0, 6)).map((line, i) => (
                <div key={i} className="flex gap-4">
                  <span className={`w-20 shrink-0 text-right font-display text-[9px] uppercase tracking-[0.15em] ${
                    line.speaker === "DMITRI" ? "text-crimson" : "text-jade"
                  }`}>
                    {line.speaker}
                  </span>
                  <div className="flex-1">
                    {line.direction && (
                      <span className="font-sans text-xs italic text-graphite">
                        [{line.direction}]{" "}
                      </span>
                    )}
                    <span className="font-serif text-sm leading-relaxed text-ink">
                      {line.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {!expandedDialogue && (
              <button
                onClick={() => setExpandedDialogue(true)}
                className="mt-6 font-display text-[10px] uppercase tracking-[0.2em] text-graphite transition-colors hover:text-ink"
              >
                Continue reading...
              </button>
            )}

            <AnimatePresence>
              {expandedDialogue && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: reduce ? 0 : 0.5, ease: "easeOut" }}
                >
                  <div className="mt-6 h-px bg-vapor" />
                  <p className="mt-6 font-sans text-xs italic leading-relaxed text-graphite">
                    {dialogueSample.closing}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Thematic Resonance */}
        <motion.section className="mx-auto mt-24 max-w-reading px-6" {...reveal}>
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-ink" />
            <h2 className="font-serif text-title italic text-ink">
              The Central Question
            </h2>
          </div>

          <blockquote className="mt-8 border-l-2 border-vapor py-4 pl-8">
            <p className="font-serif text-xl italic leading-relaxed text-ink">
              {"Can two people who have built their entire lives around self-sufficiency learn to need each other?"}
            </p>
          </blockquote>

          <p className="mt-8 font-serif text-body leading-relaxed text-ink">
            {"Dmitri\u2019s self-sufficiency is a fortress \u2014 stone walls, moat, no drawbridge. Qingyu\u2019s self-sufficiency is a labyrinth \u2014 infinite corridors, no center, no map. Both constructions serve the same purpose: to make the occupant unreachable. Both constructions share the same flaw: the occupant is also trapped."}
          </p>

          <p className="mt-paragraph font-serif text-body leading-relaxed text-ink">
            {"The story of their partnership is the story of two people who are, slowly and reluctantly, building passages between fortress and labyrinth \u2014 not demolishing either structure, but creating narrow, carefully maintained corridors through which something \u2014 information, warmth, the occasional act of kindness that neither of them knows how to name \u2014 can flow."}
          </p>
        </motion.section>

        {/* End divider */}
        <div className="mx-auto mt-24 flex justify-center">
          <div className="h-px w-16 bg-vapor" />
        </div>

        {/* Bottom navigation */}
        <nav className="mx-auto mt-12 flex max-w-reading items-center justify-between px-6" aria-label="Page navigation">
          <Link href="/characters/dmitri-volkov" className="group flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.2em] text-crimson transition-colors hover:text-ink">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:-translate-x-1" aria-hidden="true">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Volkov
          </Link>
          <Link href="/characters/lan-qingyu" className="group flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.2em] text-jade transition-colors hover:text-ink">
            Qingyu
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </nav>
      </main>
    </>
  )
}
