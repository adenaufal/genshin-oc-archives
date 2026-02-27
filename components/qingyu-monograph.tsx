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

          {/* Nicknames */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jade" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Nicknames & Forms of Address
              </h2>
            </div>

            <div className="mt-8 border-l-2 border-jade/20 dark:border-jade/30 pl-6">
              <h3 className="font-serif text-lg text-ink dark:text-ink">&quot;Miss Lan&quot; / &quot;Broker Lan&quot;</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'Professional address. Clients use this. Informants use this. The Millelith officers who suspect her activities but cannot prove them use this through gritted teeth. Every "Miss Lan" is a confirmation that her constructed identity has been accepted as real.'}
              </p>
            </div>

            <div className="mt-6 border-l-2 border-jade/20 dark:border-jade/30 pl-6">
              <h3 className="font-serif text-lg text-ink dark:text-ink">&quot;The Mist Serpent&quot;</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'Her reputation title, derived from her constellation Serpens Nebula. A serpent that moves through mist, visible only in glimpses, its full form never revealed. She cultivated this title deliberately — a fearsome reputation is as useful as a weapon, and considerably more elegant. Fear is a currency, and she collects every denomination.'}
              </p>
            </div>

            <div className="mt-6 border-l-2 border-jade/20 dark:border-jade/30 pl-6">
              <h3 className="font-serif text-lg text-ink dark:text-ink">&quot;Yu&apos;er&quot; (羽儿)</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'The diminutive her mother used. No one living uses this name. The sound of it, if she heard it unexpectedly, would be the fastest route through every defense she has ever built. She has imagined hearing it, sometimes, in the voice of a mother who has been dead for fifteen years, and the imagination alone is enough to make her hands tremble around her teacup.'}
              </p>
            </div>
          </section>

          {/* Physical Description — Jade Hairpin */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jade" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                The Jade Hairpin
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Her jade hairpin is the single accessory she wears in every context. An antique purchased at considerable expense during the early years of her brokerage, when she was still furnishing the Lan Qingyu identity with the appropriate props. Over the decades, it has ceased being a prop and become something real: a talisman, a comfort object, the one physical anchor in an identity built on sand.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'She touches it when thinking, adjusts it when anxious, and grips it when afraid. If it were lost, the reaction would be disproportionate to the loss of a hair ornament and entirely proportionate to the loss of the last fixed point in a constructed life. The hairpin is simultaneously talisman, tell, and weapon — she has, on at least one occasion, used it to end a conversation in a manner that was not metaphorical.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Her appearance is a text on the theme of artifice. Everything visible is constructed — the name, the clothes, the hair, the expression. She is a woman who has made herself from raw materials that no one would have predicted could produce this result. The dock worker\'s daughter who became the most elegant woman in any room she enters did not accomplish this through luck. She accomplished it through observation, imitation, practice, and an absolutely merciless commitment to the project of self-invention.'}
            </p>
          </section>

          {/* Five-Layer Preview */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jade" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                The Five Layers
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Qingyu operates on five layers simultaneously. Each layer is a complete persona, and the distance between them is measured in years of practice and the accumulated weight of necessity.'}
            </p>

            <div className="mt-8 border border-vapor dark:border-vapor/30 p-5">
              <p className="font-display text-[10px] uppercase tracking-[0.2em] text-jade">Layer 1 — The Socialite</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'Beautiful, warm, wealthy, charming, slightly mysterious. The store window — designed to make you stop looking before you reach the actual inventory.'}
              </p>
            </div>

            <div className="mt-4 border border-vapor dark:border-vapor/30 p-5">
              <p className="font-display text-[10px] uppercase tracking-[0.2em] text-jade">Layer 2 — The Broker</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'Sharp, efficient, ruthlessly fair. Her intelligence is accurate, her discretion absolute, her prices high because her product is worth every Mora.'}
              </p>
            </div>

            <div className="mt-4 border border-vapor dark:border-vapor/30 p-5">
              <p className="font-display text-[10px] uppercase tracking-[0.2em] text-jade">Layer 3 — The Strategist</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'Witty rather than charming, sharp rather than warm. This layer feels like the real Qingyu — and that is precisely the point. By revealing a layer beneath, she creates the impression of intimacy.'}
              </p>
            </div>

            <div className="mt-4 border border-vapor dark:border-vapor/30 p-5">
              <p className="font-display text-[10px] uppercase tracking-[0.2em] text-jade">Layer 4 — The Survivor</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'The dock worker\'s daughter — the girl who stole rice, who listened at keyholes. Pragmatic, fierce, occasionally ruthless, possessed of an emotional intensity that the upper layers exist to contain.'}
              </p>
            </div>

            <div className="mt-4 border border-vapor dark:border-vapor/30 p-5">
              <p className="font-display text-[10px] uppercase tracking-[0.2em] text-jade">Layer 5 — The Child</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'The original person — the girl before the hunger, before the first lie. She wanted simple things: safety, warmth, a full stomach, her father\'s hand, her mother\'s voice saying Yu\'er in the evening light. A locked room in a house she has been renovating for thirty years.'}
              </p>
            </div>
          </section>

          {/* Voice & Speech Patterns */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jade" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Voice & Speech Patterns
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Where Dmitri treats words as ammunition to be conserved, Qingyu treats them as silk to be woven. Her speech is rich, layered, and deliberately beautiful. She speaks in complex sentences with subordinate clauses nested like puzzle boxes, each one opening to reveal another meaning beneath.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'This linguistic abundance is not excess. It is camouflage. She talks around things — approaching the central point from multiple angles, surrounding it with misdirection, so that the listener absorbs her intended message without ever identifying the moment it was delivered. She can say "no" in a way that sounds like "yes." She can refuse a request while making the requester feel grateful for the refusal.'}
            </p>

            {/* Dialogue sample */}
            <div className="mt-8 border border-vapor dark:border-vapor/30 p-6">
              <p className="font-sans text-xs italic leading-relaxed text-graphite">
                {'Social Performance — At a Gathering'}
              </p>
              <div className="mt-4 h-px bg-vapor dark:bg-vapor/30" />
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex gap-4">
                  <span className="w-20 shrink-0 text-right font-display text-[9px] uppercase tracking-[0.15em] text-graphite">Merchant</span>
                  <span className="font-serif text-sm leading-relaxed text-ink dark:text-ink">Miss Lan, your observations about the jade market were remarkably prescient.</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-20 shrink-0 text-right font-display text-[9px] uppercase tracking-[0.15em] text-jade">Qingyu</span>
                  <div>
                    <span className="font-sans text-xs italic text-graphite">[warm smile] </span>
                    <span className="font-serif text-sm leading-relaxed text-ink dark:text-ink">You flatter me. I merely pay attention to the weather and notice which way the wind is blowing.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="w-20 shrink-0 text-right font-display text-[9px] uppercase tracking-[0.15em] text-graphite">Merchant</span>
                  <span className="font-serif text-sm leading-relaxed text-ink dark:text-ink">And yet no one else did.</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-20 shrink-0 text-right font-display text-[9px] uppercase tracking-[0.15em] text-jade">Qingyu</span>
                  <div>
                    <span className="font-sans text-xs italic text-graphite">[slight pause, a tilt of the head] </span>
                    <span className="font-serif text-sm leading-relaxed text-ink dark:text-ink">{"Perhaps they were looking at different winds. But listen to me, speculating when there's perfectly good wine to enjoy."}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Psychological Framework */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jade" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Psychological Framework
              </h2>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="border border-vapor dark:border-vapor/30 p-5">
                <p className="font-display text-[10px] uppercase tracking-[0.2em] text-jade">
                  MBTI: ENFJ — The Protagonist
                </p>
                <p className="mt-3 font-serif text-body leading-relaxed text-ink dark:text-ink">
                  {'Extraverted Feeling (Fe) dominant — she reads rooms the way Dmitri reads battlefields: instinctively, comprehensively, and with an accuracy that borders on precognition. Introverted Intuition (Ni) auxiliary — beneath the social performance, a pattern-recognition engine runs constantly, connecting disparate data points into predictive models that inform her strategy.'}
                </p>
              </div>

              <div className="border border-vapor dark:border-vapor/30 p-5">
                <p className="font-display text-[10px] uppercase tracking-[0.2em] text-jade">
                  Enneagram: 3w4 — The Professional
                </p>
                <p className="mt-3 font-serif text-body leading-relaxed text-ink dark:text-ink">
                  {'The core Three drive — the need to achieve, to be valued, to construct an identity that commands respect — is the engine of her entire adult life. The Four wing adds depth, aesthetic sensitivity, and a private melancholy that the Three performance exists to conceal. She does not merely want to succeed; she wants to succeed beautifully, and the beauty must appear effortless.'}
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
