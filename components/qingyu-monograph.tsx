"use client"

import { useState } from "react"
import { TopNav } from "./top-nav"
import { CombatData } from "./combat-data"
import { PullQuote } from "./pull-quote"
import { ImagePlate } from "./image-plate"
import { SectionNav } from "./section-nav"

export function QingyuMonograph() {
  const [combatOpen, setCombatOpen] = useState(false)

  return (
    <>
      <TopNav label="Book I / Identity" accentColor="jade" />

      <main className="relative pb-24 pt-32">
        {/* Scroll binding motif */}
        <div
          className="pointer-events-none absolute bottom-0 left-4 top-0 hidden w-px lg:block"
          style={{ backgroundColor: "rgba(42, 75, 66, 0.08)" }}
          aria-hidden="true"
        />

        <article className="mx-auto max-w-reading px-6 lg:pl-12 lg:pr-6">
          {/* Ref code */}
          <p className="font-display text-[10px] uppercase tracking-[0.25em] text-jade">
            REF: LIY-004
          </p>

          {/* Title */}
          <h1 className="mt-6 font-serif text-hero italic text-ink dark:text-ink">
            Lan Qingyu
          </h1>

          {/* Subtitle */}
          <p className="mt-4 font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
            The Mist Serpent
          </p>

          {/* Chinese name */}
          <p className="mt-2 font-serif text-2xl text-graphite">
            兰青羽
          </p>

          {/* Divider */}
          <div className="mt-12 hairline dark:bg-vapor/30" />

          {/* Quote */}
          <p className="mt-12 font-serif text-2xl italic leading-relaxed text-graphite lg:text-3xl">
            {'"Everyone has a price. The truly interesting question is what currency they accept."'}
          </p>

          <div className="mt-12 hairline dark:bg-vapor/30" />

          {/* Body text */}
          <div className="mt-16">
            <p className="drop-cap drop-cap-jade font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'The name Lan Qingyu is, in every sense, a fabrication — and that is precisely what makes it true. Unlike most citizens of Liyue Harbor who carry the names their parents bestowed upon them like heirlooms, Qingyu selected each character of her name with the same deliberation a calligrapher brings to the first stroke of ink on silk. The name is not inherited. It is engineered.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'兰 (Lán) — Orchid. The surname she chose carries the weight of Liyue\'s botanical symbolism: the orchid represents refinement, integrity, and the kind of beauty that flourishes in hidden places. 青 (Qīng) — Blue-Green, the Color of Mist. A spy\'s color — present but undefined, visible but unclassifiable. 羽 (Yǔ) — Feather. Lightness, grace, the capacity for departure.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Together, the name reads as a self-portrait in three brushstrokes: an orchid of shifting color that could fly away at any moment. It is beautiful. It is elusive. It is exactly what she wants you to see, and the fact that it also happens to be true is the kind of irony she appreciates most.'}
            </p>
          </div>

          {/* Pull quote */}
          <PullQuote accent="jade">
            {'"The distance between what Lan Qingyu shows and what she is might be measured in light-years."'}
          </PullQuote>

          {/* Second section */}
          <div>
            <p className="font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'At forty-four, Qingyu stands as Liyue Harbor\'s most elegant intelligence broker — a woman who built an empire of secrets to bury a childhood of hunger. She moves through the harbor\'s elite spaces with the ease of someone who has always belonged there, though her origins lie in the cold, rough docks where her father worked himself to death and her mother followed soon after.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Her ascent required the methodical erasure of her past. The dock worker\'s daughter who stole rice to survive, who listened at keyholes to learn secrets worth trading, who transformed herself through sheer force of will into a woman of cultivation and power — that girl is buried beneath five layers of perfectly maintained persona.'}
            </p>
          </div>

          {/* Combat data trigger */}
          <div className="my-12 flex items-center gap-4">
            <div className="hairline flex-1 dark:bg-vapor/30" />
            <button
              onClick={() => setCombatOpen(true)}
              className="flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.25em] text-jade transition-colors hover:text-ink dark:hover:text-ink-secondary"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1" />
                <path d="M7 4v3h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
              View Combat Data
            </button>
            <div className="hairline flex-1 dark:bg-vapor/30" />
          </div>

          {/* Image plate */}
          <ImagePlate
            src="/images/qinyu_fullbody.webp"
            alt="Lan Qingyu full body reference"
            archiveId="Archive ID: L04-A"
            caption="Figure 1: The Mist Serpent // Full Reference"
            aspect="portrait"
          />

          {/* Third section */}
          <div className="mt-8">
            <p className="font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'The Dendro Vision that rests at her hip came at age thirty, after years of building her network — manifestation of her ability to "grow" connections and nurture webs of information. Where Dmitri\'s Dendro is protective, growing walls and barriers, Qingyu\'s is entangling: vines that reach, webs that capture, networks that connect.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Her platinum blonde hair — unusual for a Liyue native — is an accidental genetic trait that she has weaponized. It makes her memorable. Distinctive. The woman with the honey-colored eyes and the snow-pale hair, moving through rooms in silk qipao and jade accessories. Every element of her appearance is calculated communication, designed to draw the eye while the hand reaches for secrets unnoticed.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Yet creating an empire of leverage is an isolating endeavor. Surrounded by people who owe her, fear her, or find her useful, Qingyu remains fundamentally untouched. As the weight of thirty years of deception begins to strain her flawless architecture, the terrifying truth emerges: the girl who survived by becoming everyone else\'s necessity is finally longing to be someone\'s choice.'}
            </p>
          </div>

          <PullQuote accent="jade">
            {'"She is the kind of beautiful that makes you watch. She is the kind of beautiful that makes you forget to notice what her other hand is doing."'}
          </PullQuote>

          <div>
            <p className="font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Qingyu operates on five layers simultaneously. The socialite — beautiful, warm, charming. The broker — sharp, efficient, formidable. The strategist — candid, witty, direct. The survivor — fierce, pragmatic, occasionally ruthless. And deepest, the child who wanted safety, warmth, and love, who believed that kindness would be returned until the world taught her otherwise.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Her relationship with Dmitri Volkov represents a disruption to this carefully maintained system. His refusal to be charmed, manipulated, or strategically managed means that her upper layers have no purchase on him. In his presence, the masks do not fail; they simply become unnecessary.'}
            </p>
          </div>

          {/* End divider */}
          <div className="mt-24 flex justify-center">
            <div className="h-px w-16 bg-vapor dark:bg-vapor/30" />
          </div>
        </article>

        {/* Bottom navigation */}
        <SectionNav
          prev={{ label: "Qingyu Hub", href: "/characters/lan-qingyu" }}
          next={{ label: "Dmitri Volkov", href: "/characters/dmitri-volkov/identity" }}
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
