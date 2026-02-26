"use client"

import { useState } from "react"
import { TopNav } from "./top-nav"
import { CombatData } from "./combat-data"
import { PullQuote } from "./pull-quote"
import { SectionNav } from "./section-nav"

export function QingyuHistory() {
  const [combatOpen, setCombatOpen] = useState(false)

  return (
    <>
      <TopNav label="Book II / History" accentColor="jade" />

      <main className="relative pb-24 pt-32">
        {/* Scroll binding motif */}
        <div
          className="pointer-events-none absolute bottom-0 left-4 top-0 hidden w-px lg:block"
          style={{ backgroundColor: "rgba(42, 75, 66, 0.08)" }}
          aria-hidden="true"
        />

        <article className="mx-auto max-w-reading px-6 lg:pl-12 lg:pr-6">
          {/* Ref code */}
          <p className="font-display text-[10px] uppercase tracking-[0.2em] text-jade">
            REF: LIY-004 // Part 2
          </p>

          {/* Title */}
          <h1 className="mt-6 font-serif text-hero italic text-ink dark:text-ink">
            History & Relationships
          </h1>

          {/* Subtitle */}
          <p className="mt-4 font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
            From Docks to Heights
          </p>

          {/* Divider */}
          <div className="mt-12 hairline dark:bg-vapor/30" />

          {/* Section: Origins */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jade" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Origins: The Dock Worker\'s Daughter
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Qingyu\'s birth name is never spoken in the narrative. She erased it from every record she could reach, bribed or threatened the keepers of records she could not reach, and has not spoken it aloud in over twenty years. The erasure was not symbolic — it was operational. The birth name is a thread that, if pulled, would unravel the entire tapestry of Lan Qingyu\'s constructed identity.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'She has nightmares, occasionally, in which someone speaks the birth name in public. In the dream, every head turns. Every mask falls. The elegant Lan Qingyu is revealed as — what? A girl who stole rice. A servant who listened at doors. The daughter of a dock worker who died because the harbor authority would not pay for safety equipment.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'She wakes from these dreams with her heart hammering and her hands gripping the sheets. She lies in the dark until her pulse steadies, and she does not go back to sleep.'}
            </p>
          </section>

          {/* The Five Layers */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jade" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                The Five Layers
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Where Dmitri Volkov operates on three psychological layers, Qingyu operates on five. This is not because she is more complex — complexity is not a competition — but because she has spent thirty years deliberately adding layers, constructing persona upon persona.'}
            </p>

            {/* Layer 1 */}
            <div className="mt-8 border-l-2 border-jade/20 dark:border-jade/30 pl-6">
              <h3 className="font-serif text-lg text-ink dark:text-ink">Layer One: The Socialite</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'What strangers see: beautiful, warm, wealthy, charming, slightly mysterious. This is the layer she has invested the most time in constructing. She moves through Liyue\'s elite spaces with the ease of someone who has always belonged there. The first layer is a store window — beautiful, inviting, designed to make you stop looking before you reach the actual inventory.'}
              </p>
            </div>

            {/* Layer 2 */}
            <div className="mt-6 border-l-2 border-jade/20 dark:border-jade/30 pl-6">
              <h3 className="font-serif text-lg text-ink dark:text-ink">Layer Two: The Broker</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'What clients see: sharp, efficient, ruthlessly fair, possessed of an information network spanning Liyue Harbor. The broker does not charm; she delivers. Her intelligence is accurate, her discretion absolute, her prices high because her product is worth every Mora.'}
              </p>
            </div>

            {/* Layer 3 */}
            <div className="mt-6 border-l-2 border-jade/20 dark:border-jade/30 pl-6">
              <h3 className="font-serif text-lg text-ink dark:text-ink">Layer Three: The Strategist</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'What close contacts see: witty rather than charming, sharp rather than warm, candid about operations. This layer feels like the real Qingyu — and that is precisely the point. By revealing a layer beneath the socialite and broker, she creates the impression of intimacy.'}
              </p>
            </div>

            {/* Layer 4 */}
            <div className="mt-6 border-l-2 border-jade/20 dark:border-jade/30 pl-6">
              <h3 className="font-serif text-lg text-ink dark:text-ink">Layer Four: The Survivor</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'What almost no one sees: the dock worker\'s daughter — the girl who stole rice, who listened at keyholes, who learned to read people because misreading them could mean going hungry. The survivor is pragmatic, fierce, occasionally ruthless, and possessed of an emotional intensity that the upper layers exist to contain.'}
              </p>
            </div>

            {/* Layer 5 */}
            <div className="mt-6 border-l-2 border-jade/20 dark:border-jade/30 pl-6">
              <h3 className="font-serif text-lg text-ink dark:text-ink">Layer Five: The Child</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'What no one sees, including Qingyu: the original person — the girl before the hunger, before the theft, before the first lie. The child wanted simple things: safety, warmth, a full stomach, her father\'s hand, her mother\'s voice saying Yu\'er in the evening light.'}
              </p>
            </div>

            <PullQuote accent="jade">
              {'"The distance between what Lan Qingyu shows and what she is might be measured in light-years. The socialite is a masterwork. The broker is formidable. The strategist is impressive. The survivor is fierce. And the child? The child is a locked room in a house she has been renovating for thirty years."'}
            </PullQuote>
          </section>

          {/* Section: The Ascent */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jade" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                The Ascent
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Qingyu\'s climb from the docks to the heights was not a single dramatic leap but a decades-long accumulation of small advantages, each one leveraged into the next. She started as a servant in the houses of the wealthy — listening at doors, reading correspondence left carelessly on desks, learning the manners and speech patterns of the upper class by observation and imitation.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'She discovered early that information was currency more valuable than Mora. A merchant\'s failing accounts, a politician\'s indiscretion, a trader\'s planned route — these could be traded for favors, protection, advancement. By twenty-three, she had accumulated enough secrets and influence to shed her birth identity entirely. Lan Qingyu was born: chosen name, constructed backstory, and a network of contacts that grew with every transaction.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Her Dendro Vision came at age thirty, after years of building her network — manifestation of her ability to "grow" connections and nurture webs of information. The Vision appeared not in combat but in negotiation: a moment when her carefully cultivated relationships converged to prevent a war between merchant houses that would have devastated the harbor.'}
            </p>
          </section>

          {/* Section: Key Relationships */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jade" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Key Relationships
              </h2>
            </div>

            {/* Mother */}
            <div className="mt-8 border-l-2 border-jade/20 dark:border-jade/30 pl-6">
              <h3 className="font-serif text-xl text-ink dark:text-ink">Her Mother</h3>
              <p className="mt-2 font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
                Deceased
              </p>
              <p className="mt-4 font-serif text-body leading-relaxed text-graphite">
                {'Qingyu\'s mother worked herself into an early grave, taking extra shifts at the docks to ensure her daughter had enough to eat. The memory of that sacrifice — and the guilt of having been the beneficiary of it — haunts Qingyu\'s every success. The diminutive "Yu\'er" that her mother used has not been spoken aloud in twenty years. To hear it unexpectedly would be the fastest route through every defense she has ever built.'}
              </p>
            </div>

            {/* Father */}
            <div className="mt-8 border-l-2 border-jade/20 dark:border-jade/30 pl-6">
              <h3 className="font-serif text-xl text-ink dark:text-ink">Her Father</h3>
              <p className="mt-2 font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
                Deceased — Dock Worker
              </p>
              <p className="mt-4 font-serif text-body leading-relaxed text-graphite">
                {'He slept like the dead after his shifts — twelve hours of broken labor and then unconsciousness until dawn. He trusted the night. He trusted the walls. He trusted that the world would still be there in the morning, until the morning it was not. A workplace accident, preventable, caused by the harbor authority\'s refusal to pay for safety equipment. His death was the moment Qingyu understood that the world distributes its rewards to those who take, not those who wait.'}
              </p>
            </div>

            {/* Dmitri Volkov */}
            <div className="mt-8 border-l-2 border-crimson/20 dark:border-crimson/30 pl-6">
              <h3 className="font-serif text-xl text-ink dark:text-ink">Dmitri Volkov</h3>
              <p className="mt-2 font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
                Professional Partner
              </p>
              <p className="mt-4 font-serif text-body leading-relaxed text-graphite">
                {'Dmitri represents a disruption to Qingyu\'s carefully maintained system. His refusal to be charmed, manipulated, or strategically managed means that her upper layers — designed for exactly those purposes — have no purchase on him. In his presence, the masks do not fail; they simply become unnecessary. The absence of their purpose is the most disorienting experience of her adult life.'}
              </p>
            </div>
          </section>

          {/* Section: Network */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jade" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                The Information Network
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Qingyu\'s network spans Liyue Harbor and extends into neighboring territories. It includes servants in wealthy households, clerks in government offices, merchants with access to trade routes, and informants in the criminal underworld. The network is maintained with meticulous care — contacts checked daily, relationships tended, intelligence verified, redundancies confirmed.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'The network operates on a web model: every node connected to multiple others, no single point of failure, information flowing through redundant channels. Qingyu designed it this way deliberately, modeling it on the mycorrhizal networks that connect forest trees — decentralized, resilient, capable of transmitting chemical warnings across vast distances.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'The cost of this network is isolation. Knowledge creates asymmetry, and asymmetry prevents genuine connection. Everyone who knows Qingyu knows her through a specific lens — socialite, broker, strategist — and no one sees the complete picture. She has made herself indispensable to hundreds of people while remaining fundamentally unknown to all of them.'}
            </p>
          </section>

          {/* Section: The Trust Asymmetry */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jade" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                The Trust Asymmetry
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'The defining feature of Qingyu\'s relationships is the trust asymmetry: everyone who interacts with her must decide how much to reveal, while she decides how much to reveal of what she has learned. She knows secrets that could topple merchants, destroy marriages, and end careers. She has never leaked a confidence — not out of moral principle, but because discretion is the product that justifies her prices.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'This asymmetry produces a particular kind of loneliness. Qingyu is surrounded by people who need her, fear her, or find her useful, but she is touched by no one. The question that defines her arc is whether anyone — whether she — can reach the child at the center of the labyrinth again, and whether what they find there is still alive.'}
            </p>
          </section>

          {/* End divider */}
          <div className="mt-24 flex justify-center">
            <div className="h-px w-16 bg-vapor dark:bg-vapor/30" />
          </div>
        </article>

        {/* Bottom navigation */}
        <SectionNav
          prev={{ label: "Identity", href: "/characters/lan-qingyu/identity" }}
          next={{ label: "Behavior", href: "/characters/lan-qingyu/behavior" }}
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
