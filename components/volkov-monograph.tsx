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
      <TopNav label="Book I / Identity" accentColor="crimson" />

      <main className="pb-24 pt-32">
        <article className="mx-auto max-w-reading px-6">
          {/* Ref code */}
          <p className="font-display text-[10px] uppercase tracking-[0.25em] text-crimson">
            REF: SNEZ-088
          </p>

          {/* Title */}
          <h1 className="mt-6 font-serif text-hero italic text-ink dark:text-ink">
            Dmitri Volkov
          </h1>

          {/* Subtitle */}
          <p className="mt-4 font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
            The Iron Forest
          </p>

          {/* Divider */}
          <div className="mt-12 hairline dark:bg-vapor/30" />

          {/* Quote */}
          <p className="mt-12 font-serif text-2xl italic leading-relaxed text-graphite lg:text-3xl">
            {'"You look at me and see a weapon. That is by design. If you saw what I actually am, you would not feel safe."'}
          </p>

          <div className="mt-12 hairline dark:bg-vapor/30" />

          {/* Body text */}
          <div className="mt-16">
            <p className="drop-cap drop-cap-crimson font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'The winter in Snezhnaya does not simply arrive; it conquers. It is a slow, methodical siege that strips the warmth from the stone and the hope from the hearth. Born into this relentless white void, Dmitri learned early that survival was not a right, but a negotiation with the elements. His childhood was not marked by play, but by the quiet study of thermal dynamics and the sharp, metallic taste of iron in the air.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'A name, in Teyvat as in any world, is a kind of prophecy. It is the first story told about a person, often before they have any say in the matter. In the case of Dmitri Alexeyevich Volkov, the name reads like a thesis statement for a life defined by paradox — a man of war named for the earth, a soldier christened as a defender, a predator who learned to shepherd. '}
              <em>Dmitri</em>
              {' traces its roots to Demeter, the ancient goddess of harvest, grain, and the fertile earth.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Unlike his peers who sought comfort in the Tsarevich’s benevolence, Dmitri found solace in the machinery of war. He saw the human body not as a vessel for the soul, but as an inefficient engine requiring constant fuel and maintenance. It was this detached, clinical perspective that caught the eye of the military recruiters. They didn’t see a boy; they saw a blade waiting to be sharpened.'}
            </p>
          </div>

          {/* Pull quote */}
          <PullQuote accent="crimson">
            {'"Loyalty is just a currency you haven’t spent yet."'}
          </PullQuote>

          {/* Second section */}
          <div>
            <p className="font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'His ascent through the ranks was swift, propelled by a distinct lack of hesitation. Where others paused to consider the morality of a command, Volkov had already calculated the trajectory of the outcome. Strength without purpose was just violence. Violence without restraint was just cruelty. And cruelty was the one thing he could no longer serve.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'The erosion began slowly. A village burned not because it posed a strategic threat, but because a commanding officer wanted to send a message. A prisoner beaten not for intelligence, but because the interrogator enjoyed it. Each incident was small enough to rationalize in isolation — the fog of war, the necessities of command. But they accumulated like snow on a roof, and Dmitri began to feel the timbers of his worldview groaning under the weight.'}
            </p>
          </div>

          {/* Combat data trigger */}
          <div className="my-12 flex items-center gap-4">
            <div className="hairline flex-1 dark:bg-vapor/30" />
            <button
              onClick={() => setCombatOpen(true)}
              className="flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.25em] text-crimson transition-colors hover:text-ink dark:hover:text-ink-secondary"
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
            src="/images/volkov_fullbody.webp"
            alt="Dmitri Volkov full body reference"
            archiveId="Archive ID: V08-A"
            caption="Figure 1: The Iron Forest // Full Reference"
            aspect="portrait"
          />

          {/* Third section */}
          <div className="mt-8">
            <p className="font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'It was during the final campaign that his potential truly manifested. The night of the village burning, when Dmitri made his decision to desert, he looked into the eyes of a child and saw a fear so total, so absolute, that it had gone beyond terror into a kind of blank emptiness. In that moment, a Dendro Vision manifested: a quiet acknowledgment from the gods that the bloodied soil of a battlefield could still nurture life.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Now, working as a highly guarded mercenary wandering Liyue, Dmitri navigates the world not as a weapon of destruction, but as a guardian. Beneath his terrifying, scarred exterior and clipped responses lies a gentle man fighting a daily war against his own history, desperate for a safety he has never known and a connection he believes he does not deserve.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'His body is a record of violence. Every scar is a story, and he carries dozens. The scar across his left cheek — a clean, deliberate line that speaks of a bladed weapon wielded with precision — is the first thing most people notice after his crimson eyes. He does not hide it. He does not explain it unless asked. And even then, the explanation is terse.'}
            </p>
          </div>

          <PullQuote accent="crimson">
            {'"A sword that only knows how to cut will eventually run out of things worth cutting."'}
          </PullQuote>

          <div>
            <p className="font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'The Dendro Vision holder who looks like a Cryo warrior. The man named for the earth goddess who is built like a siege engine. The wolf who chose to become a shepherd. Every aspect of Dmitri’s physical presence contains this tension between what he was made to be and what he chose to become. His body is a war machine. His Vision grows flowers. The contradiction is the point.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'He has never considered changing his name. Deserter or not, he is a Volkov. The name is a scar, and Dmitri does not hide his scars.'}
            </p>
          </div>

          {/* Name Analysis */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Name Analysis
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'The tripartite name structure encapsulates Dmitri\'s central tension: he is simultaneously a force of destruction and a force of growth. The name reads like a thesis statement for a life defined by paradox.'}
            </p>

            <div className="mt-8 overflow-x-auto border border-vapor dark:border-vapor/30">
              <table className="w-full min-w-[600px] text-left">
                <thead>
                  <tr className="border-b border-vapor dark:border-vapor/30 bg-canvas dark:bg-canvas-secondary">
                    <th className="px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-graphite">
                      Component
                    </th>
                    <th className="px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-graphite">
                      Origin
                    </th>
                    <th className="px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-graphite">
                      Significance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-vapor dark:border-vapor/30">
                    <td className="px-5 py-3 font-serif text-sm font-medium text-crimson">Dmitri</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">From Demeter, goddess of harvest</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Earth-nurturer — prophetic link to his Dendro Vision</td>
                  </tr>
                  <tr className="border-b border-vapor dark:border-vapor/30 bg-vapor/20 dark:bg-vapor/10">
                    <td className="px-5 py-3 font-serif text-sm font-medium text-crimson">Alexeyevich</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Patronymic, &quot;son of Alexei&quot; (to defend)</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Chain of martial duty — fulfilled the meaning while betraying its cultural context</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 font-serif text-sm font-medium text-crimson">Volkov</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">From volk — wolf</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Pack hunter, apex predator — a lone wolf driven from the pack for choosing conscience</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'His father, Alexei Volkov, was a career officer in the Snezhnayan infantry who died in service when Dmitri was nineteen. The patronymic is a chain binding Dmitri to a legacy of martial duty. That he eventually broke this chain — deserting to protect refugees — makes it simultaneously a source of pride and guilt. He is, in the truest sense, a defender. But he defended the wrong people, by his nation\'s reckoning.'}
            </p>
          </section>

          {/* Nicknames */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Nicknames & Forms of Address
              </h2>
            </div>

            <div className="mt-8 border-l-2 border-crimson/20 dark:border-crimson/30 pl-6">
              <h3 className="font-serif text-lg text-ink dark:text-ink">&quot;Volkov&quot;</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'The professional default. Clients, contacts, the mercenary network — all know him as Volkov. A surname that functions as a brand: sharp, efficient, lupine. He introduces himself as Volkov to strangers without exception. A surname is a wall. It says: we are not friends, we are conducting business.'}
              </p>
            </div>

            <div className="mt-6 border-l-2 border-crimson/20 dark:border-crimson/30 pl-6">
              <h3 className="font-serif text-lg text-ink dark:text-ink">&quot;Dima&quot;</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'The diminutive form of Dmitri, and the most intimate form of address anyone can use with him. The list of people permitted to call him Dima is vanishingly small — his late mentor, Sergeant Yuri Petrov, used it. When someone calls him Dima without permission, his reaction is immediate: a tightening of the jaw, a flicker of something dangerous in those crimson eyes. Not anger, exactly. The discomfort of having a boundary crossed.'}
              </p>
            </div>

            <div className="mt-6 border-l-2 border-crimson/20 dark:border-crimson/30 pl-6">
              <h3 className="font-serif text-lg text-ink dark:text-ink">&quot;The Iron Forest&quot;</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'His reputation title, derived from his constellation Silva Ferrum. A forest made of iron, living wood with the hardness of metal, growth that cannot be cut down. It captures both his Dendro Vision and his immovable combat presence. A fearsome reputation reduces the need for actual violence — many threats simply choose not to engage. He does not correct people who use it, but he does not introduce himself by it either.'}
              </p>
            </div>
          </section>

          {/* Physical Description Expansion */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                The Scar Catalog
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Each scar represents a moment where Dmitri\'s body absorbed damage that might have killed someone less durable. He does not display them proudly, nor does he hide them with shame. They simply are.'}
            </p>

            <div className="mt-8 overflow-x-auto border border-vapor dark:border-vapor/30">
              <table className="w-full min-w-[600px] text-left">
                <thead>
                  <tr className="border-b border-vapor dark:border-vapor/30 bg-canvas dark:bg-canvas-secondary">
                    <th className="px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-graphite">
                      Location
                    </th>
                    <th className="px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-graphite">
                      Description
                    </th>
                    <th className="px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-graphite">
                      Origin
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-vapor dark:border-vapor/30">
                    <td className="px-5 py-3 font-serif text-sm text-crimson">Left cheek</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Clean diagonal slash, healed white</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Fatui training exercise at age 20</td>
                  </tr>
                  <tr className="border-b border-vapor dark:border-vapor/30 bg-vapor/20 dark:bg-vapor/10">
                    <td className="px-5 py-3 font-serif text-sm text-crimson">Across chest</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Long diagonal line, collarbone to hip</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Deserter-hunter — the fight lasted eleven minutes</td>
                  </tr>
                  <tr className="border-b border-vapor dark:border-vapor/30">
                    <td className="px-5 py-3 font-serif text-sm text-crimson">Both hands</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Thick calluses, small cuts across knuckles</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Years of claymore work — rough enough to catch on silk</td>
                  </tr>
                  <tr className="border-b border-vapor dark:border-vapor/30 bg-vapor/20 dark:bg-vapor/10">
                    <td className="px-5 py-3 font-serif text-sm text-crimson">Left forearm</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Parallel scars, evenly spaced</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Siege of Morepesok — held a corridor alone for forty minutes</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 font-serif text-sm text-crimson">Lower back</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Puckered, circular scar</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Crossbow bolt — he does not discuss the circumstances</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'The Dendro Vision holder who looks like a Cryo warrior. The man named for the earth goddess who is built like a siege engine. His body is a war machine. His Vision grows flowers. The contradiction is the point — every aspect of his physical presence contains the tension between what he was made to be and what he chose to become.'}
            </p>
          </section>

          {/* Voice & Speech Patterns */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Voice & Speech Patterns
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Dmitri\'s voice is a deep baritone that resonates from his chest. It carries without being raised — people instinctively quiet when he speaks. His Snezhnayan accent is pronounced but controlled: clipped consonants, flat broad vowels. When tired or emotional, the accent thickens. When making an effort to be understood, he slows his speech and softens the edges, though it clearly costs him effort.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'He speaks in short, declarative sentences. Subject, verb, object. No filler words — no "um," no "well," no "you know." Every word is selected, weighed, and deployed with the same economy he applies to ammunition. Silence, for Dmitri, is not awkward. It is the default state. Words are the interruption.'}
            </p>

            {/* Dialogue samples */}
            <div className="mt-8 border border-vapor dark:border-vapor/30 p-6">
              <p className="font-sans text-xs italic leading-relaxed text-graphite">
                {'Casual — With a Trusted Ally'}
              </p>
              <div className="mt-4 h-px bg-vapor dark:bg-vapor/30" />
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex gap-4">
                  <span className="w-16 shrink-0 text-right font-display text-[9px] uppercase tracking-[0.15em] text-graphite">Ally</span>
                  <span className="font-serif text-sm leading-relaxed text-ink dark:text-ink">You look like hell, Volkov. When did you last sleep?</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-16 shrink-0 text-right font-display text-[9px] uppercase tracking-[0.15em] text-crimson">Dmitri</span>
                  <div>
                    <span className="font-sans text-xs italic text-graphite">[long pause] </span>
                    <span className="font-serif text-sm leading-relaxed text-ink dark:text-ink">Tuesday.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="w-16 shrink-0 text-right font-display text-[9px] uppercase tracking-[0.15em] text-graphite">Ally</span>
                  <span className="font-serif text-sm leading-relaxed text-ink dark:text-ink">{"It's Friday."}</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-16 shrink-0 text-right font-display text-[9px] uppercase tracking-[0.15em] text-crimson">Dmitri</span>
                  <span className="font-serif text-sm leading-relaxed text-ink dark:text-ink">Then Tuesday. I answered your question.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 border border-vapor dark:border-vapor/30 p-6">
              <p className="font-sans text-xs italic leading-relaxed text-graphite">
                {'Professional — Negotiating a Contract'}
              </p>
              <div className="mt-4 h-px bg-vapor dark:bg-vapor/30" />
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex gap-4">
                  <span className="w-16 shrink-0 text-right font-display text-[9px] uppercase tracking-[0.15em] text-graphite">Client</span>
                  <span className="font-serif text-sm leading-relaxed text-ink dark:text-ink">There have been... reports. Abyss Order activity in the region.</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-16 shrink-0 text-right font-display text-[9px] uppercase tracking-[0.15em] text-crimson">Dmitri</span>
                  <span className="font-serif text-sm leading-relaxed text-ink dark:text-ink">Then the price triples and I choose the route. Non-negotiable. If you want cheap, hire someone who does not know what an Abyss Herald can do to an unprotected caravan.</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-16 shrink-0 text-right font-display text-[9px] uppercase tracking-[0.15em] text-graphite">Client</span>
                  <span className="font-serif text-sm leading-relaxed text-ink dark:text-ink">{"That's—"}</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-16 shrink-0 text-right font-display text-[9px] uppercase tracking-[0.15em] text-crimson">Dmitri</span>
                  <span className="font-serif text-sm leading-relaxed text-ink dark:text-ink">Those are the options. Choose.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Psychological Framework */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Psychological Framework
              </h2>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="border border-vapor dark:border-vapor/30 p-5">
                <p className="font-display text-[10px] uppercase tracking-[0.2em] text-crimson">
                  MBTI: ISTJ — The Logistician
                </p>
                <p className="mt-3 font-serif text-body leading-relaxed text-ink dark:text-ink">
                  {'Introverted Sensing (Si) dominant — his world is built on accumulated experience, pattern recognition, and the deep internalization of what has worked before. Extraverted Thinking (Te) auxiliary — decisions are made through logical analysis of external data. He does not ask "how do I feel about this?" He asks "what is the most efficient course of action?"'}
                </p>
              </div>

              <div className="border border-vapor dark:border-vapor/30 p-5">
                <p className="font-display text-[10px] uppercase tracking-[0.2em] text-crimson">
                  Enneagram: 6w5 — The Defender
                </p>
                <p className="mt-3 font-serif text-body leading-relaxed text-ink dark:text-ink">
                  {'The core Six drive — the need for security and certainty in an uncertain world — defines his hypervigilance, his loyalty testing, and his difficulty trusting. The Five wing adds intellectual rigor, self-sufficiency, and a tendency to withdraw into observation when overwhelmed. He prepares for worst-case scenarios not out of pessimism, but because preparation is the only form of control he trusts.'}
                </p>
              </div>
            </div>
          </section>

          {/* End divider */}
          <div className="mt-24 flex justify-center">
            <div className="h-px w-16 bg-vapor dark:bg-vapor/30" />
          </div>
        </article>

        {/* Bottom navigation */}
        <SectionNav
          prev={{ label: "Volkov Hub", href: "/characters/dmitri-volkov" }}
          next={{ label: "Lan Qingyu", href: "/characters/lan-qingyu/identity" }}
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
