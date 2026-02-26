"use client"

import { useState } from "react"
import { TopNav } from "./top-nav"
import { CombatData } from "./combat-data"
import { ImagePlate } from "./image-plate"
import { SectionNav } from "./section-nav"

export function QingyuScroll() {
  const [combatOpen, setCombatOpen] = useState(false)

  return (
    <>
      <TopNav label="Qingyu \u2014 Identity" refCode="LIY-004" accentColor="jade" />

      <main className="relative pb-24 pt-32">
        {/* Subtle scroll binding motif */}
        <div
          className="pointer-events-none absolute bottom-0 left-4 top-0 hidden w-px lg:block"
          style={{ backgroundColor: "rgba(42, 75, 66, 0.08)" }}
          aria-hidden="true"
        />

        <article className="mx-auto max-w-reading px-6">
          {/* Header area with icon */}
          <div className="flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-jade" aria-hidden="true">
              <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M6 7h8M6 10h5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
            <span className="font-serif text-sm italic text-ink">The Archives</span>
          </div>

          {/* Ref code */}
          <div className="mt-8 flex items-center justify-between">
            <div />
            <p className="font-mono text-caption uppercase tracking-widest-custom text-jade">
              REF: LIY-004
            </p>
          </div>

          {/* Title */}
          <h1 className="mt-6 text-center font-serif text-hero italic text-ink">
            Lan Qingyu
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-center font-mono text-caption uppercase tracking-widest-custom text-graphite">
            The Yuheng Consultant
          </p>

          {/* Divider */}
          <div className="mx-auto mt-12 h-px w-16 bg-vapor" />

          {/* Intro body */}
          <div className="mt-16">
            <p className="drop-cap drop-cap-jade font-serif text-body leading-relaxed text-ink">
              {'In the bustling harbors of Liyue, where contracts are etched into stone and commerce flows like the tides, Lan Qingyu operates within the silent pauses of negotiation. She is not the loud voice of the decree, but the whisper that shapes it. As a consultant to the Qixing, her influence is as pervasive and unseen as the root systems of the ancient glaze lilies. Her methods, often described as elegant coercion, rely less on the brute force of Geo and more on the intricate web of favors and debts that bind the city\u2019s elite.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink">
              {'The name Lan Qingyu is an exquisite fabrication, a title chosen by a dock worker\u2019s hungry daughter to rewrite her own destiny. Where others inherited wealth and respect, she had to engineer them entirely from scratch. Trading the cold reality of absolute poverty for the silken armor of high society, she transformed herself into the harbor\u2019s most indispensable intelligence broker \u2014 a woman whose smile is a weapon and whose information network rivals the Qixing\u2019s own.'}
            </p>
          </div>

          {/* Poetry block */}
          <blockquote className="my-16 border-l-2 border-jade/20 py-4 pl-8">
            <p className="font-serif text-xl italic leading-relaxed text-ink">
              {'"Gold is heavy, yet it travels far.'}
            </p>
            <p className="font-serif text-xl italic leading-relaxed text-ink">
              {'Stone is silent, yet it remembers all.'}
            </p>
            <p className="font-serif text-xl italic leading-relaxed text-ink">
              {'A contract signed in ink may fade,'}
            </p>
            <p className="font-serif text-xl italic leading-relaxed text-ink">
              {'But one signed in jade endures the fall."'}
            </p>
          </blockquote>

          {/* Image plate 1 */}
          <ImagePlate
            src="/images/qinyu_fullbody.webp"
            alt="Lan Qingyu full body reference"
            caption="Figure 1: The Mist Serpent // Full Reference"
            aspect="portrait"
            grayscale={true}
          />

          {/* Section header with em-dash */}
          <div className="mt-24 flex items-center gap-4">
            <div className="h-px w-8 bg-ink" />
            <h2 className="font-serif text-title italic text-ink">
              The Jade Balance
            </h2>
          </div>

          <div className="mt-8">
            <p className="font-serif text-body leading-relaxed text-ink">
              {'Born into a lineage of dock workers, Qingyu understands that value is often an artificial construct. Her Dendro Vision manifested not during a moment of combat, but during a particularly tense negotiation regarding the mineral rights of the Chasm. It is said that the raw cor lapis upon the table resonated with her unwavering resolve to seek equilibrium, turning to pure jade at her touch.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink">
              {'Unlike her contemporaries who wield elements as weapons of war, Qingyu utilizes her abilities to reshape the battlefield\u2019s architecture. She creates barriers of crystalline jade that reflect not just physical attacks, but the intentions of her enemies. In the court of law or on the field of battle, her strategy remains the same: isolate the aggressor, dismantle their foundation, and dictate the terms of their surrender.'}
            </p>
          </div>

          {/* Combat data trigger */}
          <div className="my-12 flex items-center gap-4">
            <div className="hairline flex-1" />
            <button
              onClick={() => setCombatOpen(true)}
              className="flex items-center gap-2 font-mono text-caption uppercase tracking-widest-custom text-jade transition-colors hover:text-ink"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1" />
                <path d="M7 4v3h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
              View Combat Data
            </button>
            <div className="hairline flex-1" />
          </div>

          {/* Image plate 2 */}
          <ImagePlate
            src="/images/qinyu_marketingdrip.webp"
            alt="Lan Qingyu marketing illustration"
            caption="Figure 2: Mineral Resonance Study"
            grayscale={true}
          />

          {/* Final text */}
          <div className="mt-8">
            <p className="font-serif text-body leading-relaxed text-ink">
              {'To understand Lan Qingyu is to understand the nature of Liyue itself: enduring, transactional, and beautifully ruthless. She walks the harbor with the grace of a dancer and the precision of an accountant, ensuring that for every debt incurred, a price is eventually paid.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink">
              {'Yet, creating an empire of leverage is an isolating endeavor. Surrounded by people who owe her, fear her, or find her useful, Qingyu remains fundamentally untouched and unseen. As the weight of thirty years of deception begins to strain her flawless architecture, the terrifying truth emerges: the girl who survived by becoming everyone else\u2019s necessity is finally longing to be someone\u2019s choice.'}
            </p>
          </div>

          {/* End divider */}
          <div className="mt-24 flex justify-center">
            <div className="h-px w-16 bg-vapor" />
          </div>
        </article>

        {/* Bottom navigation */}
        <SectionNav
          prev={{ label: "Dmitri Volkov", href: "/characters/dmitri-volkov/identity" }}
          next={{ label: "Qingyu Hub", href: "/characters/lan-qingyu" }}
        />
      </main>

      <CombatData
        isOpen={combatOpen}
        onClose={() => setCombatOpen(false)}
        character="qingyu"
      />
    </>
  )
}
