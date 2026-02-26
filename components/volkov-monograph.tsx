"use client"

import { useState } from "react"
import { TopNav } from "./top-nav"
import { CombatData } from "./combat-data"
import { PullQuote } from "./pull-quote"
import { ImagePlate } from "./image-plate"
import { SectionNav } from "./section-nav"

export function VolkovMonograph() {
  const [combatOpen, setCombatOpen] = useState(false)

  return (
    <>
      <TopNav label="Volkov & Qingyu" refCode="SNEZ-088" accentColor="crimson" />

      <main className="pb-24 pt-32">
        <article className="mx-auto max-w-reading px-6">
          {/* Ref code */}
          <p className="font-mono text-caption uppercase tracking-widest-custom text-crimson">
            REF: SNEZ-088
          </p>

          {/* Title */}
          <h1 className="mt-6 font-serif text-hero italic text-ink">
            Dmitri Volkov
          </h1>

          {/* Subtitle */}
          <p className="mt-4 font-mono text-caption uppercase tracking-widest-custom text-graphite">
            The Iron Forest
          </p>

          {/* Divider */}
          <div className="mt-12 hairline" />

          {/* Quote */}
          <p className="mt-12 font-serif text-2xl italic leading-relaxed text-graphite lg:text-3xl">
            {'"You look at me and see a weapon. That is by design. If you saw what I actually am, you would not feel safe."'}
          </p>

          <div className="mt-12 hairline" />

          {/* Body text */}
          <div className="mt-16">
            <p className="drop-cap drop-cap-crimson font-serif text-body leading-relaxed text-ink">
              {'The winter in Snezhnaya does not simply arrive; it conquers. It is a slow, methodical siege that strips the warmth from the stone and the hope from the hearth. Born into this relentless white void, Dmitri learned early that survival was not a right, but a negotiation with the elements. His childhood was not marked by play, but by the quiet study of thermal dynamics and the sharp, metallic taste of iron in the air.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink">
              {'A name, in Teyvat as in any world, is a kind of prophecy. It is the first story told about a person, often before they have any say in the matter. In the case of Dmitri Alexeyevich Volkov, the name reads like a thesis statement for a life defined by paradox \u2014 a man of war named for the earth, a soldier christened as a defender, a predator who learned to shepherd. '}
              <em>Dmitri</em>
              {' traces its roots to Demeter, the ancient goddess of harvest, grain, and the fertile earth.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink">
              {'Unlike his peers who sought comfort in the Tsarevich\u2019s benevolence, Dmitri found solace in the machinery of war. He saw the human body not as a vessel for the soul, but as an inefficient engine requiring constant fuel and maintenance. It was this detached, clinical perspective that caught the eye of the military recruiters. They didn\u2019t see a boy; they saw a blade waiting to be sharpened.'}
            </p>
          </div>

          {/* Pull quote */}
          <PullQuote accent="crimson">
            {'"Loyalty is just a currency you haven\u2019t spent yet."'}
          </PullQuote>

          {/* Second section */}
          <div>
            <p className="font-serif text-body leading-relaxed text-ink">
              {'His ascent through the ranks was swift, propelled by a distinct lack of hesitation. Where others paused to consider the morality of a command, Volkov had already calculated the trajectory of the outcome. Strength without purpose was just violence. Violence without restraint was just cruelty. And cruelty was the one thing he could no longer serve.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink">
              {'The erosion began slowly. A village burned not because it posed a strategic threat, but because a commanding officer wanted to send a message. A prisoner beaten not for intelligence, but because the interrogator enjoyed it. Each incident was small enough to rationalize in isolation \u2014 the fog of war, the necessities of command. But they accumulated like snow on a roof, and Dmitri began to feel the timbers of his worldview groaning under the weight.'}
            </p>
          </div>

          {/* Combat data trigger */}
          <div className="my-12 flex items-center gap-4">
            <div className="hairline flex-1" />
            <button
              onClick={() => setCombatOpen(true)}
              className="flex items-center gap-2 font-mono text-caption uppercase tracking-widest-custom text-crimson transition-colors hover:text-ink"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1" />
                <path d="M7 4v3h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
              View Combat Data
            </button>
            <div className="hairline flex-1" />
          </div>

          {/* Image plate */}
          <ImagePlate
            src="/images/volkov_fullbody.webp"
            alt="Dmitri Volkov full body reference"
            archiveId="Archive ID: V08-A"
            caption="Figure 1: The Iron Forest // Full Reference"
            aspect="portrait"
          />

          {/* Third section */}
          <div className="mt-8">
            <p className="font-serif text-body leading-relaxed text-ink">
              {'It was during the final campaign that his potential truly manifested. The night of the village burning, when Dmitri made his decision to desert, he looked into the eyes of a child and saw a fear so total, so absolute, that it had gone beyond terror into a kind of blank emptiness. In that moment, a Dendro Vision manifested: a quiet acknowledgment from the gods that the bloodied soil of a battlefield could still nurture life.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink">
              {'Now, working as a highly guarded mercenary wandering Liyue, Dmitri navigates the world not as a weapon of destruction, but as a guardian. Beneath his terrifying, scarred exterior and clipped responses lies a gentle man fighting a daily war against his own history, desperate for a safety he has never known and a connection he believes he does not deserve.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink">
              {'His body is a record of violence. Every scar is a story, and he carries dozens. The scar across his left cheek \u2014 a clean, deliberate line that speaks of a bladed weapon wielded with precision \u2014 is the first thing most people notice after his crimson eyes. He does not hide it. He does not explain it unless asked. And even then, the explanation is terse.'}
            </p>
          </div>

          <PullQuote accent="crimson">
            {'"A sword that only knows how to cut will eventually run out of things worth cutting."'}
          </PullQuote>

          <div>
            <p className="font-serif text-body leading-relaxed text-ink">
              {'The Dendro Vision holder who looks like a Cryo warrior. The man named for the earth goddess who is built like a siege engine. The wolf who chose to become a shepherd. Every aspect of Dmitri\u2019s physical presence contains this tension between what he was made to be and what he chose to become. His body is a war machine. His Vision grows flowers. The contradiction is the point.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink">
              {'He has never considered changing his name. Deserter or not, he is a Volkov. The name is a scar, and Dmitri does not hide his scars.'}
            </p>
          </div>

          {/* End divider */}
          <div className="mt-24 flex justify-center">
            <div className="h-px w-16 bg-vapor" />
          </div>
        </article>

        {/* Bottom navigation */}
        <SectionNav
          prev={null}
          next={{ label: "Lan Qingyu", href: "/characters/lan-qingyu" }}
        />
      </main>

      <CombatData
        isOpen={combatOpen}
        onClose={() => setCombatOpen(false)}
        character="volkov"
      />
    </>
  )
}
